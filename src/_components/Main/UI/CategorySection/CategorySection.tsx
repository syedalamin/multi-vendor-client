/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Box,
  Drawer,
  Typography,
  CardActionArea,
  CardMedia,
  Button,
  Stack,
} from "@mui/material";

import SubCategoryData from "./SubCategoryData";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import { CloseOutlinedIcon } from "@/_Icons";

const drawerWidth = 220;

export default function CategorySectionDrawer({
  item,
  name,
}: {
  item: any;
  name: string;
}) {
  const subCategory = item?.data?.subCategory?.map((items: any) => items);

  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const [subCategorySlug, setSubCategorySlug] = useState(
    subCategory?.[0]?.slug || ""
  );

  const handleSubClick = (slug: string) => {
    setSubCategorySlug(slug);

    router.push(`${pathname}?${slug}`, { scroll: false });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("subCategory");
    if (slug) setSubCategorySlug(slug);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ p: 2 }}>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          justifyItems: "center",
        }}
      >
        <Typography
          py={2}
          sx={{
            fontSize: {
              xs: "1.4rem",
            },
          }}
          fontWeight={600}
        >
          {name}
        </Typography>
        <Button
          onClick={handleDrawerToggle}
          disableRipple
          sx={{
            display: { xs: "block", sm: "none" },
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
          <CloseOutlinedIcon />
        </Button>
      </Stack>

      {subCategory.map((sub: any) => (
        <Box key={sub.slug}>
          <CardActionArea
            sx={{
              my: 1,
              p: 1,
              display: "flex",
              justifyContent: "start",
              gap: 2,
              overflow: "hidden",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              transition: "transform 0.3s, box-shadow 0.3s , border 0.3s ",
              "&:hover": {
                border: "1px solid #2e7d32",
                transform: "translateY(-4px)",
              },
            }}
            onClick={() => handleSubClick(sub.slug)}
          >
            <CardMedia
              component="img"
              sx={{ width: "50px", height: "auto" }}
              image={sub?.image}
              alt={sub?.name}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                },
              }}
              fontWeight={500}
            >
              {sub?.name}
            </Typography>
          </CardActionArea>{" "}
        </Box>
      ))}
    </Box>
  );

  return (
    <Box sx={{ display: { sm: "flex" } }}>
      <Button
        type="button"
        size="small"
        onClick={handleDrawerToggle}
        startIcon={<ArrowRightAltOutlined />}
        variant="contained"
        sx={{
          mr: 2,
          display: { sm: "none" },
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          color: "white",
          fontWeight: 600,
          borderRadius: "2px",
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
        All Sub Category
      </Button>

      {/* Sidebar */}
      <Box
        sx={{
          flexShrink: 0,
          width: drawerWidth,
          position: "relative",
        }}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: 300,
              boxSizing: "border-box",
              height: "100%",
              position: "absolute",
            },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Permanent Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              height: "100vh",
              position: "relative",
              zIndex: 1000,
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,

          minHeight: "calc(100vh - 64px)",
        }}
      >
        <SubCategoryData subCategory={subCategorySlug} />
      </Box>
    </Box>
  );
}
