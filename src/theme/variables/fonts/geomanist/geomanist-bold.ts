import { GEOMANIST_FONTS } from "./consts";

import GeomanistBoldEot from "../../../../fonts/geomanist/Geomanist-Bold.eot";
import GeomanistBoldTtf from "../../../../fonts/geomanist/Geomanist-Bold.ttf";
import GeomanistBoldWoff from "../../../../fonts/geomanist/Geomanist-Bold.woff";
import GeomanistBoldWoff2 from "../../../../fonts/geomanist/Geomanist-Bold.woff2";

export const geomanistBold = `
  @font-face {
      font-family: '${GEOMANIST_FONTS.bold}';
      font-style: normal;
      font-display: swap;
      src:
        local('Geomanist'),
        local('${GEOMANIST_FONTS.bold}'),
        url(${GeomanistBoldEot}) format('embedded-opentype'),
        url(${GeomanistBoldTtf}) format('truetype'),
        url(${GeomanistBoldWoff}) format('woff'),
        url(${GeomanistBoldWoff2}) format('woff2');
  }
`;
