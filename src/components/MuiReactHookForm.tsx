import {
  Paper,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export const MuiReactHookForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, reset, register } = useForm();
  const onSubmit = (data: any) => console.log({ data });
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ minWidth: 400, padding: 12 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Login Page
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} sx={{ margin: 0 }}>
            {/* <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <TextField {...field} label="Email" />}
            />
          </Grid> */}
            <Grid item xs={12}>
              <TextField label="email" fullWidth {...register("email")} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="password"
                type={showPassword ? "text" : "password"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                {...register("password")}
              />
            </Grid>
          </Grid>
          <FormControlLabel
            control={<Checkbox />}
            label="아이디를 저장하시겠습니까?"
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};
