import React from "react";
import {
  MainContainer,
  SearchIconDiv,
  SearchInput,
  StyledInput,
} from "../../components/styles/styledComponents";
import { Link, useParams } from "react-router-dom";
import {
  CategoryDetailContainer,
  ColoredDiv,
  CustomSelect,
  FilterModalBox,
  FlexGroupContainer,
  ProductContainer,
  ProductFlexGroup,
} from "./CategoryDetail.styled";
import laptopImg from "../../assets/images/laptop.png";
import Product from "../../components/Product/Product";
import { SearchIconSvg } from "../../components/SvgComponents";
import { Colors } from "../../utils/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import KeyboardArrowLeftSharpIcon from "@mui/icons-material/KeyboardArrowLeftSharp";
import Backdrop from "@mui/material/Backdrop";
import Modal from '@mui/material/Modal';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Slide from "@mui/material/Slide";
import filterIcon from "../../assets/images/filterIcon.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const products = [
  {
    id: 1,
    productName: "Iphone 11 pro max",
    image: laptopImg,
    amount: "500,000",
  },
  {
    id: 2,
    productName: "Iphone 11 pro max",
    image: laptopImg,
    amount: "500,000",
  },
  {
    id: 3,
    productName: "Iphone 11 pro max",
    image: laptopImg,
    amount: "500,000",
  },
  {
    id: 4,
    productName: "Iphone 11 pro max",
    image: laptopImg,
    amount: "500,000",
  },
  {
    id: 5,
    productName: "Iphone 11 pro max",
    image: laptopImg,
    amount: "500,000",
  },
  {
    id: 6,
    productName: "Iphone 11 pro max",
    image: laptopImg,
    amount: "500,000",
  },
  {
    id: 7,
    productName: "Iphone 11 pro max",
    image: laptopImg,
    amount: "500,000",
  },
  {
    id: 8,
    productName: "Iphone 11 pro max",
    image: laptopImg,
    amount: "500,000",
  },
  {
    id: 9,
    productName: "Iphone 11 pro max",
    image: laptopImg,
    amount: "500,000",
  },
  {
    id: 10,
    productName: "Iphone 11 pro max",
    image: laptopImg,
    amount: "500,000",
  },
];

