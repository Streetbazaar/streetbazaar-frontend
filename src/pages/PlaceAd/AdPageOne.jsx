import { InlineIcon } from "@iconify/react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import nigerianStates from "../../components/nigerian-states.json";
import {
  appendImages,
  updateCategoryId,
  updateImages,
  updateInput,
  updateSubCategoryId,
} from "../../features/inputSlice";
import { AdContainer } from "./PlaceAd.styled";
import { motion } from "framer-motion";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}


export default function AdPageOne({ onNextPage }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  // const [imageURLs, setImageURLs] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOffsetX, setDragOffsetX] = useState(null);
  const [cities, setCities] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [progress, setProgress] = useState(0);
  const [fetchingImage, setFetchingImage] = useState(false);
  const { imageURLs, title, address, state, city, category, subCategory } =
    useSelector((state) => state.input);
    const {categoriesList} = useSelector((state)=>state.adverts)

  const dispatch = useDispatch();

  const cloudinaryUpload = async (photo) => {
    setFetchingImage(true);
    try {
      const data = new FormData();
      data.append("file", photo);
      data.append("upload_preset", "ad_photos_preset");
      data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
      data.append("api_key", process.env.REACT_APP_API_KEY);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Requested-With": "XMLHttpRequest",
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setProgress(progress);
            console.log(`Upload Progress: ${progress}%`);
            // You can use the progress value to update a progress bar or display the progress in some way.
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        setFetchingImage(false);
        dispatch(appendImages(response.data?.url));
        // console.log(response.data);
      }
    } catch (err) {
      setFetchingImage(false);
      toast.error(err.message);
    }
  };

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
          Array.from(files).forEach((file) => cloudinaryUpload(file));
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
    dispatch(updateImages(updatedURLs));
    // setImageURLs(updatedURLs);
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
      // setImageURLs(updatedURLs);
      dispatch(updateImages(updatedURLs));
    }

    setDraggedIndex(null);
  };

  const removeImage = (index) => {
    const updatedFiles = [...selectedFiles];
    const updatedURLs = [...imageURLs];

    updatedFiles.splice(index, 1);
    updatedURLs.splice(index, 1);

    setSelectedFiles(updatedFiles);
    // setImageURLs(updatedURLs);
    dispatch(updateImages(updatedURLs));
  };

  const handleInputChange = (e) => {
    dispatch(updateInput({ [e.target.name]: e.target.value }));
  };

  const handleSelectState = (e) => {
    handleInputChange(e);
    setCities(
      nigerianStates.find((state) => state.state === e.target.value).lgas
    );
  };

  const handleSelectCity = (e) => {
    handleInputChange(e);
    
  };

  const handleSelectCategories = (e) => {
    handleInputChange(e);
    const selectedCategoryTitle = e.target.value;
    const selectedCategory = categoriesList.find(
      (cat) => cat.title === selectedCategoryTitle
    );
    dispatch(updateCategoryId(selectedCategory.id));
    setSubCategories(
      categoriesList.find((cat) => cat.title === e.target.value).subcategories
    );
  };

  useEffect(() => {
    if (state) {
      setCities(nigerianStates?.find((s) => s.state === state).lgas);
    }
    if (category) {
      setSubCategories(
        categoriesList?.find((cat) => cat.title === category).subcategories
      );
    }
  }, [state, category]);

  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 10, type: "spring", stiffness: 100 }}
    >
      <AdContainer>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            // Check if imageUrls is empty
            if (imageURLs.length === 0) {
              // Display a toast or handle the error in your preferred way
              toast.error("Please select at least 1 image");
            } else {
              onNextPage();
            }
          }}
        >
          <div className="inputContainer">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              id="title"
              placeholder="Enter the title of the product or service"
              type="text"
              value={title}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="category">Category</label>
            <select
              aria-required
              onChange={handleSelectCategories}
              required
              name="category"
              id="category"
              value={category}
            >
              <option value="">Select Category</option>
              {categoriesList.map((cat, i) => (
                <option key={i} value={cat.title}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>

          <div className="inputContainer">
            <label htmlFor="sub-Category">Sub-Category</label>
            <select
              aria-required
              onChange={(e) => {
                handleInputChange(e);
                const selectedSubCategoryTitle = e.target.value;
                const selectedSubCategory = subcategories.find(
                  (subCat) => subCat.title === selectedSubCategoryTitle
                );
                dispatch(updateSubCategoryId(selectedSubCategory?.id));
              }}
              required
              name="subCategory"
              id="sub-Category"
              value={subCategory}
            >
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
              <select
                aria-required
                value={state}
                onChange={handleSelectState}
                required
                name="state"
                id="state"
              >
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
              <select
                aria-required
                value={city}
                onChange={handleSelectCity}
                required
                name="city"
                id="city"
              >
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
            <textarea
              required
              onChange={handleInputChange}
              name="address"
              id="address"
              className="addressInput"
              placeholder="Enter your store address"
              type="text"
              value={address}
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
                name="images"
              />
              <ul>
                <li>Recommeded picture size is (870 x 493)px</li>
                <li>Allowed image type (png, jpg, jpeg)</li>
                <li>You can upload up to 4 pictures</li>
                <li>Picture maximum size 3 MB</li>
              </ul>
            </div>
          </div>

          {imageURLs?.length > 0 && (
            <div className="selectedImagesContainer">
              <div className="captionContainer">
                <InlineIcon icon="charm:info" />
                <p>
                  The first pictures serves as the cover image. You can
                  rearrange the order of your pictures by grabbing and dragging
                </p>
              </div>
              {imageURLs?.map((url, index) => (
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
                      alt={`Product ${index}`}
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
          {fetchingImage && <LinearProgressWithLabel value={progress} />}
          <button className="nextButton" type="submit">
            Next Step
          </button>
        </form>
      </AdContainer>
    </motion.main>
  );
}
