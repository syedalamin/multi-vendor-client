import { Box, Typography, Container, Stack } from "@mui/material";

const TermsPage = () => {
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
          Terms (শর্তাবলী)
        </Typography>

      
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          সাইট ব্যবহারের নিয়মাবলী:
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          ভেন্ডর ও গ্রাহক উভয়কেই সাইটের শর্তাবলী মেনে চলা বাধ্যতামূলক। স্টোর
          খোলা বা পণ্য বিক্রির আগে, ভেন্ডরদের জন্য পেমেন্ট, রিফান্ড, এবং রিটার্ন পলিসি
          স্পষ্টভাবে উল্লেখ করা হয়েছে। গ্রাহকরা অর্ডার দেওয়ার মাধ্যমে শর্তাবলী মেনে
          নেন।
        </Typography>

     
        <Typography variant="h6" gutterBottom>
          ভেন্ডরের দায়িত্ব ও অধিকার:
        </Typography>
        <Stack spacing={1} sx={{ mb: 3 }}>
          <Typography variant="body1">
            - ভেন্ডররা সঠিক ও বৈধ পণ্যের তালিকা দিতে বাধ্য।
          </Typography>
          <Typography variant="body1">
            - পেমেন্ট গ্রহণ, অর্ডার প্রক্রিয়াকরণ এবং গ্রাহক সমর্থন যথাযথভাবে করতে হবে।
          </Typography>
        </Stack>

        
        <Typography variant="h6" gutterBottom>
          নোট:
        </Typography>
        <Typography variant="body1">
          স্টোর খোলার জন্য মাসিক ফি প্রযোজ্য। সুনির্দিষ্ট পরিমাণ জানতে আমাদের
          যোগাযোগ নম্বরে কল করুন।
        </Typography>
      </Container>
    </Box>
  );
};

export default TermsPage;
