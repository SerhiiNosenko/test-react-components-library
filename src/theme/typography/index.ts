import { FONT_FACES } from "@/theme/variables/fonts";
import { TypographyVariantsOptions } from "./types";

export const h1 = {
  fontSize: "2.5rem", // 40px
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const h2 = {
  fontSize: "2rem", // 32px
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const h3 = {
  fontSize: "1.75rem", // 28px
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const h4 = {
  fontSize: "1.5rem", // 24px
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const h5 = {
  fontSize: "1.25rem", // 20px
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const h6 = {
  fontSize: "1rem", // 16px
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const caps26 = {
  fontSize: "1.625rem", // 26px
  lineHeight: "1",
  textTransform: "uppercase",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const caps24 = {
  fontSize: "1.5rem", // 24px
  lineHeight: "1",
  textTransform: "uppercase",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const caps16 = {
  fontSize: "1rem", // 16 px
  lineHeight: "1",
  letterSpacing: "0.08",
  textTransform: "uppercase",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const caps14 = {
  fontSize: "0.875rem", // 14 px
  lineHeight: "1",
  textTransform: "uppercase",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const caps12 = {
  fontSize: "0.75rem", // 12 px
  lineHeight: "1",
  textTransform: "uppercase",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const text24 = {
  fontSize: "1.5rem", // 24px
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const text24Medium = {
  ...text24,
  fontFamily: FONT_FACES.geomanist.medium,
};

export const text24Book = {
  ...text24,
  fontFamily: FONT_FACES.geomanist.book,
};

export const text22 = {
  fontSize: "1.375rem", // 22px
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const text22Book = {
  ...text22,
  fontFamily: FONT_FACES.geomanist.book,
};

export const text20 = {
  fontSize: "1.25rem", // 20px
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const text20Book = {
  ...text20,
  fontFamily: FONT_FACES.geomanist.book,
};

export const text18 = {
  fontSize: "1.125rem", // 18px
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const text18Book = {
  ...text18,
  fontFamily: FONT_FACES.geomanist.book,
};

export const text18Medium = {
  ...text18,
  fontFamily: FONT_FACES.geomanist.medium,
};

export const text20Medium = {
  ...text20,
  fontFamily: FONT_FACES.geomanist.medium,
};

export const text16 = {
  fontSize: "1rem", // 16px
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const text16Medium = {
  ...text16,
  fontFamily: FONT_FACES.geomanist.medium,
};

export const text16Book = {
  ...text16,
  fontFamily: FONT_FACES.geomanist.book,
};

export const text14 = {
  fontSize: "1.143rem", // 14px
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const text14Medium = {
  ...text14,
  fontFamily: FONT_FACES.geomanist.medium,
};

export const text14Book = {
  ...text14,
  fontFamily: FONT_FACES.geomanist.book,
};

export const text12 = {
  fontSize: "12px",
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const text12Medium = {
  ...text12,
  fontFamily: FONT_FACES.geomanist.medium,
};

export const text12Book = {
  ...text12,
  fontFamily: FONT_FACES.geomanist.book,
};

export const text10 = {
  fontSize: "10px",
  lineHeight: "1.2",
  fontFamily: FONT_FACES.geomanist.regular,
};

export const text10Book = {
  ...text10,
  fontFamily: FONT_FACES.geomanist.book,
};

export const typography = {
  fontFamily: [
    `"${FONT_FACES.geomanist.thin}"`,
    `"${FONT_FACES.geomanist.extraLight}"`,
    `"${FONT_FACES.geomanist.light}"`,
    `"${FONT_FACES.geomanist.regular}"`,
    `"${FONT_FACES.geomanist.medium}"`,
    `"${FONT_FACES.geomanist.book}"`,
    `"${FONT_FACES.geomanist.bold}"`,
    `"${FONT_FACES.geomanist.ultra}"`,
    `"${FONT_FACES.geomanist.black}"`,
    "sans-serif",
  ].join(", "),
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  caps12,
  caps14,
  caps16,
  caps24,
  caps26,
  text16,
  text12,
  text14,
  text10,
  text18,
  text20,
  text22,
  text24,
  text12Medium,
  text14Medium,
  text16Medium,
  text18Medium,
  text20Medium,
  text24Medium,
  text10Book,
  text12Book,
  text14Book,
  text16Book,
  text18Book,
  text20Book,
  text22Book,
  text24Book,
} as TypographyVariantsOptions;

export default typography;
