import { styled } from "@mui/system";
import { Button as MuiButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { TKeyboardArrowRightIconCustomized } from "./App-Switcher.types";

export const AppSwitcherButtomCustomized = styled(MuiButton)(
  ({
    theme: {
      palette: {
        common: { darkGray, gray },
      },
    },
  }) => ({
    color: darkGray.main,
    background: gray[10],
    textTransform: "none",
    justifyContent: "space-between",
    minWidth: 228,
    py: 0.5,
    px: 1.5,
  })
);

export const KeyboardArrowRightIconCustomized = styled(KeyboardArrowRightIcon, {
  shouldForwardProp: (prop) => prop !== "open",
})<TKeyboardArrowRightIconCustomized>(({ open }) => ({
  position: "relative",
  transition: "transform .2s ease",
  transformOrigin: "center",
  transform: `rotate(${open ? "90deg" : "0deg"})`,
}));
