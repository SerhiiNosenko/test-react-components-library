import React from "react";
import { RenderResult } from "@testing-library/react";
import { render, fireEvent, within, waitFor } from "@testing-library/react";
import AppSwitcher from "./App-Switcher";
import ThemeInheritor from "../Theme-Inheritor";
import { lightTheme } from "../../theme";
import { DEFAULT_PROPS } from "./mocks";
import "@testing-library/jest-dom/extend-expect";
import { Theme } from "@mui/material";

describe("AppSwitcher", () => {
  let getByTestId: RenderResult["getByTestId"];

  beforeEach(() => {
    ({ getByTestId } = render(
      <ThemeInheritor theme={lightTheme as Theme}>
        <AppSwitcher {...DEFAULT_PROPS} />
      </ThemeInheritor>
    ));
  });

  test("should render the app switcher", () => {
    const appSwitcher = getByTestId("app-switcher");
    expect(appSwitcher).toBeInTheDocument();
  });

  test("should open the menu when the button is clicked", () => {
    const appSwitcher = getByTestId("app-switcher");
    fireEvent.click(appSwitcher);
    const appSwitcherMenu = getByTestId("app-switcher-menu");
    expect(appSwitcherMenu).toBeInTheDocument();
  });

  test("should close the menu when the button is clicked again", async () => {
    const appSwitcher = getByTestId("app-switcher");
    fireEvent.click(appSwitcher);
    fireEvent.click(appSwitcher);
    const appSwitcherMenu = getByTestId("app-switcher-menu");
    await waitFor(() => {
      expect(appSwitcherMenu).not.toBeInTheDocument();
    });
  });

  test("should select the correct app when clicking on a menu item", () => {
    const appSwitcher = getByTestId("app-switcher");
    fireEvent.click(appSwitcher);
    const appSwitcherMenu = getByTestId("app-switcher-menu");
    const itemsMenu = appSwitcherMenu.children;
    Array.from(itemsMenu).forEach((itemMenu, index) => {
      const itemMenuHTMLElement = itemMenu as HTMLElement;
      const { appOptions } = DEFAULT_PROPS;
      const appItem = appOptions[index];
      expect(itemMenuHTMLElement).toHaveAttribute("href", appItem.url);
      const { getByTestId: getByTestIdWithinItemMenu } =
        within(itemMenuHTMLElement);
      const appTitleElement = getByTestIdWithinItemMenu("app-title");
      const appDescrptionElement = getByTestIdWithinItemMenu("app-description");
      expect(appTitleElement).toHaveTextContent(appItem.title);
      expect(appDescrptionElement).toHaveTextContent(appItem.description);
    });
  });
});
