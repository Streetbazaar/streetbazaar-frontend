import React from "react";
import { GridItem, CategoryItem, CategoryContainer, Flex1, Flex2, Flex1Item1, Flex2Item, Image } from "./Category.styled";
import { Colors } from "../../utils/colors";
import image1 from "./Category-images/phone mockup.png";
import image2 from "./Category-images/Beep Beep Papers.png"
import image3 from './Category-images/The Little Things Business Planning.png'



export default function Category() {
    return (
        <CategoryContainer>
            <h2
                style={{
                    color: Colors.neutral_color.color900,
                    fontSize: "13px",
                    marginBottom: "12px",
                    fontWeight: "600",
                }}
            >
                Categories
            </h2>
            <CategoryItem>
                <GridItem bgColor={Colors.success_color.color100}>
                    <Flex1>
                        <Flex1Item1>
                            <h4>
                                Phones, Tablets, and Smart Watches
                            </h4>
                            <p>
                                203 Products
                            </p>
                        </Flex1Item1>
                    </Flex1>
                    <Flex2>
                        <div>
                            <Flex2Item>
                                Buy Now
                            </Flex2Item>
                        </div>
                        <div>
                            <Image src={image1} alt="" />
                        </div>
                    </Flex2>
                </GridItem>
               
                <GridItem bgColor={Colors.skyBlue}>
                    <Flex1>
                        <Flex1Item1>
                            <h4>
                                Others
                            </h4>
                            <p>
                                203 Products
                            </p>
                        </Flex1Item1>
                    </Flex1>
                    <Flex2>
                        <div>
                            <Flex2Item>
                                Buy Now
                            </Flex2Item>
                        </div>
                        <div>
                            <Image src={image2} alt="" />
                        </div>
                    </Flex2>
                </GridItem>
                <GridItem bgColor={Colors.warning_color.color90}>
                    <Flex1>
                        <Flex1Item1>
                            <h4>
                                Business and Industry
                            </h4>
                            <p>
                                203 Products
                            </p>
                        </Flex1Item1>
                    </Flex1>
                    <Flex2>
                        <div>
                            <Flex2Item>
                                Buy Now
                            </Flex2Item>
                        </div>
                        <div>
                            <Image src={image3} alt="" />
                        </div>

                    </Flex2>
                </GridItem>
            </CategoryItem>
        </CategoryContainer>
    )
}

