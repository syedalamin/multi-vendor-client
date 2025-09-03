/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";

export default function ProfileCard({item}:{item: any}) {
   console.log(item);
  return (
    <Card
      sx={{
        textAlign: "center",
        alignItems: "center",
   
        overflow: "hidden",
        p: 2,
      }}
    >
      {/* Avatar Circle with Icon */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Avatar
          sx={{
            bgcolor: "warning.main",
            width: 100,
            height: 100,
          }}
        >
          <BakeryDiningIcon sx={{ fontSize: 50, color: "white" }} />
        </Avatar>
      </Box>

      {/* Title */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        🎊 Congrats Julia 🎊
      </Typography>

      {/* Content */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          You just gained one Cookhat for Salad cooking. Share your achievement
          with your friends.
        </Typography>
      </CardContent>

      {/* Actions */}
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          pb: 2,
        }}
      >
        <Button
          variant="contained"
          color="warning"
          fullWidth
          sx={{ borderRadius: "40px" }}
        >
          Share
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          fullWidth
          sx={{ borderRadius: "40px" }}
        >
          Skip
        </Button>
      </CardActions>
    </Card>
  );
}
