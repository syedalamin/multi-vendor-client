"use client";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

import Toolbar from "@mui/material/Toolbar";
import SideBarItem from "./SideBarItem";
import drawerItems from "@/utils/DashboardItems/drawerItems";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/auth.services";
import { USER_ROLE } from "@/types/common";
import { Stack } from "@mui/material";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const userInfo = getUserInfo();
    const role = userInfo?.role;
    setUserRole(role as string);
  }, []);
  return (
    <Stack>
      <Toolbar />
      <Divider />
      <List>
        {drawerItems(userRole as USER_ROLE).map((item, index) => (
          <SideBarItem key={index} item={item} index={index} />
        ))}
      </List>
      <Divider />
    </Stack>
  );
};

export default SideBar;
