import React from "react";
import { Theme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export interface ThemeInheritorProps {
  theme: Theme;
  children: React.ReactNode;
}
const ThemeInheritor = ({ theme, children }: ThemeInheritorProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeInheritor;
