import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import nigerianStates from "../../components/nigerian-states.json";
import { AdContainer } from "./PlaceAd.styled";

const categories = [
  {
    id: 1,
    title: "Phone, Tablets and Smart  Watches",
    subcategories: [
      {
        id: 1,
        title: "Phone",
      },
      {
        id: 2,
        title: "Tablets",
      },
      {
        id: 3,
        title: "Smart Watches",
      },
    ],
  },
  {
    id: 2,
    title: "Auto Mobiles",
    subcategories: [
      {
        id: 4,
        title: "Electric Vehicles and Sustainable Mobility",
      },
    ],
  },
  {
    id: 3,
    title: "Property",
    subcategories: [
      {
        id: 5,
        title: "Rental Properties",
      },
    ],
  },
  {
    id: 4,
    title: "Health and Beauty",

    subcategories: [
      {
        id: 6,
        title: "Beauty Tools and Accessories",
      },
    ],
  },
  {
    id: 5,
    title: "Services",
    subcategories: [
      {
        id: 7,
        title: "Digital Marketing",
      },
    ],
  },
  {
    id: 6,
    title: "Business and Industry",
    subcategories: [
      {
        id: 8,
        title: "Business",
      },
      {
        id: 9,
        title: "Industry",
      },
    ],
  },
];

export default function AdPageOne({ onNextPage }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOffsetX, setDragOffsetX] = useState(null);
  const [cities, setCities] = useState([]);
  const [subcategories, setSubCategories] = useState([]);

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

  const handleTouchStart = (e, index) => {
    const touch = e.touches[0];
    // e.preventDefault();
    setDraggedIndex(index);
    setDragOffsetX(touch.clientX - e.target.getBoundingClientRect().left);
  };

  const handleTouchMove = (e, index) => {
    if (draggedIndex !== null && draggedIndex !== index) {
      // e.preventDefault();
      const touch = e.touches[0];
      const containerLeft = e.currentTarget.getBoundingClientRect().left;
      const position = touch.clientX - containerLeft - dragOffsetX;
      // Calculate new position and update the UI accordingly.
    }
  };

  const handleTouchEnd = (index) => {
    if (draggedIndex !== null && draggedIndex !== index) {
      const updatedFiles = [...selectedFiles];
      const updatedURLs = [...imageURLs];

      const [draggedFile] = updatedFiles.splice(draggedIndex, 1);
      updatedFiles.splice(index, 0, draggedFile);

      const [draggedURL] = updatedURLs.splice(draggedIndex, 1);
      updatedURLs.splice(index, 0, draggedURL);

      setSelectedFiles(updatedFiles);
      setImageURLs(updatedURLs);
    }

    setDraggedIndex(null);
  };

  const removeImage = (index) => {
    const updatedFiles = [...selectedFiles];
    const updatedURLs = [...imageURLs];

    updatedFiles.splice(index, 1);
    updatedURLs.splice(index, 1);

    setSelectedFiles(updatedFiles);
    setImageURLs(updatedURLs);
  };

  const handleSelectState = (e) => {
    setCities(
      nigerianStates.find((state) => state.state === e.target.value).lgas
    );
  };

  const handleSelectCategories = (e) => {
    setSubCategories(
      categories.find((cat) => cat.title === e.target.value).subcategories
    );
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
        <select onChange={handleSelectCategories} name="Category" id="category">
          <option value="">Select Category</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat.title}>
              {cat.title}
            </option>
          ))}
        </select>
      </div>

      <div className="inputContainer">
        <label htmlFor="sub-Category">Sub-Category</label>
        <select name="Sub-Category" id="sub-Category">
          <option value="">Select Sub-Category</option>
          {subcategories.map((subCat, i) => (
            <option key={i} value={subCat.title}>
              {subCat.title}
            </option>
          ))}
        </select>
      </div>

      <div className="locationWrapper">
        <div className="inputContainer">
          <label htmlFor="state">State</label>
          <select onChange={handleSelectState} name="State" id="state">
            <option value="">Select State</option>
            {nigerianStates.map((state, i) => {
              return (
                <option key={i} value={state.state}>
                  {state.state}
                </option>
              );
            })}
          </select>
        </div>
        <div className="inputContainer">
          <label htmlFor="city">City</label>
          <select name="City" id="city">
            <option value="">Select City</option>
            {cities.map((lga, i) => {
              return (
                <option key={i} value={lga}>
                  {lga}
                </option>
              );
            })}
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
              onTouchStart={(e) => handleTouchStart(e, index)}
              onTouchMove={(e) => handleTouchMove(e, index)}
              onTouchEnd={(e) => handleTouchEnd(e, index)}
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
      <button className="nextButton" onClick={onNextPage}>
        Next Step
      </button>
    </AdContainer>
  );
}
