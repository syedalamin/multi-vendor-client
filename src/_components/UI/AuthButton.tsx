"use client";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MenuModal from "../Shared/Modal/MenuModal";
import { useState } from "react";
import { AccountCircleOutlinedIcon } from "@/_Icons";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const handleLogOut = () => {
    removeUser();

    router.refresh();
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      {userInfo?.role ? (
        <>
          <Button
            onClick={handleClick}
            disableRipple 
            sx={{
              backgroundColor: "white",
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
          <MenuModal
            widths="full"
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
          >
            <Button onClick={handleLogOut} color="error">
              Logout
            </Button>
          </MenuModal>
        </>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
