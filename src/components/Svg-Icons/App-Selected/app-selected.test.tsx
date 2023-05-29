import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import "@testing-library/jest-dom/extend-expect";
import { AppSelectedSvg } from ".";

const theme = {
  palette: {
    common: {
      orange: { main: "#FFA500" },
      white: "#FFFFFF",
    },
  },
};

test("renders AppSelectedSvg with default props", () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <AppSelectedSvg />
    </ThemeProvider>
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

test("renders AppSelectedSvg with fill and stroke props", () => {
  const fill = "#E53435";
  const secondaryColor = "#4285F4";

  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <AppSelectedSvg fill={fill} secondaryColor={secondaryColor} />
    </ThemeProvider>
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
