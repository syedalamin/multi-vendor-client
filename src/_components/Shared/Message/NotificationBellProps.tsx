/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import { Badge, IconButton, Tooltip, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { toast } from "sonner";
import { useGetMyVendorOrdersQuery } from "@/redux/api/orderApi";
import Link from "next/link";

const NotificationBell = () => {
  const { data: allOrderData } = useGetMyVendorOrdersQuery(
    {},
    {
      pollingInterval: 15000,
    }
  );

  const orders = allOrderData?.data || [];

  const [unseenCount, setUnseenCount] = useState(0);
  const [lastCount, setLastCount] = useState(0);

  useEffect(() => {
    const savedCount = Number(localStorage.getItem("lastOrderCount") || "0");
    setLastCount(savedCount);
  }, []);

  useEffect(() => {
    if (orders.length > 0 && lastCount !== null) {
      if (orders.length > lastCount) {
        const newOrders = orders.length - lastCount;
        setUnseenCount((prev) => prev + newOrders);
        toast.info(
          `🆕 ${newOrders} new order${newOrders > 1 ? "s" : ""} received!`
        );
      }
    }
  }, [orders]);

  const handleClick = () => {
    setUnseenCount(0);
    setLastCount(orders.length);
    localStorage.setItem("lastOrderCount", orders.length.toString());
  };

  return (
    <Tooltip title="New Orders">
      <IconButton onClick={handleClick}>
        <Badge
          badgeContent={unseenCount}
          color="error"
          invisible={unseenCount === 0}
        >
          <Typography component={Link} href={`/dashboard/vendor/order-product`}>
            <NotificationsIcon
              sx={{
                color: unseenCount > 0 ? "red" : "black",
                fontSize: 24,
                transition: "0.3s",
                animation:
                  unseenCount > 0 ? "pulse 1s infinite alternate" : "none",
                "@keyframes pulse": {
                  from: { transform: "scale(1)" },
                  to: { transform: "scale(1.2)" },
                },
              }}
            />
          </Typography>
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default NotificationBell;
