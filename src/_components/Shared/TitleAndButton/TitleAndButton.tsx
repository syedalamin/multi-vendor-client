import { ArrowForward } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const TitleAndButton = ({title, links}:{title: string, links: string}) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        justifyItems: "center",
        pb:1,
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontSize: {
            xs: "1.2rem",
            // sm: "1.3rem",
          },
          fontWeight: {
            xs: 600,
            md: 700,
          },

          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Button
        component={Link}
        href={links}
        endIcon={<ArrowForward />}
        variant="text"
        size="small"
        sx={{
          color: "#00B207",
          fontWeight: "600",
          textTransform: "none",
          fontSize: "0.75rem",
          py: 0.5,
          px: 1.5,
          borderRadius: "16px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateX(3px)",
          },
          "& .MuiButton-endIcon": {
            fontSize: "1rem",
            transition: "transform 0.3s ease",
          },
          "&:hover .MuiButton-endIcon": {
            transform: "translateX(2px)",
          },
        }}
      >
        View All
      </Button>
    </Stack>
  );
};

export default TitleAndButton;
