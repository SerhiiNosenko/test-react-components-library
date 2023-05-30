import { GEOMANIST_FONTS } from "./consts";

import GeomanistBookEot from "../../../../fonts/geomanist/Geomanist-Book.eot";
import GeomanistBookTtf from "../../../../fonts/geomanist/Geomanist-Book.ttf";
import GeomanistBookWoff from "../../../../fonts/geomanist/Geomanist-Book.woff";
import GeomanistBookWoff2 from "../../../../fonts/geomanist/Geomanist-Book.woff2";

export const geomanistBook = `
@font-face {
  font-family: '${GEOMANIST_FONTS.book}';
  font-style: normal;
  font-display: swap;
  src:
    local('Geomanist'),
    local('${GEOMANIST_FONTS.book}'),
    url(${GeomanistBookEot}) format('embedded-opentype'),
    url(${GeomanistBookTtf}) format('truetype'),
    url(${GeomanistBookWoff}) format('woff'),
    url(${GeomanistBookWoff2}) format('woff2');
}
`;
