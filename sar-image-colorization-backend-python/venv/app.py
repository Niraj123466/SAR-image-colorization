# app.py
from flask import Flask, request, jsonify
from keras.models import load_model  # or import your model framework
import numpy as np
from PIL import Image
import io

app = Flask(__name__)

# Load your pre-trained model
model = load_model('path_to_your_model.h5')  # Adjust according to your model format

@app.route('/api/colorize', methods=['POST'])
def colorize_image():
    # Get the image from the request
    file = request.files['sarImage']
    img = Image.open(file.stream)
    img = img.resize((input_width, input_height))  # Resize to the model's input shape
    img_array = np.array(img) / 255.0  # Normalize if needed
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension

    # Perform inference
    colorized_img_array = model.predict(img_array)

    # Convert the output back to an image format
    colorized_img = (colorized_img_array[0] * 255).astype(np.uint8)  # Adjust as needed
    colorized_image = Image.fromarray(colorized_img)

    # Save or return the colorized image
    colorized_image_path = 'path_to_save_colorized_image.jpg'
    colorized_image.save(colorized_image_path)

    return jsonify({'colorizedImage': colorized_image_path})

if __name__ == '__main__':
    app.run(port=5001)  # Use a different port than the Node.js server
