import { Box, Divider, Stack, Grid, Paper } from "@mui/material";

export const MuiLayout = () => {
  return (
    <Paper
      sx={{
        padding: "32px",
      }}
      elevation={4}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          border: "1px solid",
        }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box component="span">Runningwater</Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Runningwater
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        >
          Runningwater
        </Box>
      </Stack>
      <Grid container my={4} rowSpacing={3} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box p={2} bgcolor="primary.light">
            item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={2} bgcolor="error.light">
            item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={2} bgcolor="secondary.light">
            item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={2} bgcolor="success.light">
            item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
