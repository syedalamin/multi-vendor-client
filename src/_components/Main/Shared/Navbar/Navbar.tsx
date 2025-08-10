"use client";

import MenuModal from "@/_components/Shared/Modal/MenuModal";
import {
  AccountCircleOutlinedIcon,
  AddShoppingCartOutlinedIcon,
  MenuOpenOutlinedIcon,
  SearchOutlinedIcon,
} from "@/_Icons";
import {
  Button,
  Container,
  Drawer,
  Grid,
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

  const NaveLinks = (
    <>
      <Typography component={Link} href="/consultation">
        Home
      </Typography>
      <Typography component={Link} href="/health">
        Category
      </Typography>
      <Typography component={Link} href="/medicine">
        Product
      </Typography>
      <Typography component={Link} href="/diagnostics">
        Blog
      </Typography>
    </>
  );
  const MainLogo = (
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
      Multi Vendor
    </Typography>
  );
  return (
    <Stack bgcolor={"white"} color={"black"}>
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
              {NaveLinks}
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
            <Button onClick={toggleDrawer(true)}>
              <MenuOpenOutlinedIcon />
            </Button>
            <Drawer
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
                {MainLogo}
                {NaveLinks}
              </Stack>
            </Drawer>
          </Grid>
          {/* Logo  */}
          <Grid size={{ xs: 4 }}>
            <Stack direction="row" justifyContent={"center"}>
              {MainLogo}
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
                sx={{
                  backgroundColor: "transparent",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  padding: 0,
                  margin: 0,
                  minWidth: 0,
                }}
              >
                <SearchOutlinedIcon />
              </Button>
              <AddShoppingCartOutlinedIcon />
       
                <AccountCircleOutlinedIcon />
            
              <MenuModal anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
                Hi this is me search..............
              </MenuModal>
            
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Navbar;
