import { createTheme, ThemeOptions } from "@mui/material";
import palette from "./palette";
import breakpoints from "./breakpoints";
import typography from "./typography";
import components from "./components";

export const theme = {
  typography,
  palette,
  breakpoints,
  components,
};

export const lightTheme = createTheme(theme) as ThemeOptions;
