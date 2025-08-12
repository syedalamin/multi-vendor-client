"use client";

import MenuModal from "@/_components/Shared/Modal/MenuModal";
import AuthButton from "@/_components/UI/AuthButton";
import {
  AddShoppingCartOutlinedIcon,
  MenuOpenOutlinedIcon,
  SearchOutlinedIcon,
  CloseOutlinedIcon,
} from "@/_Icons";
import {
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const NavItems = [
    { label: "Home", hre: "/" },
    { label: "Category", hre: "/category" },
    { label: "Product", hre: "/product" },
    { label: "Blog", hre: "/blog" },
  ];

  const NavLinks = (
    <>
      {NavItems.map(({ label, hre }) => (
        <Typography key={hre} component={Link} href={hre}>
          {label}
        </Typography>
      ))}
    </>
  );
  const MainLogo = <>Multi Vendor</>;
  return (
    <Stack bgcolor={"white"} color={"black"} boxShadow={1}>
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
                padding: 0,
                margin: 0,
                minWidth: 0,
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
              justifyContent={"right"}
              alignItems={"center"}
              sx={{
                gap: {
                  xs: 1,
                  sm: 2,
                  md: 4,
                },
              }}
            >
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

              <AddShoppingCartOutlinedIcon />

              <AuthButton />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Navbar;
