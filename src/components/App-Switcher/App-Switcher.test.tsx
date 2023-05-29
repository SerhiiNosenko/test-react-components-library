import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  fireEvent,
  act,
  render,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import AppSwitcher from "./App-Switcher";
import { lightTheme } from "@/theme";
import { DEFAULT_PROPS } from "./mocks";

describe("AppSwitcher", () => {
  test("renders the app name correctly", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <AppSwitcher {...DEFAULT_PROPS} />
      </ThemeProvider>
    );
    const appSwitcher = getByTestId("app-switcher");
    expect(appSwitcher).toBeInTheDocument();
  });

  test("opens the menu when the button is clicked", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <AppSwitcher {...DEFAULT_PROPS} />
      </ThemeProvider>
    );
    const appSwitcher = getByTestId("app-switcher");
    fireEvent.click(appSwitcher);
    const appSwitcherMenu = getByTestId("app-switcher-menu");
    expect(appSwitcherMenu).toBeInTheDocument();
  });

  test("closes the menu when the button is clicked again", async () => {
    jest.useFakeTimers();

    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <AppSwitcher {...DEFAULT_PROPS} />
      </ThemeProvider>
    );
    const appSwitcher = getByTestId("app-switcher");

    act(() => {
      fireEvent.click(appSwitcher);
    });

    act(() => {
      fireEvent.click(appSwitcher);
    });

    const appSwitcherMenu = getByTestId("app-switcher-menu");
    await waitForElementToBeRemoved(appSwitcherMenu);

    expect(appSwitcherMenu).not.toBeInTheDocument();
  });

  test("selects the correct app when clicking on a menu item", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <AppSwitcher {...DEFAULT_PROPS} />
      </ThemeProvider>
    );
    const appSwitcher = getByTestId("app-switcher");
    fireEvent.click(appSwitcher);
    const appSwitcherMenu = getByTestId("app-switcher-menu");
    const itemsMenu = appSwitcherMenu.children;
    Array.from(itemsMenu).forEach((itemMenu, index: number) => {
      const { appOptions } = DEFAULT_PROPS;
      const appItem = appOptions[index];
      expect(itemMenu).toHaveAttribute("href");
      expect(itemMenu.getAttribute("href")).toContain(appItem.url);
    });
  });
});
