import React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

interface ButtonProps extends MuiButtonProps {
  /**
   * Button text
   */
  label: string;
}

const Button = ({ label, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
);

export default Button;
