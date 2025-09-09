"use client";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import Link from "next/link";

import { useState } from "react";

// Icons
import {
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  LoginOutlined,
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AuthButton = () => {
  const userInfo = getUserInfo();


  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    removeUser();
    window.location.href = "/";
    handleClose();
  };

  return (
    <>
      {userInfo?.role ? (
        <>
          <Button
            onClick={handleClick}
            disableRipple
            sx={{
              backgroundColor: "transparent",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
                boxShadow: 0,
              },
              padding: 0,
              margin: 0,
              minWidth: 0,
              boxShadow: 0,
            }}
          >
            <AccountCircleOutlinedIcon />
          </Button>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            disableScrollLock={true}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            slotProps={{
              paper: {
                sx: {
                  marginTop: "20px",
                },
              },
            }}
          >
            {/* Profile */}
            <MenuItem component={Link} href="/my-profile" onClick={handleClose}>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>

            {/* Orders */}
            <MenuItem component={Link} href="/orders" onClick={handleClose}>
              <ListItemIcon>
                <ShoppingCartIcon fontSize="small" />
              </ListItemIcon>
              My Orders
            </MenuItem>

            <Divider />

            {/* Logout */}
            <MenuItem onClick={handleLogOut} sx={{ color: "red" }}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" sx={{ color: "red" }} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          component={Link}
          href="/login"
          size="small"
          startIcon={<LoginOutlined />}
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
            color: "white",
            fontWeight: 600,
            borderRadius: "30px",
            textTransform: "none",
            px: 5,
            py: 1,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
            "&:hover": {
              background: "linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)",
              boxShadow: "0px 6px 16px rgba(0,0,0,0.2)",
            },
          }}
        >
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
