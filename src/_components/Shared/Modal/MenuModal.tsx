import * as React from "react";
import Menu from "@mui/material/Menu";
import { Box, useMediaQuery, useTheme } from "@mui/material";

type MenuModalProps = {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  children: React.ReactNode;
};

export default function MenuModal({
  anchorEl,
  setAnchorEl,
  children,
}: MenuModalProps) {
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: isMobile ? "left" : "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: isMobile ? "left" : "right",
        }}
        slotProps={{
          list: {
            sx: {
              py: "0px",
            },
            "aria-labelledby": "basic-button",
          },
          paper: {
            sx: {
              ...(isMobile && {
                marginTop: "24px",
                width: "100vw",
                maxWidth: "100vw",
                left: "0 !important",
                borderRadius: "0",
              }),
            
              width: "24rem",
              marginTop: "18px",
              borderRadius: "0",
            },
          },
        }}
      >
        <Box>{children}</Box>
      </Menu>
    </div>
  );
}
