import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, Videos } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("World News");
  const [videos, setVideos] = useState([]);

  async function getData() {
    const result = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
    const data = await result.data;
    setVideos(data.items);
    // console.log(data.items);
  }

  useEffect(() => {
    getData();
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography
          className="copy-right"
          variant="body2"
          sx={{
            mt: 1.5,
            color: "#fff",
          }}
        >
          Copyright 2022 Abdullah Ajayi
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "92vh",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {selectedCategory}{" "}
          <span
            style={{
              color: "#FC1503",
            }}
          >
            videos
          </span>
        </Typography>
        <div style={{ display: "flex" }}>
          <Box sx={{ mr: { sm: "100px", md: "0" } }} />
          <Videos videos={videos} />
        </div>
      </Box>
    </Stack>
  );
};

export default Feed;
