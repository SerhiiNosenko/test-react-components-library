import { GEOMANIST_FONTS } from "./consts";

import GeomanistUltraEot from "../../../../fonts/geomanist/Geomanist-Ultra.eot";
import GeomanistUltraTtf from "../../../../fonts/geomanist/Geomanist-Ultra.ttf";
import GeomanistUltraWoff from "../../../../fonts/geomanist/Geomanist-Ultra.woff";
import GeomanistUltraWoff2 from "../../../../fonts/geomanist/Geomanist-Ultra.woff2";

export const geomanistUltra = `
  @font-face {
    font-family: '${GEOMANIST_FONTS.ultra}';
    font-style: normal;
    font-display: swap;
    src:
      local('Geomanist'),
      local('${GEOMANIST_FONTS.ultra}'),
      url(${GeomanistUltraEot}) format('embedded-opentype'),
      url(${GeomanistUltraTtf}) format('truetype'),
      url(${GeomanistUltraWoff}) format('woff'),
      url(${GeomanistUltraWoff2}) format('woff2');
  }
`;
