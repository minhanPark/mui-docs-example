import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            magnam quisquam quae nostrum facilis quam veniam. Vero tempore
            repudiandae quae! Repellat eligendi magni maxime et illum
            voluptatibus eum nemo voluptatem?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            Share
          </Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
