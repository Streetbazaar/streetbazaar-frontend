import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftSharpIcon from "@mui/icons-material/KeyboardArrowLeftSharp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import TrashImg from "../../assets/images/CharcoDeleteTrash.png";
import filterIcon from "../../assets/images/filterIcon.png";
import { SearchIconSvg } from "../../components/SvgComponents";
import Product from "../../components/TrendingAds/Trending-Ads";
import { ProductItem } from "../../components/TrendingAds/TrendingAds.styled";
import Spinner from "../../components/spinner/Spiner";
import {
  LoadMoreButton,
  SearchIconDiv,
  SearchInput,
  StyledInput,
} from "../../components/styles/styledComponents";
import { fetchAdverts } from "../../features/advertSlice";
import { useGetCategoryDetail } from "../../hooks/useGetCategoryDetail";
import {
  CategoryDetailContainer,
  ColoredDiv,
  CustomSelect,
  FilterModalBox,
  FlexGroupContainer,
  ProductContainer,
  ProductFlexGroup,
} from "./CategoryDetail.styled";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CategoryDetail() {
  const { categoryName, categoryId } = useParams();
  const [showCategories, setShowCategories] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [selectedValue, setSelectedValue] = useState("option1");
  const { categoryDetails, nextPage, loading } =
    useGetCategoryDetail(categoryId);
  const [advertList, setAdvertList] = useState(categoryDetails);
  const [nextLink, setNextLink] = useState(nextPage);
  const [fetching, setFetching] = useState(loading);

  const fetchNextLink = async () => {

    if (nextLink === null) return;

    try {
      setFetching(true);
      const res = await axios.get(nextLink);

      if (res.data) {
        setFetching(false);
        setAdvertList(() => [...advertList, ...res.data.results.adverts]);
        setNextLink(res.data.next);
      }
    } catch (err) {
      setFetching(false);
      toast.error(err.message);
    }
  };

  

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

  useEffect(() => {
    setAdvertList(categoryDetails);
    setFetching(loading);
    setNextLink(nextPage);
  }, [loading, categoryDetails, nextPage]);

  console.log(advertList, "line 81");
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
            {advertList
              ?.filter((product) => product.status === "active")
              ?.map((product, index) => {
                return (
                  <ProductItem>
                    <Product
                      id={product?.id}
                      name={product?.title}
                      imgURL={product?.pictures[0]?.image_url}
                      price={product?.price}
                      product={product}
                      index={index}
                    />
                  </ProductItem>
                );
              })}
          </ProductContainer>
          {!fetching && advertList?.length === 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
              className="emptyAd"
            >
              <img src={TrashImg} alt="error" />
              <h1>Oops!</h1>
              <p>There are no adverts here</p>
            </div>
          ) : null}
          {fetching &&
          advertList.length != 0 &&
          advertList.filter((product) => product.status === "active").length ===
            0 ? (
            <div className="emptyAd">
              <img src={TrashImg} alt="error" />
              <h1>Oops!</h1>
              <p>There are no adverts here</p>
            </div>
          ) : null}
          {fetching && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Spinner />
            </div>
          )}
          {nextLink && !fetching ? (
            <LoadMoreButton
              onClick={() => {
                fetchNextLink()
              }}
            >
              Load more...
            </LoadMoreButton>
          ) : null}
        </ProductFlexGroup>
      </FlexGroupContainer>
    </CategoryDetailContainer>
  );
}
