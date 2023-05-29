import { CustomPaletteOptions, colors, shadows } from "@/theme/variables";

const { status, ...common } = colors;

const palette: CustomPaletteOptions = {
  primary: colors.orange,
  secondary: colors.blue,
  common: {
    ...common,
    white: "#ffffff",
    black: "#000000",
  },
  status,
  shadows: {
    ...shadows,
  },
};

export default palette;
