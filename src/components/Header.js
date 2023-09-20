import { InlineIcon } from "@iconify/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import Menu from "@mui/material/Menu";
import { alpha, styled } from "@mui/material/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { css } from "styled-components";
import BrandLogo from "../assets/images/BrandLogo.png";
import { logoutUser } from "../features/userSlice";
import { Colors } from "../utils/colors";
import CreateAccountModal from "./Auth/AuthComponents/CreateAccountModal";
import LoginModal from "./Auth/AuthComponents/LoginModal";
import {
  DeskNavDiv,
  HamburgerBar,
  HamburgerContainer,
  HeaderContainer,
  LgCaCtaBtn,
  MenuListContainer,
  MenuListItem,
  NavContainer,
  Overlay,
  PrimaryBtn,
  StyledLinks,
  UserActionModal,
  closeAnimation,
  openAnimation,
} from "./styles/styledComponents";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 1,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    border: `1px solid ${Colors.neutral_color.color900} !important`,
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const openAnchor = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAnchor = () => {
    setAnchorEl(null);
  };

  const [showUserActionModal, setShowUserActionModal] = useState(false);

  const handleShowUserActionModal = () => {
    setShowUserActionModal(!showUserActionModal);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [openLoginModal, setOpenLoginModal] = React.useState(false);
  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => setOpenLoginModal(false);

  const [openCreateAccountModal, setOpenCreateAccountModal] =
    React.useState(false);
  const handleOpenCreateAccountModal = () => setOpenCreateAccountModal(true);
  const handleCloseCreateAccountModal = () => setOpenCreateAccountModal(false);
  const dispatch = useDispatch();

  const { token, isLoggedIn, userProfile } = useSelector((state) => state.user);

  return (
    <HeaderContainer>
      <LoginModal
        openRegister={handleOpenCreateAccountModal}
        handleClose={handleCloseLoginModal}
        open={openLoginModal}
      />
      <CreateAccountModal
        openLogin={handleOpenLoginModal}
        handleClose={handleCloseCreateAccountModal}
        open={openCreateAccountModal}
      />
      <NavContainer>
        <a style={{ marginRight: "auto" }} href="/">
          <img
            aria-label="Street bazaar brand logo"
            style={{ width: 50, height: 50 }}
            src={BrandLogo}
            alt="Street bazaar brand logo"
          />
        </a>
        <DeskNavDiv>
          <StyledLinks href="#">About</StyledLinks>
          <StyledLinks href="#">Blog</StyledLinks>
          <div style={{ display: "flex", gap: 20 }}>
            {token === "" ? (
              <>
                <LgCaCtaBtn
                  id="basic-button"
                  aria-controls={openAnchor ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openAnchor ? "true" : undefined}
                  onClick={handleClick}
                >
                  <p>Create Account / Login</p>
                  <KeyboardArrowDownIcon
                    color={Colors.neutral_color.color200}
                  />
                </LgCaCtaBtn>
                <StyledMenu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openAnchor}
                  onClose={handleCloseAnchor}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 20,
                      padding: 20,
                    }}
                  >
                    <p
                      style={styles.menuItem}
                      onClick={() => {
                        handleOpenLoginModal();
                        handleCloseAnchor();
                      }}
                    >
                      Login
                    </p>
                    <p
                      style={styles.menuItem}
                      onClick={() => {
                        handleCloseAnchor();
                        handleOpenCreateAccountModal();
                      }}
                    >
                      Create Account
                    </p>
                  </div>
                </StyledMenu>
              </>
            ) : (
              <div className="loggedInUser">
                <a href="/profile/notifications" className="notificationIcon">
                  <NotificationsSharpIcon />
                </a>
                <a href="/messages" className="messageIcon">
                  <MailOutlineSharpIcon />
                </a>
                <div
                  onClick={handleShowUserActionModal}
                  className="profileButton"
                >
                  <div className="imageWrapper">
                    <img
                      src={
                        userProfile?.profile_image_url
                          ? userProfile?.profile_image_url
                          : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                      }
                      alt="profile"
                    />
                  </div>

                  <UserActionModal showUserActionModal={showUserActionModal}>
                    <Link className="sellCTA" to="#">
                      <p>Sell Product</p>
                    </Link>
                    <a href="/profile/adverts">
                      <InlineIcon icon="ic:list" />
                      <p>My Adverts</p>
                    </a>
                    <a href="/profile/investments">
                      <InlineIcon icon="ic:list" />
                      <p>My Investments</p>
                    </a>
                    <a href="/profile/account-balance">
                      <InlineIcon icon="ic:credit-card" />
                      <p>Account Balance</p>
                    </a>
                    <a href="/profile/performance">
                      <InlineIcon icon="bi:activity" />
                      <p>Performance</p>
                    </a>
                    <a href="/profile/feedback">
                      <InlineIcon icon="lucide:message-circle" />
                      <p>Feedback</p>
                    </a>
                    <a href="/profile/saved">
                      <InlineIcon icon="lucide:save" />
                      <p>Saved</p>
                    </a>
                    <a href="/profile/settings">
                      <InlineIcon icon="mi:settings" />
                      <p>Settings</p>
                    </a>
                    <button onClick={() => dispatch(logoutUser())}>
                      <InlineIcon icon="mdi:log-out" />
                      <p>Log Out</p>
                    </button>
                  </UserActionModal>
                </div>
              </div>
            )}
            <PrimaryBtn>
              <p>Sell your product</p>
            </PrimaryBtn>
          </div>
        </DeskNavDiv>
        {token === "" ? (
          <HamburgerContainer onClick={handleToggle}>
            <HamburgerBar
              style={{
                transform: isOpen
                  ? "rotate(-45deg) translate(-6px, 6px)"
                  : "none",
                animation: isOpen
                  ? css`
                      ${closeAnimation} 0.3s forwards
                    `
                  : "none",
              }}
            />
            <HamburgerBar
              style={{
                opacity: isOpen ? 0 : 1,
                animation: isOpen
                  ? css`
                      ${closeAnimation} 0.3s forwards
                    `
                  : css`
                      ${openAnimation} 0.3s reverse forwards
                    `,
              }}
            />
            <HamburgerBar
              style={{
                transform: isOpen
                  ? "rotate(45deg) translate(-6px, -6px)"
                  : "none",
                animation: isOpen
                  ? css`
                      ${closeAnimation} 0.3s forwards
                    `
                  : "none",
              }}
            />
          </HamburgerContainer>
        ) : (
          <div className="loggedInUserMobile">
            <a href="/profile/notifications" className="notificationIcon">
              <NotificationsSharpIcon />
            </a>
            <a href="/messages" className="messageIcon">
              <MailOutlineSharpIcon />
            </a>
            <div onClick={handleShowUserActionModal} className="profileButton">
              <div className="imageWrapper">
                <img
                  src={
                    userProfile?.profile_image_url
                      ? userProfile?.profile_image_url
                      : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                  }
                  alt="profile"
                />
              </div>
              <UserActionModal showUserActionModal={showUserActionModal}>
                <Overlay onClick={() => setShowUserActionModal(false)} />
                <Link onClick={() => navigate()} className="sellCTA" to="#">
                  <p>Sell Product</p>
                </Link>
                <a onClick={() => navigate("/profile/adverts")}>
                  <InlineIcon icon="ic:list" />
                  <p>My Adverts</p>
                </a>
                <a onClick={() => navigate("/profile/investments")}>
                  <InlineIcon icon="ic:list" />
                  <p>My Investments</p>
                </a>
                <a onClick={() => navigate("/profile/account-balance")}>
                  <InlineIcon icon="ic:credit-card" />
                  <p>Account Balance</p>
                </a>
                <a onClick={() => navigate("/profile/performance")}>
                  <InlineIcon icon="bi:activity" />
                  <p>Performance</p>
                </a>
                <a onClick={() => navigate("/profile/feedback")}>
                  <InlineIcon icon="lucide:message-circle" />
                  <p>Feedback</p>
                </a>
                <a onClick={() => navigate("/profile/saved")}>
                  <InlineIcon icon="lucide:save" />
                  <p>Saved</p>
                </a>
                <a onClick={() => navigate()} href="/profile/settings">
                  <InlineIcon icon="mi:settings" />
                  <p>Settings</p>
                </a>
                <button
                  onClick={() => {
                    dispatch(logoutUser());
                    navigate("/");
                  }}
                >
                  <InlineIcon icon="mdi:log-out" />
                  <p>Log Out</p>
                </button>
              </UserActionModal>
            </div>
          </div>
        )}
        <MenuListContainer isOpen={isOpen}>
          <MenuListItem onClick={handleToggle}>
            <StyledLinks style={{ color: Colors.white }} href="#">
              About
            </StyledLinks>
          </MenuListItem>
          <MenuListItem onClick={handleToggle}>
            {" "}
            <StyledLinks style={{ color: Colors.white }} href="#">
              Blog
            </StyledLinks>
          </MenuListItem>
          <MenuListItem
            onClick={() => {
              handleOpenLoginModal();
              handleCloseAnchor();
              handleToggle();
            }}
          >
            Login
          </MenuListItem>
          <MenuListItem
            onClick={() => {
              handleCloseAnchor();
              handleOpenCreateAccountModal();
              handleToggle();
            }}
          >
            Create Account
          </MenuListItem>
        </MenuListContainer>
      </NavContainer>
    </HeaderContainer>
  );
}

const styles = {
  menuItem: {
    color: Colors.neutral_color.color900,
  },
};
