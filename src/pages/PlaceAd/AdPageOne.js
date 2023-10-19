import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import { AdContainer } from "./PlaceAd.styled";

export default function AdPageOne({ onNextPage }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles(Array.from(files));

    // Use FileReader to read and store data URLs for images
    const imageUrls = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (event) => {
        imageUrls.push(event.target.result);
        if (imageUrls.length === files.length) {
          setImageURLs(imageUrls);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDrop = (e, index) => {
    const sourceIndex = e.dataTransfer.getData("index");
    const updatedFiles = [...selectedFiles];
    const updatedURLs = [...imageURLs];

    const [draggedFile] = updatedFiles.splice(sourceIndex, 1);
    updatedFiles.splice(index, 0, draggedFile);

    const [draggedURL] = updatedURLs.splice(sourceIndex, 1);
    updatedURLs.splice(index, 0, draggedURL);

    setSelectedFiles(updatedFiles);
    setImageURLs(updatedURLs);
  };

  const removeImage = (index) => {
    const updatedFiles = [...selectedFiles];
    const updatedURLs = [...imageURLs];

    updatedFiles.splice(index, 1);
    updatedURLs.splice(index, 1);

    setSelectedFiles(updatedFiles);
    setImageURLs(updatedURLs);
  };
  return (
    <AdContainer>
      <div className="inputContainer">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          placeholder="Enter the title of the product or service"
          type="text"
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="category">Category</label>
        <select name="Category" id="category">
          <option value="">Select Category</option>
        </select>
      </div>

      <div className="inputContainer">
        <label htmlFor="sub-Category">Sub-Category</label>
        <select name="Sub-Category" id="sub-Category">
          <option value="">Select Sub-Category</option>
        </select>
      </div>

      <div className="locationWrapper">
        <div className="inputContainer">
          <label htmlFor="state">State</label>
          <select name="State" id="state">
            <option value="">Select State</option>
          </select>
        </div>
        <div className="inputContainer">
          <label htmlFor="city">City</label>
          <select name="City" id="city">
            <option value="">Select City</option>
          </select>
        </div>
      </div>
      <div className="inputContainer">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          className="addressInput"
          placeholder="Enter your store address"
          type="text"
        />
      </div>
      <div className="inputContainer">
        <label>Pictures</label>
        <p className="picturesCaption">
          You are required to add 1 picture is this category
        </p>
        <div className="imageInputWrapper">
          <InlineIcon icon="akar-icons:image" />
          <p className="inputDragCaption">
            Drag and drop picture here or{" "}
            <label htmlFor="fileInput" className="fileInputButton">
              Choose picture
            </label>
          </p>
          <input
            id="fileInput"
            className="imageInput"
            type="file"
            accept="image/png, image/jpeg"
            multiple
            onChange={handleFileChange}
          />
          <ul>
            <li>Recommeded picture size is (870 x 493)px</li>
            <li>Allowed image type (png, jpg, jpeg)</li>
            <li>You can upload up to 4 pictures</li>
            <li>Picture maximum size 3 MB</li>
          </ul>
        </div>
      </div>

      {imageURLs.length > 0 && (
        <div className="selectedImagesContainer">
          <div className="captionContainer">
            <InlineIcon icon="charm:info" />
            <p>
              The first pictures serves as the cover image. You can rearrange
              the order of your pictures by grabbing and dragging
            </p>
          </div>
          {imageURLs.map((url, index) => (
            <div
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, index)}
              draggable
              key={index}
              className="imageContainer"
            >
              <div className="imageWrapper">
                <img
                  src={url}
                  style={{ width: 50, height: 50 }}
                  alt={`Image ${index}`}
                  className="image-thumbnail"
                />
                <p className="numberCaption">{index + 1}</p>
              </div>
              <button onClick={() => removeImage(index)}>
                <InlineIcon icon="ph:x-bold" />
              </button>
            </div>
          ))}
        </div>
      )}
      <button className="nextButton" onClick={onNextPage}>Next Step</button>
    </AdContainer>
  );
}
