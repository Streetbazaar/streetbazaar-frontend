import { Container } from "./styles/Component.styled";
import { Flex, Flex2 } from "./styles/Flex.styled";

import {
  FacebookIconSvg,
  LinkedInIconSvg,
  TwitterIconSvg,
} from "./SvgComponents";

import {
  EmailSubscribe,
  StyleFooter,
  Form,
  Input,
} from "./styles/Footer.styled";
import BrandLogo from "../assets/images/BrandLogo.png";
// import SocialIcons from "./SocialIcons.Js";

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <StyleFooter>
      <Container>
        <Flex>
          <ul>
            <h4>How To Sell Fast</h4>
            <li>Selling Tips</li>
            <li>Buy and Sell Quickly</li>
            <li>Membership</li>
            <li>Banner Advertising</li>
            <li>Promote your Ad</li>
            <li>Connect</li>
          </ul>
          <ul>
            <h4>Information</h4>
            <li>Company & Contact info</li>
            <li>Blog</li>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <h4>Help & Support</h4>
            <li>Live Chat</li>
            <li>FAQ</li>
          </ul>
          <EmailSubscribe>
            <Form onSubmit={handleSubmit}>
              <h5>Subscribe</h5>
              <div>
                <Input type="email" placeholder="Enter your email" />{" "}
                <div>
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.23347 13L14.8898 7.42846C15.4106 6.91519 15.4106 6.08324 14.8898 5.57154L9.23347 0L7.34788 1.8581L10.7279 5.18669H0L0 7.81292H10.7279L7.34788 11.1427L9.23347 13Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <h6>
                Hello, we are ABC. trying to make an effort to put the right
                people for you to get the best results. Just insight
              </h6>
            </Form>
          </EmailSubscribe>
        </Flex>
        <Flex2>
          <div className="footer-logo">
            <img src={BrandLogo} alt="" />
          </div>

          <div className="footer-items">
            <div>Terms</div>
            <div>Privacy</div>
            <div>Cookies</div>
          </div>
          <div className="footer-icons">
            <LinkedInIconSvg />
            <TwitterIconSvg />
            <FacebookIconSvg />
          </div>
        </Flex2>
      </Container>
    </StyleFooter>
  );
}
