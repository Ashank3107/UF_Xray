import React, { useState } from 'react';
import './CSS/AnalyzeURL.css'

export default function AnalyzeURL() {
  const [url, setUrl] = useState('');
  const [scanResults, setScanResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleScan = async () => {
    setLoading(true);
    setError(null);
    setScanResults(null);

    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to scan URL');
      }

      const data = await response.json();
      setScanResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" id='bg-image'>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-1/2 max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          URL Analysis
        </h1>
        <input
          type="url"
          className="w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          placeholder="Enter URL to analyze"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button
          className="w-full bg-blue-600 text-white font-semibold py-2 mt-4 rounded-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
          onClick={handleScan}
          disabled={loading}
        >
          {loading ? "Scanning..." : "Scan URL"}
        </button>

        {error && (
          <div className="mt-3 p-2 bg-red-100 text-red-600 rounded-md text-center">
            {error}
          </div>
        )}

        {scanResults && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h2 className="text-xl font-semibold text-gray-700">
              Scan Results
            </h2>
            <p className="text-gray-600">URL: {scanResults.url}</p>
            <p
              className={`font-semibold ${
                scanResults.prediction === 1 ? "text-red-500" : "text-green-500"
              }`}
            >
              Prediction:{" "}
              {scanResults.prediction === 1 ? "Phishing 🚨" : "Safe ✅"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}