import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  async function getData() {
    const result = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
    const data = await result.data;
    setVideos(data.items);
    // console.log(data.items);
  }

  useEffect(() => {
    getData();
  }, [searchTerm]);

  return (
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
        Search result for{" "}
        <span
          style={{
            color: "#FC1503",
          }}
        >
          {searchTerm}
        </span>{" "}
        videos
      </Typography>
      <div style={{ display: "flex" }}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </div>
    </Box>
  );
};

export default SearchFeed;
