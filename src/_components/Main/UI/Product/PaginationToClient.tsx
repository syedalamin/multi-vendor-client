"use client";

import { Pagination, PaginationItem, Stack } from "@mui/material";
import Link from "next/link";

interface PaginationClientProps {
  page: number;
  totalPages: number;
  limit: number;
  url: string
}

export default function PaginationClient({
  page,
  totalPages,
  limit,
  url
}: PaginationClientProps) {
  return (
    <Stack py={4} alignItems="center">
      <Pagination
        count={totalPages}
        page={page}
        sx={{
          "& .MuiPaginationItem-root": {
            fontSize: {
              xs: "1rem",
            },
            minWidth: {
              xs: 24,
              sm: 32,
              md: 40,
            },
            height: {
              xs: 24,
              sm: 32,
              md: 40,
            },
            backgroundColor:"#bfcb9a"
          },
    
        }}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            href={`/${url}?page=${item.page}&limit=${limit}`}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
