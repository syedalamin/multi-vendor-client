/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import EMSelect from "@/_components/Form/EMSelect";
import { useGetTotalCartQuery } from "@/redux/api/cartApi";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  Stack,
  Typography,
} from "@mui/material";

import { useCreateShippingMutation } from "@/redux/api/shippingApi";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useGetAllDistrictQuery } from "@/redux/api/districtApi";
import OrderCartTable from "./OrderCartTable";

const Order = () => {
  const { data: districtData } = useGetAllDistrictQuery({});
  const { data: totalCart, isLoading } = useGetTotalCartQuery({});
  const [createShipping] = useCreateShippingMutation();
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");

  // console.log(totalCart);
  const sellers = totalCart?.data?.data?.sellers || [];

  const deliveryCharge = sellers.reduce((total: number, seller: any) => {
    const charge = seller.district === selectedDistrict ? 80 : 130;
    return total + charge;
  }, 0);

  const discountTotal = totalCart?.data?.data?.totalDiscountPrice ?? 0;
  const grandTotal = discountTotal + deliveryCharge;

  if (isLoading) return <Typography>Loading...</Typography>;

  const handleBilling = async (values: FieldValues) => {
    try {
      const payload = {
        ...values,
      };
      console.log(payload);

      const { data }: any = await createShipping(payload).unwrap();

      if (data?.success) {
        toast.success("Order Successful");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack py={1}>
      <EMForm onSubmit={handleBilling}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 8 }}>
            <Box
              sx={{
                p: 4,
                width: "100%",
                borderRadius: 3,
                border: "1px solid #e0e0e0",
                background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  textAlign: "start",
                  fontWeight: "bold",
                  color: "#2e7d32",
                  letterSpacing: 0.5,
                }}
              >
                Billing Info
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <EMInput
                    name="firstName"
                    label="First Name"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <EMInput name="lastName" label="Last Name" fullWidth={true} />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <EMInput name="country" label="Country" fullWidth={true} />
                </Grid>
                <Grid size={{ xs: 12, }}>
                  <EMInput name="address" label="Address" fullWidth={true} />
                </Grid>
                <Grid size={{ xs: 12, md:4 }}>
                  <EMSelect
                    name="districts"
                    label="District"
                    fullWidth={true}
                    options={
                      districtData?.data?.map((item: any) => ({
                        label: item.name,
                        value: item.name,
                      })) || []
                    }
                    onChange={(e: any) => setSelectedDistrict(e.target.value)}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <EMSelect
                    name="city"
                    label="Thana"
                    fullWidth={true}
                    options={
                      districtData?.data
                        ?.find((d: any) => d.name === selectedDistrict)
                        ?.city?.map((c: any) => ({
                          label: c.name,
                          value: c.name,
                        })) || []
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                  <EMInput
                    name="postalCode"
                    label="Postal Code"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <EMInput name="phone" label="Phone" fullWidth={true} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <EMInput name="notes" label="Notes" fullWidth={true} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  maxWidth: 400,
                  width: "100%",
                  borderRadius: 3,
                  border: "1px solid #e0e0e0",
                  background:
                    "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    textAlign: "start",
                    fontWeight: "bold",
                    color: "#2e7d32",
                    letterSpacing: 0.5,
                  }}
                >
                  Order Summary
                </Typography>

                <Stack spacing={1.5}>
                  {totalCart?.data?.data?.sellerCount > 0 ? (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        p: 1.2,
                        borderRadius: 2,
                        backgroundColor: "#ffffff",
                        border: "1px solid #f0f0f0",
                      }}
                    >
                      <Typography color="text.secondary">Total Shop</Typography>
                      <Typography fontWeight="bold">
                        {totalCart?.data?.data?.sellerCount ?? 0}
                      </Typography>
                    </Box>
                  ) : (
                    " "
                  )}

                  <OrderCartTable />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1.2,
                      borderRadius: 2,
                      backgroundColor: "#ffffff",
                      border: "1px solid #f0f0f0",
                    }}
                  >
                    <Typography color="text.secondary">Sub Total</Typography>
                    <Typography fontWeight="bold">৳ {discountTotal}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1.2,
                      borderRadius: 2,
                      backgroundColor: "#ffffff",
                      border: "1px solid #f0f0f0",
                    }}
                  >
                    <Typography color="text.secondary">
                      Delivery Charge
                    </Typography>
                    <Typography fontWeight="bold">
                      {" "}
                      ৳ {deliveryCharge}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: "#f1f8e9",
                      border: "1px solid #dcedc8",
                    }}
                  >
                    <Typography fontWeight="bold">Grand Total</Typography>
                    <Typography fontWeight="bold" color="success.main">
                      ৳ {grandTotal}
                    </Typography>
                  </Box>
                </Stack>
                <Box pt={3}>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "start",
                      fontWeight: "bold",
                      color: "#2e7d32",
                      letterSpacing: 0.5,
                    }}
                  >
                    Payment Method
                  </Typography>

                  <FormControlLabel
                    value="cashondelivery"
                    control={
                      <Radio
                        checked
                        size="small"
                        sx={{
                          color: "#2e7d32",
                          "&.Mui-checked": {
                            color: "#2e7d32",
                          },
                          pointerEvents: "none",
                        }}
                      />
                    }
                    label="Cash On Delivery"
                    sx={{
                      gap: 1.2,
                      ml: 0.5,
                    }}
                  />
                </Box>

                <Box mt={3} display="flex" justifyContent="center">
                  <Button
                    sx={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      background: "#4caf50",
                      color: "#fff",
                      padding: "12px 20px",
                      borderRadius: "30px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      transition: "background 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#43a047")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#4caf50")
                    }
                    type="submit"
                  >
                    Place Order
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </EMForm>
    </Stack>
  );
};
// const Order = () => {
//   const { data: districtData } = useGetAllDistrictQuery({});
//   const { data: totalCart, isLoading } = useGetTotalCartQuery({});
//   const [createShipping] = useCreateShippingMutation();
//   const [selectedDistrict, setSelectedDistrict] = useState<string>("");

