import { Box, Typography, Container, Stack } from "@mui/material";

const SupportPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        minHeight: "100vh",
        py: 6,
      }}
    >
      <Container maxWidth="md">
    
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Support (সহায়তা)
        </Typography>
 
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          গ্রাহক ও ভেন্ডর সমর্থন:
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          আমাদের সাপোর্ট টিম যে কোনও প্রযুক্তিগত সমস্যা, অর্ডার সংক্রান্ত জিজ্ঞাসা, স্টোর
          সেটআপ বা লগইন সমস্যা সমাধানে সহায়তা করে। ভেন্ডররা স্টোর খোলার প্রক্রিয়া, পেমেন্ট
          সেটআপ, প্রোডাক্ট লিস্টিং এবং প্রমোশনাল টুল ব্যবহার সংক্রান্ত বিস্তারিত তথ্য পেতে পারেন।
        </Typography>

 
        <Typography variant="h6" gutterBottom>
          যোগাযোগের মাধ্যম:
        </Typography>
        <Stack spacing={1} sx={{ mb: 3 }}>
         
          <Typography variant="body1">
            <strong>ইমেইল:</strong> trustyshoptbd@gmail.com
          </Typography>
          <Typography variant="body1">
            <strong>ফোন:</strong> +880 1813-022222
          </Typography>
        </Stack>
 
        <Typography variant="h6" gutterBottom>
          নোট:
        </Typography>
        <Typography variant="body1">
          প্ল্যাটফর্মে লগইন ও স্টোর তৈরি করতে মাসিক ফি প্রযোজ্য। নির্দিষ্ট মূল্য জানতে ফোনে
          আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।
        </Typography>
      </Container>
    </Box>
  );
};

export default SupportPage;
