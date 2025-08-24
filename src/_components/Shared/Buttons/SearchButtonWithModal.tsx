"use client";

import MenuModal from "@/_components/Shared/Modal/MenuModal";

import { SearchOutlinedIcon } from "@/_Icons";
import { Box, Button, IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";

const SearchButtonWithModal = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box>
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
        <SearchOutlinedIcon />
      </Button>
      <Box>
        <MenuModal
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          widths="24rem"
   
        >
          <Paper
            component="form"
            sx={{
              px: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputBase sx={{ flex: 1 }} />
            <IconButton type="button" aria-label="search">
              <SearchOutlinedIcon />
            </IconButton>
          </Paper>
        </MenuModal>
      </Box>
    </Box>
  );
};

export default SearchButtonWithModal;
