/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import {
  Box,
  Button,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

const Invoice = ({
  data,
  setOpen,
}: {
  data: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const d = new Date(data?.createdAt);

  const formattedDate = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
      setOpen(false);
    }
  };
  return (
    <Stack
      
    >
      <Button
        variant="contained"
        color="success"
        startIcon={<PrintIcon />}
        onClick={handlePrint}
        sx={{
          alignSelf: "flex-end",
          mb: 2,
          "@media print": {
            display: "none",
          },
        }}
      >
        Print Invoice
      </Button>
      {/* Always show Thank You */}
      <Typography
        py={3}
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#2e7d32",
          letterSpacing: 0.5,
          fontSize: {
            xs: "1.5rem",
            sm: "2.5rem",
          },
        }}
      >
        Thank You
      </Typography>

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,

            width: "100%",
            borderRadius: 3,
            border: "1px solid #e0e0e0",
            background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
          }}
        >
          <Box
            sx={{
              borderRadius: "3px",
              border: "1px dashed #9e9e9e",
            }}
          >
            <Typography
              py={1}
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#2e7d32",
                letterSpacing: 0.5,
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                },
              }}
            >
              Your order has been received
            </Typography>
          </Box>

          <Grid container py={2}>
            {/* Order Id */}
            <Grid
              size={{ xs: 12, sm: 3 }}
              sx={{ borderRight: "1px dashed #9e9e9e" }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "center",
                  color: "#9e9e9e",
                  fontWeight: "bold",
                }}
              >
                Id
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#2e7d32",
                }}
              >
                {data?.id}
              </Typography>
            </Grid>

            {/* Date */}
            <Grid
              size={{ xs: 12, sm: 3 }}
              sx={{ borderRight: "1px dashed #9e9e9e" }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "center",
                  color: "#9e9e9e",
                  fontWeight: "bold",
                }}
              >
                Date
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#2e7d32",
                }}
              >
                {formattedDate}
              </Typography>
            </Grid>

            {/* Total */}
            <Grid
              size={{ xs: 12, sm: 3 }}
              sx={{ borderRight: "1px dashed #9e9e9e" }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "center",
                  color: "#9e9e9e",
                  fontWeight: "bold",
                }}
              >
                Total
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#2e7d32",
                }}
              >
                ৳ {data?.totalAmount}
              </Typography>
            </Grid>

            {/* Payment Method */}
            <Grid size={{ xs: 12, sm: 3 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "center",
                  color: "#9e9e9e",
                  fontWeight: "bold",
                }}
              >
                Payment Method
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#2e7d32",
                }}
              >
                {data?.paymentType === "COD"
                  ? "Cash on Delivery"
                  : data?.paymentType}
              </Typography>
            </Grid>
          </Grid>

          <Typography
            py={5}
            variant="subtitle2"
            sx={{
              color: "#9e9e9e",
              letterSpacing: 0.5,
              fontWeight: "bold",
            }}
          >
            Pay with cash upon delivery.
          </Typography>

          <Box sx={{ px: 4 }}>
            <Typography
              py={2}
              variant="subtitle1"
              sx={{
                color: "#9e9e9e",
                fontWeight: "bold",
              }}
            >
              Order Details
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 1.2,
                borderRadius: 2,
                backgroundColor: "#ffffff",
                borderBottom: "1px dashed #9e9e9e",
              }}
            >
              <Typography sx={{ color: "#9e9e9e" }}>Product</Typography>
              <Typography sx={{ color: "#9e9e9e" }}>Total</Typography>
            </Box>

            {data?.orderItem?.map((item: any) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 1.2,
                  borderRadius: 2,
                  backgroundColor: "#ffffff",
                  borderBottom: "1px dashed #9e9e9e",
                  alignItems: "center",
                }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 40,
                      height: 40,
                    }}
                    image={item?.productImage}
                    alt={item?.productName}
                  />
                  <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>
                    {item?.productName?.length > 10
                      ? item?.productName.slice(0, 10)
                      : item?.productName}{" "}
                    x {item?.quantity}
                  </Typography>
                </Stack>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#2e7d32",
                  }}
                >
                  ৳ {item?.discountPrice}
                </Typography>
              </Box>
            ))}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 1.2,
              }}
            >
              <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>
                Delivery Charge
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  color: "#2e7d32",
                }}
              >
                ৳ {data?.deliveryCharge}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 1.2,
              }}
            >
              <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>
                Total
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  color: "#2e7d32",
                }}
              >
                ৳ {data?.totalAmount}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 1.2,
              }}
            >
              <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>
                Payment Status
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  color: data?.paymentStatus === "FAILED" ? "red" : "#2e7d32",
                  fontWeight: "bold",
                }}
              >
                {data?.paymentStatus}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Stack>
  );
};

export default Invoice;
