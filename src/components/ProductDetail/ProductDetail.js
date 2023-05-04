import React from "react";
import image1 from "./image1.png";
import image2 from "./image2.png";
import {
    ProductDetailDiv,
    ProductDetailDiv2,
    ProductDetailContainer,
    ProductDetailContainer1,
    ProductDetailContainer2,
    ProductDetailContainer3,
    ProductDetailContainer4,
    ProductDetailContainer5,
    ProductDetailContainer6,
    ProductDetailContainer7,
    ProductDetailContainer8,
    ProductDetailContainer9,
} from "./ProductDetail.styled";

const ProductDetail = () => {
    return (<>
        <ProductDetailDiv>Home&nbsp;  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.66675 11.3333L12.0001 7.99996L8.66675 4.66663" stroke="#9EA6AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 11.3333L7.33333 7.99996L4 4.66663" stroke="#9EA6AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
            &nbsp;Phone, Tablets and Smart Watches &nbsp;<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.66675 11.3333L12.0001 7.99996L8.66675 4.66663" stroke="#9EA6AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 11.3333L7.33333 7.99996L4 4.66663" stroke="#9EA6AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            &nbsp;
            <span>HP Laptop </span></ProductDetailDiv>
        <ProductDetailDiv2>&nbsp; <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L1 7L7 1" stroke="#5D6B79" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
            &nbsp; &nbsp; Back</ProductDetailDiv2>

        <ProductDetailContainer>
            <ProductDetailContainer1>
                <ProductDetailContainer4>
                    <ProductDetailContainer6>
                        <img src={image1} alt={image1} />
                        <ProductDetailContainer9><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="white" />
                            <g clip-path="url(#clip0_1280_12181)">
                                <path d="M21.8936 11.0733C21.5531 10.7327 21.1488 10.4624 20.7038 10.2781C20.2588 10.0937 19.7819 9.99878 19.3002 9.99878C18.8186 9.99878 18.3416 10.0937 17.8967 10.2781C17.4517 10.4624 17.0474 10.7327 16.7069 11.0733L16.0002 11.78L15.2936 11.0733C14.6058 10.3855 13.6729 9.99914 12.7002 9.99914C11.7276 9.99914 10.7947 10.3855 10.1069 11.0733C9.41911 11.7611 9.03271 12.694 9.03271 13.6667C9.03271 14.6394 9.41911 15.5722 10.1069 16.26L10.8136 16.9667L16.0002 22.1533L21.1869 16.9667L21.8936 16.26C22.2342 15.9195 22.5045 15.5152 22.6889 15.0702C22.8732 14.6253 22.9681 14.1483 22.9681 13.6667C22.9681 13.185 22.8732 12.7081 22.6889 12.2631C22.5045 11.8181 22.2342 11.4138 21.8936 11.0733V11.0733Z" stroke="#9EA6AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#9EA6AF" />
                            <defs>
                                <clipPath id="clip0_1280_12181">
                                    <rect width="16" height="16" fill="white" transform="translate(8 8)" />
                                </clipPath>
                            </defs>
                        </svg>
</ProductDetailContainer9>
                    </ProductDetailContainer6>
                    <ProductDetailContainer7>
                        <ProductDetailContainer8>
                            <img src={image2} alt={image1} />
                        </ProductDetailContainer8>
                        <ProductDetailContainer8>
                            <img src={image2} alt={image1} />
                        </ProductDetailContainer8>
                        <ProductDetailContainer8>
                            <img src={image2} alt={image1} />
                        </ProductDetailContainer8>
                        <ProductDetailContainer8>
                            <img src={image2} alt={image1} />
                        </ProductDetailContainer8>
                    </ProductDetailContainer7>
                </ProductDetailContainer4>

                <ProductDetailContainer5>

                </ProductDetailContainer5>

            </ProductDetailContainer1>
            <ProductDetailContainer2></ProductDetailContainer2>
            <ProductDetailContainer3></ProductDetailContainer3>
        </ProductDetailContainer></>
    );
};

export default ProductDetail;
