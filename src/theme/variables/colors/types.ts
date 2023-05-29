import { CommonColors } from "@mui/material";
import { PaletteOptions } from "@mui/material/styles";
import { TGenericObject } from "@/types";
import { colors } from "./colors";

export type TColorLevels =
  | "main"
  | "success"
  | "danger"
  | "warning"
  | "good"
  | "info"
  | "70"
  | "50"
  | "30"
  | "20"
  | "10"
  | "dull"
  | "dark"
  | "light"
  | "bright"
  | "dim"
  | "magenta"
  | "lime";

export type TColorName =
  | "orange"
  | "blue"
  | "darkGray"
  | "gray"
  | "lightGray"
  | "red"
  | "pink"
  | "green"
  | "yellow";

export type IPaletteColors = {
  [color in TColorLevels]?: string;
};

export type IStatusColorsVariants = keyof typeof colors.status;

export type IStatusColors = {
  [variant in IStatusColorsVariants]: string;
};

type ExtendedCommonColors = {
  [color in TColorName]: IPaletteColors;
};

declare module "@mui/material/styles" {
  interface CommonColors extends ExtendedCommonColors {}
}

export interface CustomPaletteOptions extends Omit<PaletteOptions, "common"> {
  status: IStatusColors;
  common: CommonColors;
  shadows: TGenericObject<string>;
}
