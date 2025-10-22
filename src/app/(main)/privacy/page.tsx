import { Box, Typography, Container, Stack } from "@mui/material";

const PrivacyPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        minHeight: "100vh",
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Privacy (গোপনীয়তা নীতি)
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          ব্যক্তিগত তথ্যের নিরাপত্তা:
        </Typography>
        <Stack spacing={1} sx={{ mb: 3 }}>
          <Typography variant="body1">
            - ব্যবহারকারীর নাম, ফোন নম্বর, ইমেইল, এবং পেমেন্ট ডেটা সর্বোচ্চ
            নিরাপত্তা দিয়ে সংরক্ষণ করা হয়।
          </Typography>
          <Typography variant="body1">
            - ডেটা তৃতীয় পক্ষের সাথে শেয়ার করা হয় না, শুধুমাত্র সার্ভিসের
            প্রয়োজন অনুযায়ী।
          </Typography>
        </Stack>

        <Typography variant="h6" gutterBottom>
          কুকি ও ট্র্যাকিং:
        </Typography>
        <Stack spacing={1} sx={{ mb: 3 }}>
          <Typography variant="body1">
            - সাইটের কার্যকারিতা উন্নত করতে এবং ব্যবহারকারীর অভিজ্ঞতা
            ব্যক্তিগতকৃত করতে কুকি ব্যবহার করা হয়।
          </Typography>
        </Stack>

        <Typography variant="h6" gutterBottom>
          স্টোর সংক্রান্ত নোট:
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          স্টোর তৈরি করতে মাসিক ফি প্রযোজ্য। ফি ও অন্যান্য শর্ত জানতে আমাদের
          সাপোর্ট নম্বরে কল করুন।
        </Typography>

        <Typography variant="h6" gutterBottom>
          অতিরিক্ত নিরাপত্তা:
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body1">
            - ব্যক্তিগত তথ্য কখনো প্রকাশ করা হয় না।
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default PrivacyPage;
