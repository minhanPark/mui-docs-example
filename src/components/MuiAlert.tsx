import { Alert, Stack, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is an warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="success">This is an success alert</Alert>

      <Alert variant="outlined" severity="error">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an success alert
      </Alert>

      <Alert variant="filled" severity="error">
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        This is an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        This is an info alert
      </Alert>
      <Alert variant="filled" severity="success">
        This is an success alert
      </Alert>

      <Alert variant="outlined" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert
        severity="success"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>success</AlertTitle>
        This is an success alert
      </Alert>
      <Alert
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        onClose={() => alert("Close alert")}
      >
        <AlertTitle>success</AlertTitle>
        This is an success alert
      </Alert>
    </Stack>
  );
};
