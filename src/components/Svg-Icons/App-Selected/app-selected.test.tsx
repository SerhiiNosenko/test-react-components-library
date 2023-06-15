import React from "react";
import { render } from "@testing-library/react";
import { Theme, createTheme } from "@mui/material/styles";
import ThemeInheritor from "../../Theme-Inheritor";
import { AppSelectedSvg } from ".";
import "@testing-library/jest-dom/extend-expect";

const theme = {
  palette: {
    common: {
      orange: { main: "#FFA500" },
      white: "#FFFFFF",
    },
  },
};

test("should render AppSelectedSvg with default fill and stroke", () => {
  const { getByTestId } = render(
    <ThemeInheritor theme={createTheme(theme) as Theme}>
      <AppSelectedSvg />
    </ThemeInheritor>
  );
  const svgElement = getByTestId("app-selected-svg");
  expect(svgElement).toBeInTheDocument();

  expect(svgElement.querySelector("rect")).toHaveAttribute(
    "fill",
    theme.palette.common.orange.main
  );
  expect(svgElement.querySelector("rect")).toHaveAttribute(
    "stroke",
    theme.palette.common.orange.main
  );
  expect(svgElement.querySelector("path")).toHaveAttribute(
    "stroke",
    theme.palette.common.white
  );
});

test("should render AppSelectedSvg with custom fill and secondary color", () => {
  const fill = "#E53435";
  const secondaryColor = "#4285F4";

  const { getByTestId } = render(
    <ThemeInheritor theme={createTheme(theme) as Theme}>
      <AppSelectedSvg fill={fill} secondaryColor={secondaryColor} />
    </ThemeInheritor>
  );
  const svgElement = getByTestId("app-selected-svg");
  expect(svgElement).toBeInTheDocument();

  expect(svgElement.querySelector("rect")).toHaveAttribute("fill", fill);
  expect(svgElement.querySelector("rect")).toHaveAttribute("stroke", fill);
  expect(svgElement.querySelector("path")).toHaveAttribute(
    "stroke",
    secondaryColor
  );
});
