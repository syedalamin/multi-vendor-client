
"use client";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { DrawerItem } from "@/types/common";
type IProps = {
  item: DrawerItem;
  index: number;
};
const SideBarItem = ({ item, index }: IProps) => {
  return (
    <>
      <ListItem key={index} disablePadding>
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default SideBarItem;
