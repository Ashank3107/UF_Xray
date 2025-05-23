import React, { useState } from 'react';
import axios from 'axios';
import './CSS/AnalyzeFile.css'; // Import your CSS file

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (event) => setSelectedFile(event.target.files[0]);

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    setIsScanning(true);
    setUploadMessage('Scanning...');

    try {
      await axios.post('/api/scan', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploadMessage('Scan completed.');
    } catch (error) {
      console.error('Error scanning file:', error);
      setUploadMessage('Error scanning file.');
    } finally {
      setIsScanning(false);
      setSelectedFile(null); // Clear selected file
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" id='bg-image'>
      <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-1/2 max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Upload File for Scanning
        </h1>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose a file
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="file-upload flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-blue-400 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-500 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v8m0 0l-4-4m4 4l4-4m-8 8h8a2 2 0 002-2v-4m-2 6H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v4"
                />
              </svg>
              <span className="text-gray-600">
                Drag & drop your file here or click to select
              </span>
              <input
                type="file"
                accept=".txt,.pdf,.doc,.docx,.jpg,.png"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
          disabled={isScanning}
        >
          {isScanning ? "Scanning..." : "Scan File"}
        </button>
        {uploadMessage && (
          <p className="mt-4 text-sm text-gray-600 text-center">
            {uploadMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default FileUpload;