import React from "react";
import { useTheme } from "@mui/material/styles";

export interface IAIWriterThumbSvg {
  fill?: string;
  textColor?: string;
}

export const AIWriterThumbSvg: React.FC<IAIWriterThumbSvg> = ({
  fill,
  textColor,
}) => {
  const {
    palette: {
      common: { blue, white },
    },
  } = useTheme();

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="2" fill={fill || blue.main} />
      <path
        d="M16.184 19.12L17.16 22H19.432L15.464 10.8H13.096L9.128 22H11.4L12.376 19.12H16.184ZM15.592 17.248H12.984L14.28 13.216L15.592 17.248ZM20.6345 22H22.8905V10.8H20.6345V22Z"
        fill={textColor || white}
      />
    </svg>
  );
};
