import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
} from "@mui/material";

export const MuiImagelist = () => {
  return (
    <Stack spacing={4}>
      <ImageList
        sx={{
          width: 500,
          height: 450,
        }}
        cols={3}
        rowHeight={164}
      >
        {Array.from({ length: 12 }, (v, i) => i + 1).map((item) => (
          <ImageListItem key={`title ${item}`}>
            <img
              src="https://source.unsplash.com/random"
              alt={`title ${item}`}
              loading="lazy"
            />
            <ImageListItemBar title={`title ${item}`} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        variant="woven"
        sx={{
          width: 500,
          height: 450,
        }}
        cols={3}
        gap={8}
      >
        {Array.from({ length: 12 }, (v, i) => i + 1).map((item) => (
          <ImageListItem key={`title ${item}`}>
            <img
              src="https://source.unsplash.com/random"
              alt={`title ${item}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box
        sx={{
          width: 500,
          height: 450,
          overflowY: "scroll",
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {Array.from({ length: 12 }, (v, i) => i + 1).map((item) => (
            <ImageListItem key={`title ${item}`}>
              <img
                src="https://source.unsplash.com/random"
                alt={`title ${item}`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};
