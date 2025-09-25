'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography, Paper } from "@mui/material";
import ReviewForm from './ReviewForm';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mt: 2,
            borderRadius: 3,
            background: "linear-gradient(135deg, #ffffff 0%, #fafafa 100%)",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <Typography sx={{ color: "#444", lineHeight: 1.7 }}>
            {children}
          </Typography>
        </Paper>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `custom-tab-${index}`,
    'aria-controls': `custom-tabpanel-${index}`,
  };
}

export default function ProductDetailsTab({ description, id }: { description: string, id: string }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="product details tabs"
          TabIndicatorProps={{
            style: {
              height: "2px",
              borderRadius: "2px",
              backgroundColor: "#2e7d32",  
            },
          }}
        >
          <Tab
            disableRipple 
            label="Description"
            {...a11yProps(0)}
            sx={{
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",
              "&.Mui-selected": { color: "#2e7d32" },
              "&:hover": { backgroundColor: "#f4f6f8" },
            }}
          />
          <Tab
            disableRipple  
            label="Rating & Reviews"
            {...a11yProps(1)}
            sx={{
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",
              "&.Mui-selected": { color: "#2e7d32" },
              "&:hover": { backgroundColor: "#f4f6f8" },
            }}
          />
          {/* <Tab
            disableRipple  
            label="Customer Feedback"
            {...a11yProps(2)}
            sx={{
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",
              "&.Mui-selected": { color: "#2e7d32" },
              "&:hover": { backgroundColor: "#f4f6f8" },
            }}
          /> */}
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        {description}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ReviewForm id={id}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        
      </CustomTabPanel>
    </Box>
  );
}
