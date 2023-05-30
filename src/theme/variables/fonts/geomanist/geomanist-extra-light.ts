import { GEOMANIST_FONTS } from "./consts";

import GeomanistExtraLightEot from "../../../../fonts/geomanist/Geomanist-ExtraLight.eot";
import GeomanistExtraLightTtf from "../../../../fonts/geomanist/Geomanist-ExtraLight.ttf";
import GeomanistExtraLightWoff from "../../../../fonts/geomanist/Geomanist-ExtraLight.woff";
import GeomanistExtraLightWoff2 from "../../../../fonts/geomanist/Geomanist-ExtraLight.woff2";

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
