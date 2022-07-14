import { Button, Snackbar, Alert, AlertProps } from "@mui/material";
import React, { useState, forwardRef } from "react";

const SnackbarAlert: any = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  const handleCustomClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Button onClick={() => setCustomOpen(true)}>Custom</Button>
      <Snackbar
        message="form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />
      <Snackbar
        autoHideDuration={4000}
        open={customOpen}
        onClose={handleCustomClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <SnackbarAlert onClose={handleCustomClose} severity="success">
          form submitted successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
