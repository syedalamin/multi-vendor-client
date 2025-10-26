"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  const NavItems = [
    { label: "Home", hre: "/" },
    { label: "Category", hre: "/category" },
    { label: "Product", hre: "/product" },
    { label: "Blog", hre: "/blog" },
  ];
  const SupportItems = [
    // { label: "FAQ", hre: "/faq" },
    { label: "Support", hre: "/support" },
    { label: "Terms", hre: "/terms" },
    { label: "Privacy", hre: "/privacy" },
  ];

  const NavLinks = (
    <>
      {NavItems.map(({ label, hre }) => {
        return (
          <Typography
            key={hre}
            component={Link}
            href={hre}
            sx={{
              textDecoration: "none",
              fontWeight: 500,
              position: "relative",
              display: "inline-block",
              "&:after": {
                content: '""',
                position: "absolute",
                width: "0%",
                height: "2px",
                left: 0,
                bottom: -2,
                bgcolor: "#2e7d32",
                transition: "0.3s",
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

  const SupportLinks = (
    <>
      {SupportItems.map(({ label, hre }) => {
        return (
          <Typography
            key={hre}
            component={Link}
            href={hre}
            sx={{
              textDecoration: "none",
              fontWeight: 500,
              position: "relative",
              display: "inline-block",
              "&:after": {
                content: '""',
                position: "absolute",
                width: "0%",
                height: "2px",
                left: 0,
                bottom: -2,
                bgcolor: "#2e7d32",
                transition: "0.3s",
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

  return (
    <Box
      sx={{
        bgcolor: "#000",
        color: "grey.100",
        py: 6,
      
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Trusty Shop
            </Typography>
            <Typography variant="body2" color="grey.400">
              All your favorite vendors in one place. Safe shopping, best
              prices.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Links
            </Typography>
            <Stack direction="column" spacing={1.5}>
              {NavLinks}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Customer Service
            </Typography>
            <Stack direction="column" spacing={1.5}>
              {SupportLinks}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Follow Us
            </Typography>
            <Box>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                color="inherit"
                sx={{
                  bgcolor: "rgba(255,255,255,0.05)",
                  "&:hover": {
                    bgcolor: "#1877F2",
                    transform: "scale(1.1)",
                    transition: "0.3s",
                  },
                }}
              >
                <Facebook />
              </IconButton>

              <IconButton
                href="https://twitter.com"
                target="_blank"
                color="inherit"
                sx={{
                  bgcolor: "rgba(255,255,255,0.05)",
                  "&:hover": {
                    bgcolor: "#1DA1F2",
                    transform: "scale(1.1)",
                    transition: "0.3s",
                  },
                }}
              >
                <Twitter />
              </IconButton>

              <IconButton
                href="https://instagram.com"
                target="_blank"
                color="inherit"
                sx={{
                  bgcolor: "rgba(255,255,255,0.05)",
                  "&:hover": {
                    bgcolor: "#E1306C",
                    transform: "scale(1.1)",
                    transition: "0.3s",
                  },
                }}
              >
                <Instagram />
              </IconButton>

              <IconButton
                href="https://linkedin.com"
                target="_blank"
                color="inherit"
                sx={{
                  bgcolor: "rgba(255,255,255,0.05)",
                  "&:hover": {
                    bgcolor: "#0A66C2",
                    transform: "scale(1.1)",
                    transition: "0.3s",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" pt={5} mt={3} borderTop="1px solid #333">
          <Typography variant="body2" color="grey.500" fontSize="0.85rem">
            © {new Date().getFullYear()} MultiVendor. All rights reserved.{" "}
            <br />
            Developed by{" "}
            <Typography
              variant="body2"
              component={Link}
              target="_blank"
              href="https://www.linkedin.com/in/syedalamin"
              sx={{
                fontSize: { xs: "0.8rem" },
                fontWeight: 600,
                textDecoration: "none",
                color: "#2e7d32",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Syed Alamin
            </Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
