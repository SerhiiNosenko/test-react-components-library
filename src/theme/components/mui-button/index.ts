import { FONT_FACES } from "@/theme/variables/fonts";
import { textCrop } from "@/utils";

const MuiButton = {
  styleOverrides: {
    root: () => ({
      borderRadius: "2px",
      fontFamily: FONT_FACES.geomanist.medium,
      fontWeight: 500,
      "& span": {
        ...textCrop(1, 0, 0.2),
      },
    }),
  },
};

export default MuiButton;
