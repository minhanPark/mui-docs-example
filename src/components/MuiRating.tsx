import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });
  const handleChange = (_e: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        icon={<FavoriteIcon color="error" />}
        emptyIcon={<FavoriteBorderIcon />}
        highlightSelectedOnly
      />
    </Stack>
  );
};
