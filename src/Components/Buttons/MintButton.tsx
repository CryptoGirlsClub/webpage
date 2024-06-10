import React from "react";
import { Button, ButtonProps, keyframes, useTheme } from "@mui/material";

const resourceKeyFrame = keyframes`
  0% {
    opacity: 1;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const MintButton: React.FC<ButtonProps> = ({ size = "normal", sx = {} }) => {
  const openInNewWindow = (url: string) => {
    window.open(url, "_blank");
  };

  const handleButtonClick = () => {
    const url = "https://opensea.io/collection/cgc-membership";
    openInNewWindow(url);
  };
  return (
    <Button
      sx={{
        bgcolor: "#c954ba",
        borderRadius: "8px",
        px: "20px",
        py: "6px",
        fontSize: size === "small" ? 15 : 30,
        fontWeight: "bold",
        color: "secondary.dark",
        textDecoration: "none",
        textTransform: "uppercase",
        animation: `${resourceKeyFrame} 3s infinite ease`,
        "&:hover": {
          bgcolor: "secondary.dark",
          filter:
            "drop-shadow(0px 8px 28px rgba(275, 74, 169, 02)) drop-shadow(0px 18px 88px rgba(275, 74, 169, 02) )",
          border: `1px solid #3b2c34`,
          color: "primary.light",
        },
        ...sx,
      }}
      onClick={handleButtonClick}
    >
      Mint Now!
    </Button>
  );
};

export default MintButton;
