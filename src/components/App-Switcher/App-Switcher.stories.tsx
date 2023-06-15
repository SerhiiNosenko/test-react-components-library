import React from "react";
import { Meta } from "@storybook/react";
import { Box } from "@mui/material";
import AppSwitcher from "./App-Switcher";
import { DEFAULT_PROPS } from "./mocks";
import { IAppSwitcher } from "./App-Switcher.types";

const meta: Meta<typeof AppSwitcher> = {
  title: "Components/AppSwitcher",
  component: AppSwitcher,
  tags: ["autodocs"],
};

export default meta;

export const Contained = (args: IAppSwitcher) => (
  <Box sx={{ height: "300px" }}>
    <AppSwitcher {...args} />
  </Box>
);

Contained.args = DEFAULT_PROPS;
