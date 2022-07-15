import { LocalizationProvider } from "@mui/x-date-pickers";
//import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";
import { MuiAccordion } from "./components/MuiAccordion";
import { MuiAlert } from "./components/MuiAlert";
import { MuiAutocomplete } from "./components/MuiAutocomplete";
import { MuiAvatart } from "./components/MuiAvatar";
import { MuiBadge } from "./components/MuiBadge";
import { MuiBottonNavigation } from "./components/MuiBottonNavigation";
import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
import { MuiButton } from "./components/MuiButton";
import { MuiCard } from "./components/MuiCard";
import { MuiCheckBox } from "./components/MuiCheckbox";
import { MuiChip } from "./components/MuiChip";
import { MuiDialog } from "./components/MuiDialog";
import { MuiDrawer } from "./components/MuiDrawer";
import { MuiImagelist } from "./components/MuiImageList";
import { MuiLayout } from "./components/MuiLayout";
import { MuiLink } from "./components/MuiLinks";
import { MuiList } from "./components/MuiList";
import { MuiLoadingButton } from "./components/MuiLoadingbutton";
import { MuiNavBar } from "./components/MuiNavbar";
import { MuiPicker } from "./components/MuiPicker";
import { MuiProgress } from "./components/MuiProgress";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiRating } from "./components/MuiRating";
import { MuiResponse } from "./components/MuiResponse";
import { MuiSelect } from "./components/MuiSelect";
import { MuiSkeleton } from "./components/MuiSkeleton";
import { MuiSnackbar } from "./components/MuiSnackbar";
import { MuiSpeedDial } from "./components/MuiSpeedDial";
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiTable } from "./components/MuiTable";
import { MuiTabs } from "./components/MuiTabs";
import { MuiTextField } from "./components/MuiTextField";
import { MuiTimeline } from "./components/MuiTimeline";
import { MuiTooltip } from "./components/MuiTooltip";
// import { MuiTypography } from "./components/MuiTypography";
import { createTheme } from "@mui/material/styles";
import { orange, grey } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import { MuiReactHookForm } from "./components/MuiReactHookForm";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: orange[500],
    },
    neutral: {
      main: grey[500],
      darker: grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <div>
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckBox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutocomplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImagelist /> */}
        {/* <MuiNavBar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottonNavigation /> */}
        {/* <MuiAvatart /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiPicker /> */}
        {/* <MuiTabs /> */}
        {/* <MuiTimeline /> */}
        {/* <MuiResponse /> */}
        <MuiReactHookForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
