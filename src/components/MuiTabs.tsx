import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Tab one" value="1" icon={<FavoriteIcon />} />
            <Tab
              label="Tab Two"
              value="2"
              icon={<FavoriteIcon />}
              iconPosition="start"
            />
            <Tab
              label="Tab Three"
              value="3"
              icon={<FavoriteIcon />}
              iconPosition="end"
            />
            <Tab label="Tab Four" value="4" icon={<FavoriteIcon />} />
            <Tab label="Tab Five" value="5" icon={<FavoriteIcon />} />
            <Tab label="Tab Six" value="6" icon={<FavoriteIcon />} />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
        <TabPanel value="4">Panel Four</TabPanel>
        <TabPanel value="5">Panel Five</TabPanel>
        <TabPanel value="6">Panel Six</TabPanel>
      </TabContext>
    </Box>
  );
};