//   // console.log(totalCart);
//   const sellers = totalCart?.data?.data?.sellers || [];

//   const deliveryCharge = sellers.reduce((total: number, seller: any) => {
//     const charge = seller.district === selectedDistrict ? 80 : 130;
//     return total + charge;
//   }, 0);

//   const discountTotal = totalCart?.data?.data?.totalDiscountPrice ?? 0;
//   const grandTotal = discountTotal + deliveryCharge;

//   if (isLoading) return <Typography>Loading...</Typography>;

//   const handleBilling = async (values: FieldValues) => {
//     try {
//       const payload = {
//         ...values,
//       };
//       console.log(payload);

//       const { data }: any = await createShipping(payload).unwrap();

//       if (data?.success) {
//         toast.success("Order Successful");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <Stack py={1}>
//       <Grid container spacing={4}>
//         <Grid size={{ xs: 12, sm: 6, md: 8 }}>
//           <Box
//             sx={{
//               p: 4,
//               width: "100%",
//               borderRadius: 3,
//               border: "1px solid #e0e0e0",
//               background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
//             }}
//           >
//             <EMForm onSubmit={handleBilling}>
//               <Grid container spacing={3}>
//                 <Grid size={{ xs: 12, md: 6 }}>
//                   <EMInput
//                     name="firstName"
//                     label="First Name"
//                     fullWidth={true}
//                   />
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 6 }}>
//                   <EMInput name="lastName" label="Last Name" fullWidth={true} />
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 6 }}>
//                   <EMInput name="country" label="Country" fullWidth={true} />
//                 </Grid>

//                 {/* <Grid size={{ xs: 12, md: 6 }}>
//                   <EMSelect
//                     name="districts"
//                     label="Districts"
//                     fullWidth={true}
//                     options={[
//                       { label: "Dhaka", value: "Dhaka" },
//                       { label: "Barisal", value: "Barisal" },
//                       { label: "Chittagong", value: "Chittagong" },
//                     ]}
//                     onChange={(e: any) => setSelectedDistrict(e.target.value)}
//                   />
//                 </Grid> */}

//                 <Grid size={{ xs: 12, md: 6 }}>
//                   <EMSelect
//                     name="districts"
//                     label="District"
//                     fullWidth={true}
//                     options={
//                       districtData?.data?.map((item: any) => ({
//                         label: item.name,
//                         value: item.name,
//                       })) || []
//                     }
//                     onChange={(e: any) => setSelectedDistrict(e.target.value)}
//                   />
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 6 }}>
//                   <EMSelect
//                     name="city"
//                     label="Thana"
//                     fullWidth={true}
//                     options={
//                       districtData?.data
//                         ?.find((d: any) => d.name === selectedDistrict)
//                         ?.city?.map((c: any) => ({
//                           label: c.name,
//                           value: c.name,
//                         })) || []
//                     }
//                   />
//                 </Grid>

