"use client";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import { DrawerItem } from "@/types/common";
import Link from "next/link";
import { useState } from "react";

type IProps = {
  item: DrawerItem;
  index: number;
};

const SideBarItem = ({ item, index }: IProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (item.child && item.child.length > 0) {
      setOpen(!open);
    }
  };
  const listItem = (
    <ListItem disablePadding key={index}>
      <ListItemButton onClick={handleClick}>
        {item.icon && (
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
        )}
        <ListItemText primary={item.title} />
        {item.child && item.child.length > 0 ? (
          open ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )
        ) : null}
      </ListItemButton>
    </ListItem>
  );

  return (
    <>
  
      {item.path ? <Link href={item.path}>{listItem}</Link> : listItem}

 
      {item.child && item.child.length > 0 && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            {item.child.map((childItem, idx) => (
              <SideBarItem key={idx} item={childItem} index={idx} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SideBarItem;
