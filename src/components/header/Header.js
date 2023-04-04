import React, { useState } from "react";
import {
  HeaderContainer,
  LgCaCtaBtn,
  PrimaryBtn,
  StyledLinks,
} from "../styledComponents";
import { styled, alpha } from "@mui/material/styles";
import BrandLogo from "../../assets/images/BrandLogo.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Colors } from "../../utils/colors";

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
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <HeaderContainer>
      <nav style={{ maxWidth: "1440px", display: "flex", margin: "0 auto" }}>
        <a style={{ marginRight: "auto" }} href="/">
          <img
            aria-label="Street bazaar brand logo"
            style={{ width: 50, height: 50 }}
            src={BrandLogo}
            alt="Street bazaar brand logo"
          />
        </a>
        <div style={styles.deskNav}>
          <StyledLinks href="#">About</StyledLinks>
          <StyledLinks href="#">Blog</StyledLinks>
          <div style={{ display: "flex", gap: 20 }}>
            <LgCaCtaBtn
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <p>Create Account / Login</p>
              <KeyboardArrowDownIcon color={Colors.neutral_color.color200} />
            </LgCaCtaBtn>
            <StyledMenu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 20 }}>
                <p style={styles.menuItem} onClick={handleClose}>Login</p>
                <p style={styles.menuItem} onClick={handleClose}>Create Account</p>
              </div>
            </StyledMenu>
            <PrimaryBtn>
              <p>Sell your product</p>
            </PrimaryBtn>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  );
}

const styles = {
  deskNav: {
    display: "flex",
    gap: 100,
    alignItems: "center",
  },
  menuItem: {
    color: Colors.neutral_color.color900,
  }
};
