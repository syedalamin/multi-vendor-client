"use client";
import * as React from "react";
import { Menu, MenuItem, Typography, Box, Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import { Category } from "@/types/common";
import Link from "next/link";

export default function AllCategories() {
  const { data: categoryData } = useGetAllCategoryQuery({});
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        onClick={handleClick}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          px: 2,
          py: 1.2,
          backgroundColor: "#00B207",
          // backgroundColor: "#2e7d32",
          color: "#fff",

          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <Typography variant="button">Categories</Typography>
        <KeyboardArrowDownIcon sx={{ ml: 0.5 }} />
      </Box>

      <Menu
        anchorEl={anchorEl}
        disableScrollLock
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {categoryData?.data
          ?.slice(0, 10) 
          .map((item: Category) => (
            <Stack key={item?.id}>
              <Link href={`/category/${item?.slug}`}>
                <MenuItem onClick={handleClose}>{item?.name}</MenuItem>
              </Link>
            </Stack>
          ))}
      </Menu>
    </Box>
  );
}
