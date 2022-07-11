import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";

export const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatesFormats: string | null
  ) => {
    console.log(updatesFormats);
    setFormats(updatesFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained" href="https://google.com">
          Contained
        </Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Stack spacing={1} direction="row">
          <Button variant="text" color="primary">
            Text
          </Button>
          <Button variant="contained" color="primary">
            Contained
          </Button>
          <Button variant="outlined" color="primary">
            Outlined
          </Button>
        </Stack>
        <Stack spacing={1} direction="row">
          <Button variant="text" color="error">
            Text
          </Button>
          <Button variant="contained" color="error">
            Contained
          </Button>
          <Button variant="outlined" color="error">
            Outlined
          </Button>
        </Stack>
        <Stack spacing={1} direction="row">
          <Button variant="text" color="secondary">
            Text
          </Button>
          <Button variant="contained" color="secondary">
            Contained
          </Button>
          <Button variant="outlined" color="secondary">
            Outlined
          </Button>
        </Stack>
        <Stack spacing={1} direction="row">
          <Button variant="text" color="warning">
            Text
          </Button>
          <Button variant="contained" color="warning">
            Contained
          </Button>
          <Button variant="outlined" color="warning">
            Outlined
          </Button>
        </Stack>
        <Stack spacing={1} direction="row">
          <Button variant="text" color="info">
            Text
          </Button>
          <Button variant="contained" color="info">
            Contained
          </Button>
          <Button variant="outlined" color="info">
            Outlined
          </Button>
        </Stack>
        <Stack spacing={1} direction="row">
          <Button variant="text" color="success">
            Text
          </Button>
          <Button variant="contained" color="success">
            Contained
          </Button>
          <Button variant="outlined" color="success">
            Outlined
          </Button>
        </Stack>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="medium">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          color="primary"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
