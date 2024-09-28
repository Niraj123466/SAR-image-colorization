// server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Set up multer for file uploads (memory storage to handle in-memory files)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Endpoint to handle image uploads and colorization
app.post('/api/colorize', upload.single('image'), async (req, res) => {
    const { file } = req;
    if (!file) return res.status(400).send('No file uploaded.');

    try {
        // Get the image buffer from the request (uploaded file)
        const imageBuffer = file.buffer;

        // Simulate colorization process (Replace with actual model processing)
        // For now, we're mocking a return value. In a real scenario, you'd send the image to your model.
        // Replace the following logic with actual model processing.
        const colorizedImagePath = path.join(__dirname, 'mock_colorized_image.jpg');

        // Read the colorized image from file system or model output (mocked for now)
        const colorizedImage = fs.readFileSync(colorizedImagePath);

        // Convert the image to base64
        const colorizedImageBase64 = Buffer.from(colorizedImage).toString('base64');

        // Return the base64 encoded image to the frontend
        res.json({ colorized_image: colorizedImageBase64 });
    } catch (error) {
        console.error('Error during image processing:', error);
        res.status(500).send('An error occurred during the colorization process.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
