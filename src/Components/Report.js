import React, { useState, useEffect } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import "./CSS/Report.css";
import logoBase64 from "./context/logo.js";



export default function Report() {
  const [scanResults, setScanResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScanResults = async () => {
      try {
        console.log("Fetching scan results...");
        const fileResults = await axios.get("/api/results/file");
        const urlResults = await axios.get("/api/results/url");

        const results = [...fileResults.data, ...urlResults.data];
        console.log("Fetched scan results:", results);

        setScanResults(results);
      } catch (err) {
        console.error("Error fetching scan results:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchScanResults();
  }, []);

  const generatePdf = (result, filename) => {
    try {
      console.log("Generating PDF for:", result);

      if (!result) {
        throw new Error("Invalid scan result data.");
      }

      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.width;

      if (logoBase64) {
        const logoWidth = 40; // Adjust logo size
        const logoHeight = 20;
        const logoX = 10; // Center the logo
        doc.addImage(logoBase64, "PNG", logoX, 10, logoWidth, logoHeight);
      } else {
        console.warn("Logo is missing or not in Base64 format.");
      }

      // ✅ Title
      doc.setFontSize(24);
      doc.setFont("helvetica", "bold");
      doc.setTextColor("#333333");
      doc.text("Scan Report", pageWidth / 2, 23, { align: "center"});

      const tableData = [];
      const tableHeaders = ["Key", "Value"];

      const addToTable = (key, value) => {
        tableData.push([key, value || "N/A"]); // Prevents undefined values
      };

      // ✅ Handle File Scan Results
      if (result.filename) {
        addToTable("Filename", result.filename);
        addToTable("Malware Detected", result.results?.malicious || "No data");
        addToTable("Virus Name", result.results?.virus_name || "N/A");
        addToTable("SHA256", result.results?.sha256 || "N/A");

        if (result.results?.strings?.length) {
          result.results.strings.forEach((str, index) => {
            addToTable(`String ${index + 1}`, str);
          });
        }
      }

      // ✅ Handle URL Scan Results
      if (result.url) {
        addToTable("URL", result.url);
        addToTable("Whitelist", result.results?.whitelist || "N/A");
        addToTable("Suspicious", result.results?.suspicious || "N/A");
        if (result.results?.ssl_details) {
          const ssl = result.results.ssl_details;
          addToTable("SSL Subject", ssl.Subject);
          addToTable("SSL Issuer", ssl.Issuer);
          addToTable("SSL Serial Number", ssl["Serial Number"]);
          addToTable("SSL Not Before", ssl["Not Before"]);
          addToTable("SSL Not After", ssl["Not After"]);
          addToTable("Signature Algorithm", ssl["Signature Algorithm"]);
          addToTable("SSL Version", ssl.Version);
        }
        addToTable("True Domain", result.results?.true_domain || "N/A");
      }

      if (tableData.length === 0) {
        throw new Error("No valid data to generate PDF.");
      }

      // ✅ Generate Table
      autoTable(doc, {
        head: [tableHeaders],
        body: tableData,
        startY: 40,
        styles: {
          head: { fillColor: "#007bff", textColor: "#ffffff", fontStyle: "bold" },
          body: { fillColor: "#f8f9fa", textColor: "#333333" },
          alternateRowStyles: { fillColor: "#ffffff" }
        }
      });

      doc.save(`${filename}_results.pdf`);
      console.log("PDF Generated Successfully:", `${filename}_results.pdf`);
    } catch (err) {
      console.error("Error generating PDF:", err);
      alert("Failed to generate PDF: " + err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="cont-size">
      <div className="container-fluid bg-dark">
        <table className="table table-striped bg-light">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name of Scan</th>
              <th scope="col">Date/time</th>
              <th scope="col">Download</th>
            </tr>
          </thead>
          <tbody>
            {scanResults.length > 0 ? (
              scanResults.map((result, index) => (
                <tr key={result._id} style={{ backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#ffffff" }}>
                  <th scope="row">{result._id}</th>
                  <td>{result.filename || result.url}</td>
                  <td>{new Date(result.timestamp).toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => generatePdf(result, result.filename || result.url)}
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">No scan results found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
