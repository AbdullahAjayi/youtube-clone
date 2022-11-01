import { CircularProgress, Box, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Box minHeight="95vh">
      <Stack justifyContent="center" alignItems="center" height="85vh">
        <CircularProgress />
      </Stack>
    </Box>
  );
};

export default Loader;
