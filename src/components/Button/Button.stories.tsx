import type { Meta } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
};

export default meta;

export const Contained = {
  args: {
    variant: "contained",
    label: "Contained",
  },
};
