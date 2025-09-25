"use client";

import { user_role } from "@/constant/role";
import { getUserInfo } from "@/services/auth.services";
import { Button, Stack } from "@mui/material";
import Link from "next/link";

const DashboardButton = () => {
  const userInfo = getUserInfo();
  
    console.log(userInfo?.role)
  return (
    <Stack>
      { userInfo?.role == user_role.ADMIN || userInfo?.role == user_role.VENDOR ?  <Button
          component={Link}
          href={`/dashboard/${userInfo?.role}`}
          size="small"
          // startIcon={<LoginOutlined />}
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
            color: "white",
            fontWeight: 600,
            borderRadius: "0px",
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
          Dashboard
        </Button> : ""
      
      }
    </Stack>
  );
};

export default DashboardButton;