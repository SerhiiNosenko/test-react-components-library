import { GEOMANIST_FONTS } from "./consts";

import GeomanistThinEot from "@/fonts/geomanist/Geomanist-Thin.eot";
import GeomanistThinTtf from "@/fonts/geomanist/Geomanist-Thin.ttf";
import GeomanistThinWoff from "@/fonts/geomanist/Geomanist-Thin.woff";
import GeomanistThinWoff2 from "@/fonts/geomanist/Geomanist-Thin.woff2";

export const geomanistThin = `
@font-face {
  font-family: '${GEOMANIST_FONTS.thin}';
  font-style: normal;
  font-display: swap;
  src:
    local('Geomanist'),
    local('${GEOMANIST_FONTS.thin}'),
    url(${GeomanistThinEot}) format('embedded-opentype'),
    url(${GeomanistThinTtf}) format('truetype'),
    url(${GeomanistThinWoff}) format('woff'),
    url(${GeomanistThinWoff2}) format('woff2');
}
`;
