"use client";
import trystyShop from "@/image/trustyShop.jpg";
import AuthButton from "@/_components/UI/AuthButton";
import { MenuOpenOutlinedIcon, CloseOutlinedIcon } from "@/_Icons";
import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Cart from "../../UI/Cart/Cart";

import { usePathname } from "next/navigation";
import Image from "next/image";
import SearchButton from "@/_components/Shared/Buttons/SearchButton";
import AllCategories from "./AllCategories";
import DashboardButton from "@/_components/UI/DashboardButton";

const SearchBarWithNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const NavItems = [
    { label: "Home", hre: "/" },
    { label: "Category", hre: "/category" },
    { label: "Product", hre: "/product" },
    // { label: "Blog", hre: "/blog" },
  ];

  const pathname = usePathname();

  const NavLinks = (
    <>
      {NavItems.map(({ label, hre }) => {
        const isActive = pathname === hre;
        return (
          <Typography
            key={hre}
            component={Link}
            href={hre}
            sx={{
              textDecoration: "none",
              fontWeight: 500,
              color: isActive ? "#00B207" : "black",
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                width: isActive ? "100%" : "0%",
                bottom: "-3px",
                left: 0,
                height: "2px",
                bgcolor: "#00B207",
                transition: "width 0.3s ease",
              },
              "&:hover:after": { width: "100%" },
              "&:hover": { color: "#2e7d32" },
            }}
          >
            {label}
          </Typography>
        );
      })}
    </>
  );
  const MainLogo = (
    <Image
      className="w-full bg-cover overflow-hidden"
      height={22}
      alt=""
      src={trystyShop}
    />
  );
  return (
    <Stack
      bgcolor={"white"}
      color={"black"}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1200,
      }}
    >
      <Container>
        <Grid py={2} container spacing={2} alignItems={"center"}>
          {/* Mobile Nav Bar */}
          <Grid
            size={{ xs: 6 }}
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <Button
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
              onClick={toggleDrawer(true)}
            >
              <MenuOpenOutlinedIcon />
            </Button>
            <Drawer
              anchor="left"
              sx={{
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: 240,
                },
              }}
              open={open}
              onClose={toggleDrawer(false)}
            >
              <Stack>
                <Stack
                  px={1}
                  py={2}
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="h5" component={"h2"}>
                    {MainLogo}
                  </Typography>
                  <Button
                    onClick={toggleDrawer(false)}
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
                    <CloseOutlinedIcon />
                  </Button>
                </Stack>

                <Stack px={1} direction={"column"} gap={1}>
                  {NavLinks}
                </Stack>
              </Stack>
            </Drawer>
          </Grid>
          {/* Logo  */}
          <Grid
            size={{ xs: 3 }}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <Stack direction="row" justifyContent={"start"}>
              <Typography
                variant="h5"
                component={"h2"}
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1rem",
                  },

                  fontWeight: 500,
                }}
              >
                {MainLogo}
              </Typography>
            </Stack>
          </Grid>
          {/* search  */}
          <Grid
            size={{ sm: 6 }}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <SearchButton />
          </Grid>
          {/* Icon  */}
          <Grid size={{ xs: 6, sm: 3 }}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems={"center"}
              spacing={{ xs: 3, sm: 2, md: 4 }}
            >
              <Cart />
              <AuthButton />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Stack
        sx={{
          backgroundColor: "#F2F2F2",
        }}
      >
        <Container>
          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: "100%",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
            >
              <AllCategories />
              <Stack direction="row" spacing={3}>
                {NavLinks}
              </Stack>
            </Stack>

            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={3}
            >
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  component={"h2"}
                  sx={{
                    fontSize: {
                      xs: "0.85rem",
                    },
                    fontWeight: 500,
                  }}
                >
                  📞 +880 1813-022222
                </Typography>
              </Box>
              <DashboardButton />
            </Stack>
            {/* search */}
            <Stack
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
                width: "100%",
              }}
            >
              <SearchButton />
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default SearchBarWithNavbar;
