import React from "react";
import { Box } from "@mui/material";
import AppSwitcher, { IAppSwitcher } from "./App-Switcher";
import { Meta } from "@storybook/react";
import { DEFAULT_PROPS } from "./mocks";

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
