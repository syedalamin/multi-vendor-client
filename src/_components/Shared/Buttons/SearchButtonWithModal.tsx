"use client";

import SearchTable from "@/_components/Main/UI/SearchTable/SearchTable";
import MenuModal from "@/_components/Shared/Modal/MenuModal";
import { SearchOutlinedIcon } from "@/_Icons";
import { useGetProductsQuery } from "@/redux/api/productApi";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import { useState } from "react";

const SearchButtonWithModal = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [inputValue, setInputValue] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const { data } = useGetProductsQuery({searchTerm: inputValue}, {
    skip: inputValue === "",
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let productData;

  if (inputValue && data?.meta?.total >= 0) {
    productData = data?.data;
  }

  return (
    <Stack>
      <Box>
        <Button
          onClick={handleClick}
          disableRipple
          sx={{
            backgroundColor: "transparent",
            color: "black",
            "&:hover": { backgroundColor: "white", boxShadow: 0 },
            padding: 0,
            margin: 0,
            minWidth: 0,
            boxShadow: 0,
          }}
        >
          <SearchOutlinedIcon />
        </Button>

        <MenuModal anchorEl={anchorEl} setAnchorEl={setAnchorEl} widths="24rem">
          <Paper
            component="form"
            sx={{ px: 2, display: "flex", alignItems: "center" }}
          >
            <InputBase
              sx={{ flex: 1 }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search products..."
            />
            <IconButton type="button" aria-label="search">
              <SearchOutlinedIcon />
            </IconButton>
          </Paper>
          {productData?.length > 0 && <SearchTable data={productData} />}
        </MenuModal>
      </Box>
    </Stack>
  );
};

export default SearchButtonWithModal;
