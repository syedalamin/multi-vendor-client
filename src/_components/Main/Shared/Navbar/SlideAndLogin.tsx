"use client";
import { getUserInfo } from "@/services/auth.services";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const SlideAndLogin = () => {
  const userInfo = getUserInfo();
 
  return (
    <Stack
      alignItems={"center"}
      sx={{
        backgroundColor: "#1d2224",
        color: "#dce0e5",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Left marquee */}
          <Box
            sx={{
              flex: 1,
              overflow: "hidden",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              position: "relative",
              py: { xs: 1, md: 0 },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                whiteSpace: "nowrap",
                animation: "scrollText 55s linear infinite",
                "@keyframes scrollText": {
                  "0%": { transform: "translateX(0)" },
                  "100%": { transform: "translateX(-50%)" },
                },
                py: { xs: 0.5, md: 0.8 },
              }}
            >
              <Typography
                component="span"
                sx={{
                  display: "inline-block",
                  px: 2,
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  fontWeight: { xs: 500, sm: 600 },
                }}
              >
                TrustyShop BD অনলাইন শপে আপনাকে স্বাগতম! 🛍️ আমরা অনলাইনে আস্থা ও
                বিশ্বস্ততার সাথে সারা বাংলাদেশে হোম ডেলিভারি দিয়ে থাকি। অর্ডার
                করতে অগ্রিম টাকা দিতে হয় না, তবে বিকাশে এ্যাডভান্স পেমেন্ট করলে
                পাচ্ছেন ৫% ডিসকাউন্ট। সারা দেশে মাত্র ৩-৫ দিনের মধ্যে হোম
                ডেলিভারি নিশ্চিত করা হয়। ক্যাশ অন ডেলিভারি সুবিধাও রয়েছে — তাই
                নিশ্চিন্তে অর্ডার করুন। ধন্যবাদ, TrustyShop BD-এর সঙ্গে থাকার
                জন্য! ❤️
              </Typography>

              <Typography
                component="span"
                sx={{
                  display: "inline-block",
                  px: 2,
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  fontWeight: { xs: 500, sm: 600 },
                }}
              >
                TrustyShop BD অনলাইন শপে আপনাকে স্বাগতম! 🛍️ আমরা অনলাইনে আস্থা ও
                বিশ্বস্ততার সাথে সারা বাংলাদেশে হোম ডেলিভারি দিয়ে থাকি। অর্ডার
                করতে অগ্রিম টাকা দিতে হয় না, তবে বিকাশে এ্যাডভান্স পেমেন্ট করলে
                পাচ্ছেন ৫% ডিসকাউন্ট। সারা দেশে মাত্র ৩-৫ দিনের মধ্যে হোম
                ডেলিভারি নিশ্চিত করা হয়। ক্যাশ অন ডেলিভারি সুবিধাও রয়েছে — তাই
                নিশ্চিন্তে অর্ডার করুন। ধন্যবাদ, TrustyShop BD-এর সঙ্গে থাকার
                জন্য! ❤️
              </Typography>
            </Box>
          </Box>

          {/* Right buttons */}
          {!userInfo?.role && (
            <Stack
              direction="row"
              spacing={1}
              px={1}
              sx={{
                background: "white",
                color: "black",
                flexShrink: 0,
                alignItems: "center",
                width: { xs: "100%", md: "auto" },
                justifyContent: { xs: "center", md: "flex-start" },
                py: { xs: 0, md: 1 },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.8rem" },
                  fontWeight: 600,
                }}
              >
                Become a Seller
              </Typography>
              <Typography
                variant="body2"
                component={Link}
                href={`/create-store`}
                sx={{
                  fontSize: { xs: "0.8rem" },
                  fontWeight: 600,
                  textDecoration: "none",
                  color: "#00B207",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Create
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.8rem" },
                  fontWeight: 600,
                }}
              >
                or
              </Typography>
              <Typography
                variant="body2"
                component={Link}
                href={`/login-store`}
                sx={{
                  fontSize: { xs: "0.8rem" },
                  fontWeight: 600,
                  textDecoration: "none",
                  color: "#00B207",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Login
              </Typography>
            </Stack>
          )}
        </Stack>
      </Container>
    </Stack>
  );
};

export default SlideAndLogin;
