"use client";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import { Category } from "@/types/common";
import { KeyboardArrowRightSharp } from "@mui/icons-material";
import { Box, CardMedia, MenuItem, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const SideCategories = () => {
  const { data: categoryData } = useGetAllCategoryQuery({});
  const [hoveredCategory, setHoveredCategory] = React.useState<Category | null>(
    null
  );

  return (
    <Box sx={{ position: "relative", display: "block", width: "100%" }}>
      {categoryData?.data?.slice(0, 8)?.map((item: Category) => (
        <Box
          key={item.id}
          sx={{
            position: "relative",
            "&:hover .sub-menu": {
              display: "block",
            },
          }}
          onMouseEnter={() => setHoveredCategory(item)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minWidth: "100%",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <CardMedia
                sx={{ width: 30, height: 30, borderRadius: 1 }}
                component="img"
                alt={item?.name}
                image={item?.image}
              />
              <Typography
                component={"h6"}
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                }}
              >
                {item?.name}
              </Typography>
            </Stack>
            <Box>
              <KeyboardArrowRightSharp sx={{ ml: 0.5 }} />
            </Box>
          </MenuItem>

          {item?.subCategory?.length > 0 && (
            <Box
              className="sub-menu"
              sx={{
                display: hoveredCategory?.id === item.id ? "block" : "none",
                position: "absolute",
                top: 0,
                left: "100%",
                backgroundColor: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 100,
                minWidth: "100%",
                borderRadius: 0,
              }}
            >
              {item.subCategory.map((sub) => (
                <Link
                  key={sub.id}
                  href={`/category/${item?.slug}?${sub?.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,

                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  >
                    <CardMedia
                      sx={{ width: 30, height: 30, borderRadius: 1 }}
                      component="img"
                      alt={sub?.name}
                      image={sub?.image}
                    />
                    <Typography
                      component={"h6"}
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      {sub?.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default SideCategories;
