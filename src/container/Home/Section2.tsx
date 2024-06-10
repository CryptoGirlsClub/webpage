import { Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import HeroImage from "public/Images/HeroImages/laquees.png";
import Image from "next/image";
import MainButton from "@/src/Components/Buttons/MainButton";
import Diamond from "@/src/Components/Diamond/Diamond";
import useScrollPosition from "@/src/hooks/useScrollPosition";
import { BorderColor } from "@mui/icons-material";
import Hidden from "@mui/material";

function Section2() {
  const theme = useTheme();
  const scrollPosition = useScrollPosition();
  // console.log(scrollPosition);

  return (
    <Container
      sx={{
        height: "40vh",
        mb: 20,
        [theme.breakpoints.up("sm")]: {
          height: "70vh",
          mb: 20,
        },
      }}
    >
      {/* content  */}
      <Stack
        sx={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
          },
          [theme.breakpoints.up("sm")]: {
            fontSize: "20px",
          },
          [theme.breakpoints.up("md")]: {
            fontSize: "25px",
          },
        }}
      >
        <Image
          src={HeroImage}
          alt="heroImage"
          style={{
            width: "15em",
            height: "15em",
            objectFit: "cover",
            objectPosition: "center",
            marginTop: "25px",
          }}
        />
        <Stack direction="row" spacing={1} sx={{ mt: -10, mb: 5 }}>
          <Typography fontSize="1em" fontWeight="bold">
            Welcome to Crypto Girls Club
          </Typography>
        </Stack>

        <MainButton sx={{ fontSize: "20px" }}>MINT NOW!</MainButton>

        {/* Neo Objects */}
        {/* this will change the opacity until it disapears */}
        <Diamond
          sx={{
            opacity: 1 - scrollPosition / 600,
            transform: `translate3d(-32px, 8px, 0px) scale3d(${
              0.0065 * scrollPosition + 1
            }, ${
              0.0065 * scrollPosition + 1
            }, 1) rotateX(0deg) rotateY(0deg) rotateZ(${
              -0.18 * scrollPosition + 45
            }deg) skew(0deg, 0deg);`,
          }}
        />
        <Diamond
          sx={{
            opacity: 1 - scrollPosition / 600,
            transform: `translate3d(-8px, 0px, 0px)   scale3d(${
              0.0065 * scrollPosition + 1
            }, ${
              0.0065 * scrollPosition + 1
            }, 1) rotateX(0deg) rotateY(0deg) rotateZ(${
              0.215 * scrollPosition + 45
            }deg
              ) skew(0deg, 0deg);`,
            borderImage:
              "linear-gradient(to right, #3966FF, #FF599c, #1eea4e) 1",
            borderColor: "#FF4aa9",
          }}
        />
        <Diamond
          sx={{
            opacity: 1 - scrollPosition / 600,
            transform: `translate3d(16px, -8px, 0px)  scale3d(${
              0.0065 * scrollPosition + 1
            }, ${
              0.0065 * scrollPosition + 1
            }, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg);`,
          }}
        />
      </Stack>
    </Container>
  );
}

export default Section2;
