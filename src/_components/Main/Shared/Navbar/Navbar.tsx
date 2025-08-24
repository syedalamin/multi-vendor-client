"use client";

import AuthButton from "@/_components/UI/AuthButton";
import { MenuOpenOutlinedIcon, CloseOutlinedIcon } from "@/_Icons";
import {
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Cart from "../../UI/Cart/Cart";
import SearchButtonWithModal from "@/_components/Shared/Buttons/SearchButtonWithModal";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const NavItems = [
    { label: "Home", hre: "/" },
    { label: "Category", hre: "/category" },
    { label: "Product", hre: "/product" },
    { label: "Blog", hre: "/blog" },
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
              color: isActive ? "#2e7d32" : "black",
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                width: isActive ? "100%" : "0%",
                height: "2px",
                bottom: "-3px",
                left: 0,
                bgcolor: "#2e7d32",
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
  const MainLogo = <>Multi Vendor</>;
  return (
    <Stack
      bgcolor={"white"}
      color={"black"}
      boxShadow={1}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1200,
      }}
    >
      <Container>
        <Grid py={2} container spacing={2} alignItems={"center"}>
          {/* Desktop Nav Bar*/}
          <Grid
            size={{ sm: 4 }}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <Stack direction="row" justifyContent="space-around">
              {NavLinks}
            </Stack>
          </Grid>
          {/* Mobile Nav Bar */}
          <Grid
            size={{ xs: 4 }}
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
                    <Divider />
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
          <Grid size={{ xs: 4 }}>
            <Stack direction="row" justifyContent={"center"}>
              <Typography
                variant="h5"
                component={"h2"}
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.25rem",
                  },
                  fontWeight: 500,
                }}
              >
                {MainLogo}
              </Typography>
            </Stack>
          </Grid>
          {/* Icon  */}
          <Grid size={{ xs: 4 }}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems={"center"}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <SearchButtonWithModal />
              <Cart />
              <AuthButton />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Navbar;
