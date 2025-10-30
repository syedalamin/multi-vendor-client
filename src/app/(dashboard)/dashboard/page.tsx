 
import { Box, Typography, Stack } from "@mui/material";

const DashboardPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      bgcolor="#f5f5f5"
      p={{ xs: 2, sm: 3, md: 4 }}
    >
      <Stack
      
      >
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" } }}
          fontWeight="bold"
        >
          Welcome to the Dashboard!
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
        >
          You can manage your account, check statistics, and more.
        </Typography>
      </Stack>
    </Box>
  );
};

export default DashboardPage;