export default function CategoryDetail() {
  const { categoryName, categoryId } = useParams();
  const [showCategories, setShowCategories] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CategoryDetailContainer>
      <ColoredDiv>
        <p>{categoryName}</p>
      </ColoredDiv>
      <div className="navigationContainer">
        <div className="routeDetail">
          <Link to={"/"} className="Home">
            Home
          </Link>
          <KeyboardDoubleArrowRightSharpIcon fontSize="2px" />
          <p>{categoryName}</p>
        </div>

        <Link to={"/"} className="backGroup">
          <KeyboardArrowLeftSharpIcon />
          <p>Back</p>
        </Link>
      </div>
      <FlexGroupContainer>
        <div className="filterGroup">
          <div className="categoriesList">
            <div
              onClick={() => setShowCategories(!showCategories)}
              className="headerGroup"
            >
              <h3>Categories</h3>
              {showCategories ? (
                <KeyboardArrowDownIcon className="arrowLeft" />
              ) : (
                <KeyboardArrowRightIcon className="arrowLeft" />
              )}
            </div>

            {showCategories && (
              <ul>
                <li>
                  <p className="catIcon">📲</p>
                  <p className="catName">Phones</p>
                  <p className="catAmount">35 products</p>
                </li>
                <li>
                  <p className="catIcon">📲</p>
                  <p className="catName">Tablets</p>
                  <p className="catAmount">35 products</p>
                </li>
                <li>
                  <p className="catIcon">📲</p>
                  <p className="catName">Smart Watches</p>
                  <p className="catAmount">35 products</p>
                </li>
              </ul>
            )}
          </div>
          <div className="priceList">
            <div
              onClick={() => setShowPrice(!showPrice)}
              className="headerGroup"
            >
              <h3>Price</h3>
              {showPrice ? (
                <KeyboardArrowDownIcon className="arrowLeft" />
              ) : (
                <KeyboardArrowRightIcon className="arrowLeft" />
              )}
            </div>
            {showPrice && (
              <>
                <div className="inputContainer">
                  <div className="inputGroup">
                    <label htmlFor="Minimum">Min</label>
                    <input type="number" />
                  </div>
                  <div className="inputGroup">
                    <label htmlFor="Maximum">Max</label>
                    <input type="number" />
                  </div>
                </div>

                <div className="priceRangeContainer">
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value="Less than 15k"
                      checked={selectedValue === "Less than 15k"}
                      onChange={handleRadioChange}
                    />{" "}
                    Less than 15k
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value="Less than 30k"
                      checked={selectedValue === "Less than 30k"}
                      onChange={handleRadioChange}
                    />{" "}
                    Less than 30k
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value="Less than 45k"
                      checked={selectedValue === "Less than 45k"}
                      onChange={handleRadioChange}
                    />{" "}
                    Less than 45k
                  </label>
                </div>

                <div className="buttonGroup">
                  <button>Clear</button>
                  <button>Apply</button>
                </div>
              </>
            )}
          </div>
        </div>

        <ProductFlexGroup>
          <div className="inputGroup">
            <button onClick={handleClickOpen} className="filterButton">
              <img src={filterIcon} alt="filter" />
              Filter and Sorting
            </button>
            <Modal
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              open={open}
              closeAfterTransition
            >
              <FilterModalBox>
                <div className="modalHeaderContainer">
                  <div className="hearderGroupOne">
                    <h3>Filter and Sort</h3>
                    <p>23 products</p>
                  </div>

                  <button onClick={handleClose} className="closeModal">
                    <CloseSharpIcon />
                  </button>
                </div>

                <div className="modalBodyContainer">
                  <div className="filterGroup">
                    <div className="categoriesList">
                      <div
                        onClick={() => setShowCategories(!showCategories)}
                        className="headerGroup"
                      >
                        <h3>Categories</h3>
                        {showCategories ? (
                          <KeyboardArrowDownIcon className="arrowLeft" />
                        ) : (
                          <KeyboardArrowRightIcon className="arrowLeft" />
                        )}
                      </div>

                      {showCategories && (
                        <ul>
                          <li>
                            <p className="catIcon">📲</p>
                            <p className="catName">Phones</p>
                            <p className="catAmount">35 products</p>
                          </li>
                          <li>
                            <p className="catIcon">📲</p>
                            <p className="catName">Tablets</p>
                            <p className="catAmount">35 products</p>
                          </li>
                          <li>
                            <p className="catIcon">📲</p>
                            <p className="catName">Smart Watches</p>
                            <p className="catAmount">35 products</p>
                          </li>
                        </ul>
                      )}
                    </div>
                    <div className="priceList">
                      <div
                        onClick={() => setShowPrice(!showPrice)}
                        className="headerGroup"
                      >
                        <h3>Price</h3>
                        {showPrice ? (
                          <KeyboardArrowDownIcon className="arrowLeft" />
                        ) : (
                          <KeyboardArrowRightIcon className="arrowLeft" />
                        )}
                      </div>
                      {showPrice && (
                        <>
                          <div className="inputContainer">
                            <div className="inputGroup">
                              <label htmlFor="Minimum">Min</label>
                              <input type="number" />
                            </div>
                            <div className="inputGroup">
                              <label htmlFor="Maximum">Max</label>
                              <input type="number" />
                            </div>
                          </div>

                          <div className="priceRangeContainer">
                            <label>
                              <input
                                type="radio"
                                name="option"
                                value="Less than 15k"
                                checked={selectedValue === "Less than 15k"}
                                onChange={handleRadioChange}
                              />{" "}
                              Less than 15k
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="option"
                                value="Less than 30k"
                                checked={selectedValue === "Less than 30k"}
                                onChange={handleRadioChange}
                              />{" "}
                              Less than 30k
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="option"
                                value="Less than 45k"
                                checked={selectedValue === "Less than 45k"}
                                onChange={handleRadioChange}
                              />{" "}
                              Less than 45k
                            </label>
                          </div>

                          <div className="buttonGroup">
                            <button>Clear</button>
                            <button>Apply</button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="selectGroup">
                    <p>Sort by:</p>
                    <CustomSelect>
                      <option value="Recommended">Recommended</option>
                      <option value="Popularity">Popularity</option>
                    </CustomSelect>
                  </div>
                </div>
              </FilterModalBox>
            </Modal>
            <SearchInput>
              <SearchIconDiv className="SearchIconDiv">
                <SearchIconSvg />
              </SearchIconDiv>
              <StyledInput placeholder="Search for product" />
            </SearchInput>
            <div className="selectGroup">
              <p>Sort by:</p>
              <CustomSelect>
                <option value="Recommended">Recommended</option>
                <option value="Popularity">Popularity</option>
              </CustomSelect>
            </div>
          </div>
          <ProductContainer>
            {products.map((item) => (
              <Product
                key={item.id}
                image={item.image}
                productName={item.productName}
                amount={item.amount}
              />
            ))}
          </ProductContainer>
        </ProductFlexGroup>
      </FlexGroupContainer>
    </CategoryDetailContainer>
  );
}
