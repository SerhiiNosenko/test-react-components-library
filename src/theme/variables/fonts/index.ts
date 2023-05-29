import { geomanistFontFaces } from "./geomanist";
import { GEOMANIST_FONTS } from "./geomanist/consts";

export const FONT_FACES = {
  geomanist: {
    ...GEOMANIST_FONTS,
  },
};

export const fontFaces = `${geomanistFontFaces}`;
