"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/_components/Shared/Loading/Loading";
import { useGetAllVendorsQuery } from "@/redux/api/vendorApi";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import PaginationClient from "../Product/PaginationToClient";
import StoreTextCard from "@/_components/UI/Card/StoreTextCart";

const AllShop = ({ page, limit }: { page: number; limit: number }) => {
  const { data: vendorData, isLoading } = useGetAllVendorsQuery({
    page,
    limit,
  });

  const total = vendorData?.meta?.total || 0;
  const totalPages = Math.ceil(total / limit);

  let shop;

  console.log(vendorData?.vendor);
  if (isLoading) {
    return <Loading />;
  }

  if (vendorData?.vendor) {
    shop = (
      <Stack>
        <Grid
          container
          spacing={2}
          py={4}
          alignItems={"stretch"}
          justifyContent={"center"}
        >
          {vendorData?.vendor
            .filter((item: any) => !item.isBlocked && item.isVerified)  
            .map((item: any) => (
              <Grid key={item.id} size={{ xs: 6, sm: 3, md: 2 }}>
                <Stack>
                  <StoreTextCard item={item} />
                </Stack>
              </Grid>
            ))}
        </Grid>
        <PaginationClient
          url={"shop"}
          page={page}
          totalPages={totalPages}
          limit={limit}
        />
      </Stack>
    );
  } else {
    shop = (
      <Stack>
        <Typography
          py={4}
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Data Found
        </Typography>
      </Stack>
    );
  }

  return <Stack>{shop}</Stack>;
};

export default AllShop;
