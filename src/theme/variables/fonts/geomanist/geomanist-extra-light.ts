import { GEOMANIST_FONTS } from "./consts";

import GeomanistExtraLightEot from "../../../../assets/fonts/geomanist/Geomanist-ExtraLight.eot";
import GeomanistExtraLightTtf from "../../../../assets/fonts/geomanist/Geomanist-ExtraLight.ttf";
import GeomanistExtraLightWoff from "../../../../assets/fonts/geomanist/Geomanist-ExtraLight.woff";
import GeomanistExtraLightWoff2 from "../../../../assets/fonts/geomanist/Geomanist-ExtraLight.woff2";

export const geomanistExtraLight = `
  @font-face {
      font-family: '${GEOMANIST_FONTS.extraLight}';
      font-style: normal;
      font-display: swap;
      src:
        local('Geomanist'),
        local('${GEOMANIST_FONTS.extraLight}'),
        url(${GeomanistExtraLightEot}) format('embedded-opentype'),
        url(${GeomanistExtraLightTtf}) format('truetype'),
        url(${GeomanistExtraLightWoff}) format('woff'),
        url(${GeomanistExtraLightWoff2}) format('woff2');
  }
`;
