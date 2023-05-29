import { GEOMANIST_FONTS } from "./consts";

import GeomanistRegularEot from "@/fonts/geomanist/Geomanist-Regular.eot";
import GeomanistRegularTtf from "@/fonts/geomanist/Geomanist-Regular.ttf";
import GeomanistRegularWoff from "@/fonts/geomanist/Geomanist-Regular.woff";
import GeomanistRegularWoff2 from "@/fonts/geomanist/Geomanist-Regular.woff2";

export const geomanistRegular = `
@font-face {
    font-family: '${GEOMANIST_FONTS.regular}';
    font-style: normal;
    font-display: swap;
    src: 
      local('Geomanist'),
      local('${GEOMANIST_FONTS.regular}'),
      url(${GeomanistRegularEot}) format('embedded-opentype'),
      url(${GeomanistRegularTtf}) format('truetype'),
      url(${GeomanistRegularWoff}) format('woff'),
      url(${GeomanistRegularWoff2}) format('woff2');
}
`;
