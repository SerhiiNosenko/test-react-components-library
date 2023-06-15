import { GEOMANIST_FONTS } from "./consts";

import GeomanistLightEot from "../../../../assets/fonts/geomanist/Geomanist-Light.eot";
import GeomanistLightTtf from "../../../../assets/fonts/geomanist/Geomanist-Light.ttf";
import GeomanistLightWoff from "../../../../assets/fonts/geomanist/Geomanist-Light.woff";
import GeomanistLightWoff2 from "../../../../assets/fonts/geomanist/Geomanist-Light.woff2";

export const geomanistLight = `
  @font-face {
      font-family: '${GEOMANIST_FONTS.light}';
      font-style: normal;
      font-display: swap;
      src:
        local('Geomanist'),
        local('${GEOMANIST_FONTS.light}'),
        url(${GeomanistLightEot}) format('embedded-opentype'),
        url(${GeomanistLightTtf}) format('truetype'),
        url(${GeomanistLightWoff}) format('woff'),
        url(${GeomanistLightWoff2}) format('woff2');
  }
`;
