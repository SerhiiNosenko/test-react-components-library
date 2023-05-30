import { GEOMANIST_FONTS } from "./consts";

import GeomanistMediumEot from "../../../../fonts/geomanist/Geomanist-Medium.eot";
import GeomanistMediumTtf from "../../../../fonts/geomanist/Geomanist-Medium.ttf";
import GeomanistMediumWoff from "../../../../fonts/geomanist/Geomanist-Medium.woff";
import GeomanistMediumWoff2 from "../../../../fonts/geomanist/Geomanist-Medium.woff2";

export const geomanistMedium = `
@font-face {
    font-family: '${GEOMANIST_FONTS.medium}';
    font-style: normal;
    font-display: swap;
    src:
      local('Geomanist'),
      local('${GEOMANIST_FONTS.medium}'),
      url(${GeomanistMediumEot}) format('embedded-opentype'),
      url(${GeomanistMediumTtf}) format('truetype'),
      url(${GeomanistMediumWoff}) format('woff'),
      url(${GeomanistMediumWoff2}) format('woff2');
}
`;
