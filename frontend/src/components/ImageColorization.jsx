import React, { useState, useRef } from 'react';
import Heading from './Heading';

const ImageColorization = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [outputImage, setOutputImage] = useState(null);
    const fileInputRef = useRef(null); // Create a reference for the file input

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('http://localhost:5000/api/colorize', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            setOutputImage(`data:image/jpeg;base64,${data.colorized_image}`);  // Update outputImage with base64 data
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleClear = () => {
        setSelectedFile(null);
        setOutputImage(null);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-900 text-white p-4">
            <Heading/>
            <p className="mb-6">Upload a SAR image to see the colorization results.</p>
            <div className="flex space-x-4 w-full max-w-5xl">
                {/* Input Section */}
                <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 w-1/2">
                    <div
                        className="border-2 border-dashed border-gray-500 p-4 rounded-lg w-full h-64 flex items-center justify-center cursor-pointer"
                        onClick={() => fileInputRef.current.click()} // Open file dialog on click
                    >
                        {selectedFile ? (
                            <img src={URL.createObjectURL(selectedFile)} alt="Selected" className="object-cover h-full w-full rounded-md" />
                        ) : (
                            <span className="text-gray-400">Drop Image Here - or - Click to Upload</span>
                        )}
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            ref={fileInputRef} // Attach ref to the input
                        />
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <button onClick={handleClear} className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded">
                            Clear
                        </button>
                        <button onClick={handleSubmit} className="bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Output Section */}
                <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 w-1/2">
                    <div className="border-2 border-gray-500 p-4 rounded-lg w-full h-64 flex items-center justify-center">
                        {outputImage ? (
                            <img src={outputImage} alt="Colorized" className="object-cover h-full w-full rounded-md" />
                        ) : (
                            <span className="text-gray-400">Output will appear here</span>
                        )}
                    </div>
                    <button className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded mt-4">
                        Flag
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageColorization;
