import { GEOMANIST_FONTS } from "./consts";

import GeomanistBlackEot from "../../../../assets/fonts/geomanist/Geomanist-Black.eot";
import GeomanistBlackTtf from "../../../../assets/fonts/geomanist/Geomanist-Black.ttf";
import GeomanistBlackWoff from "../../../../assets/fonts/geomanist/Geomanist-Black.woff";
import GeomanistBlackWoff2 from "../../../../assets/fonts/geomanist/Geomanist-Black.woff2";

export const geomanistBlack = `
  @font-face {
    font-family: '${GEOMANIST_FONTS.black}';
    font-style: normal;
    font-display: swap;
    src:
      local('Geomanist'),
      local('${GEOMANIST_FONTS.black}'),
      url(${GeomanistBlackEot}) format('embedded-opentype'),
      url(${GeomanistBlackTtf}) format('truetype'),
      url(${GeomanistBlackWoff}) format('woff'),
      url(${GeomanistBlackWoff2}) format('woff2');
  }
`;
