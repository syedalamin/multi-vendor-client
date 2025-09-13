"use client";

import SearchTable from "@/_components/Main/UI/SearchTable/SearchTable";

import { SearchOutlinedIcon } from "@/_Icons";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { Box, IconButton, InputBase, Stack } from "@mui/material";
import { useState } from "react";

const SearchButton = () => {
  const [inputValue, setInputValue] = useState("");

  const { data } = useGetProductsQuery(
    { searchTerm: inputValue },
    {
      skip: inputValue === "",
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
    }
  );

  let productData;

  if (inputValue && data?.meta?.total >= 0) {
    productData = data?.data;
  }

  return (
    <Stack>
      <Box>
        <Box
          sx={{
            px: 2,
            py: { xs: 0, sm: 0.3 }, 
            display: "flex",
            alignItems: "center",
            borderRadius: "50px",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow: "none",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <InputBase
            sx={{ flex: 1, width: "100%" }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search products..."
          />
          <IconButton type="button" aria-label="search">
            <SearchOutlinedIcon />
          </IconButton>
        </Box>

        {productData?.length > 0 && (
          <Stack
            sx={{
              position: "fixed",
              top: { xs: "70px", sm: "100px" },
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: "95%", sm: "600px" },
              maxHeight: "70vh",
              overflowY: "auto",
              bgcolor: "white",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: 2,
              boxShadow: 4,
              zIndex: 1300,
              p: 2,
            }}
          >
            <SearchTable data={productData} />
          </Stack>
        )}
      </Box>
    </Stack>
  );
};

export default SearchButton;
