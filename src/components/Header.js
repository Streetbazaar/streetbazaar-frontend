import React, { useState } from "react";
import {
  DeskNavDiv,
  HamburgerBar,
  HamburgerContainer,
  HeaderContainer,
  LgCaCtaBtn,
  MenuListContainer,
  MenuListItem,
  NavContainer,
  PrimaryBtn,
  StyledLinks,
  closeAnimation,
  openAnimation,
} from "./styles/styledComponents";
import { styled, alpha } from "@mui/material/styles";
import BrandLogo from "../assets/images/BrandLogo.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Colors } from "../utils/colors";
import LoginModal from "./Auth/AuthComponents/LoginModal";
import CreateAccountModal from "./Auth/AuthComponents/CreateAccountModal";
import { css } from "styled-components";

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
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAnchor = () => {
    setAnchorEl(null);
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

  return (
    <HeaderContainer>
      <LoginModal handleClose={handleCloseLoginModal} open={openLoginModal} />
      <CreateAccountModal
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
            <LgCaCtaBtn
              id="basic-button"
              aria-controls={openAnchor ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openAnchor ? "true" : undefined}
              onClick={handleClick}
            >
              <p>Create Account / Login</p>
              <KeyboardArrowDownIcon color={Colors.neutral_color.color200} />
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
            <PrimaryBtn width={37}>
              <p>Sell your product</p>
            </PrimaryBtn>
          </div>
        </DeskNavDiv>
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
        <MenuListContainer isOpen={isOpen}>
          <MenuListItem>
            <StyledLinks style={{color: Colors.white}} href="#">About</StyledLinks>
          </MenuListItem>
          <MenuListItem>
            {" "}
            <StyledLinks style={{color: Colors.white}} href="#">Blog</StyledLinks>
          </MenuListItem>
          <MenuListItem
            onClick={() => {
              handleOpenLoginModal();
              handleCloseAnchor();
            }}
          >
            Login
          </MenuListItem>
          <MenuListItem
            onClick={() => {
              handleCloseAnchor();
              handleOpenCreateAccountModal();
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
