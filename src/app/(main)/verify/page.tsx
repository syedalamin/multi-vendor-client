import { Typography, Box, Container, Stack } from "@mui/material";
import { Email, Phone, Payment } from "@mui/icons-material";

const VerifyPage = () => {
  return (
    <Container maxWidth="md">
      <Stack
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        spacing={3}
        sx={{
          backgroundColor: "#f9fafb",
          textAlign: "center",
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#2a5298"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
            lineHeight: 1.4,
          }}
        >
          আপনি আমাদের প্ল্যাটফর্মে বিক্রেতা হিসেবে যুক্ত হয়েছেন — অভিনন্দন! 🎉
          তবে এখনো আপনার স্টোরটি ভেরিফাই করা হয়নি।
        </Typography>

        {/* Info Paragraph */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: "650px",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            lineHeight: 1.8,
          }}
        >
          প্রিয় বিক্রেতা, ভেরিফিকেশন সম্পন্ন না হওয়া পর্যন্ত আপনি স্টোর দেখতে
          পারবেন না, পণ্য পোস্ট করতে বা বিক্রি শুরু করতেও পারবেন না। দয়া করে
          নিচের নির্দেশনাগুলি অনুসরণ করুন যাতে আপনার স্টোর দ্রুত যাচাই (verify)
          করা যায় 💼✨
        </Typography>

        {/* Fee Instruction */}
        <Box
          sx={{
            backgroundColor: "white",
            p: { xs: 2, sm: 3 },
            borderRadius: 2,
            boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
            maxWidth: "650px",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h6"
            color="#2a5298"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              mb: 1.5,
            }}
          >
            <Payment color="primary" /> ভেরিফিকেশন ফি সংক্রান্ত তথ্য
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
              lineHeight: 1.8,
            }}
          >
            ✅ আপনার স্টোরটি ভেরিফাই করার জন্য নির্ধারিত পরিমাণ ফি জমা দিতে হবে।
            ফি পাঠানোর সময় দয়া করে আপনার <strong>স্টোরের নাম</strong> ও যেই
            <strong> ইমেইল</strong> দিয়ে স্টোর তৈরি করেছেন তা অবশ্যই উল্লেখ
            করুন। যদি বোঝা না যায় কীভাবে পাঠাতে হবে, তাহলে নিচের সাপোর্ট নম্বরে
            কল করে বিস্তারিত জেনে নিতে পারেন।
          </Typography>
        </Box>

        {/* Contact Section */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
            p: { xs: 2, sm: 3 },
            borderRadius: 2,
            backgroundColor: "white",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            color="#2a5298"
            sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}
          >
            সাপোর্ট টিমের যোগাযোগের তথ্য
          </Typography>

          <Box display="flex" alignItems="center" gap={1}>
            <Email color="primary" sx={{ fontSize: { xs: 18, sm: 22 } }} />
            <Typography
              variant="body1"
              color="#2a5298"
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              trustyshoptbd@gmail.com
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Phone color="primary" sx={{ fontSize: { xs: 18, sm: 22 } }} />
            <Typography
              variant="body1"
              color="#2a5298"
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              +880 1315-831065
            </Typography>
          </Box>
        </Box>

        {/* Footer */}
        <Typography
          variant="caption"
          color="text.secondary"
          mt={2}
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          💡 ভেরিফিকেশন সম্পন্ন হলে আপনি আপনার স্টোর, পণ্য আপলোড ও বিক্রির সকল
          সুবিধা পাবেন। আমাদের টিম আপনার সঙ্গে দ্রুত যোগাযোগ করবে।
        </Typography>
      </Stack>
    </Container>
  );
};

export default VerifyPage;
