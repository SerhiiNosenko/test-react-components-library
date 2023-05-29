import { createTheme } from "@mui/material";
import palette from "./palette";
import breakpoints from "./breakpoints";
import typography from "./typography";
import components from "./components";
import custom from "./custom";

export const lightTheme = createTheme({
  typography,
  palette,
  breakpoints,
  components,
  custom,
});