//                 {/* <Grid size={{ xs: 12, md: 6 }}>
//                   <EMSelect
//                     name="city"
//                     label="City"
//                     fullWidth={true}
//                     options={
//                       selectedDistrict ? districtThanas[selectedDistrict] : []
//                     }
//                     sx={{
//                       ...(!selectedDistrict
//                         ? {
//                             pointerEvents: "none",
//                             opacity: 0.6,
//                             cursor: "not-allowed",
//                           }
//                         : {}),
//                     }}
//                   />
//                 </Grid> */}
//                 <Grid size={{ xs: 12, md: 6 }}>
//                   <EMInput name="address" label="Address" fullWidth={true} />
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 6 }}>
//                   <EMInput
//                     name="postalCode"
//                     label="Postal Code"
//                     fullWidth={true}
//                   />
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 6 }}>
//                   <EMInput name="phone" label="Phone" fullWidth={true} />
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 6 }}>
//                   <EMInput name="notes" label="Notes" fullWidth={true} />
//                 </Grid>
//               </Grid>

//               <Box mt={3} display="flex" justifyContent="center">
//                 <Button
//                   sx={{
//                     flex: 1,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     textAlign: "center",
//                     background: "#4caf50",
//                     color: "#fff",
//                     padding: "12px 20px",
//                     borderRadius: "30px",
//                     textDecoration: "none",
//                     fontWeight: "bold",
//                     fontSize: "1rem",
//                     transition: "background 0.3s ease",
//                     cursor: "pointer",
//                   }}
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.style.background = "#43a047")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.background = "#4caf50")
//                   }
//                   type="submit"
//                 >
//                   Place Order
//                 </Button>
//               </Box>
//             </EMForm>
//           </Box>
//         </Grid>
//         <Grid size={{ xs: 12, sm: 6, md: 4 }}>
//           <Box
//             sx={{ width: "100%", display: "flex", justifyContent: "center" }}
//           >
//             <Paper
//               elevation={0}
//               sx={{
//                 p: 4,
//                 maxWidth: 400,
//                 width: "100%",
//                 borderRadius: 3,
//                 border: "1px solid #e0e0e0",
//                 background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   mb: 3,
//                   textAlign: "center",
//                   fontWeight: "bold",
//                   color: "#2e7d32",
//                   letterSpacing: 0.5,
//                 }}
//               >
//                 Order Summary
//               </Typography>

//               <Stack spacing={1.5}>
//                 {totalCart?.data?.data?.sellerCount > 0 ? (
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       p: 1.2,
//                       borderRadius: 2,
//                       backgroundColor: "#ffffff",
//                       border: "1px solid #f0f0f0",
//                     }}
//                   >
//                     <Typography color="text.secondary">Total Shop</Typography>
//                     <Typography fontWeight="bold">
//                       {totalCart?.data?.data?.sellerCount ?? 0}
//                     </Typography>
//                   </Box>
//                 ) : (
//                   " "
//                 )}

//                 <OrderCartTable />
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     p: 1.2,
//                     borderRadius: 2,
//                     backgroundColor: "#ffffff",
//                     border: "1px solid #f0f0f0",
//                   }}
//                 >
//                   <Typography color="text.secondary">
//                     Sub Total
//                   </Typography>
//                   <Typography fontWeight="bold">৳ {discountTotal}</Typography>
//                 </Box>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     p: 1.2,
//                     borderRadius: 2,
//                     backgroundColor: "#ffffff",
//                     border: "1px solid #f0f0f0",
//                   }}
//                 >
//                   <Typography color="text.secondary">
//                     Delivery Charge
//                   </Typography>
//                   <Typography fontWeight="bold"> ৳ {deliveryCharge}</Typography>
//                 </Box>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     p: 1.5,
//                     borderRadius: 2,
//                     backgroundColor: "#f1f8e9",
//                     border: "1px solid #dcedc8",
//                   }}
//                 >
//                   <Typography fontWeight="bold">Grand Total</Typography>
//                   <Typography fontWeight="bold" color="success.main">
//                     ৳ {grandTotal}
//                   </Typography>
//                 </Box>
//               </Stack>
//             </Paper>
//           </Box>
//         </Grid>
//       </Grid>
//     </Stack>
//   );
// };

export default Order;
