import { Stack, Link } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary" underline="hover">
        Secondary
      </Link>
      <Link href="#" color="secondary" underline="hover" variant="h2">
        Secondary
      </Link>
    </Stack>
  );
};
