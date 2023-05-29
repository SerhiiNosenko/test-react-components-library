import { fontFaces } from "@/theme/variables/fonts";
import MuiButton from "./mui-button";
import MuiCard from "./mui-card";

const components = {
  MuiCssBaseline: {
    styleOverrides: fontFaces,
  },
  MuiButton,
  MuiCard,
};

export default components;
