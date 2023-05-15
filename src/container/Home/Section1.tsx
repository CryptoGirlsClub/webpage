import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

interface Coin {
  id: string;
  name: string;
  image: string;
  currentPrice: number;
  price_change_percentage_24h: number;
}

const ENDPOINT =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

function Section1() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    fetch(ENDPOINT)
      .then((response) => response?.ok && response.json())
      .then((data) => {
        const _data = data?.slice(0, 20) || [];
        setCoins(_data);
      });
  }, []);

  return (
    <Paper>
      <Marquee gradient={false} speed={40}>
        {coins.map((coin) => (
          <Stack
            key={coin.id}
            sx={{ mx: 1.5, py: 0.5 }}
            direction="row"
            alignItems="center"
            spacing="0.3em"
          >
            <Avatar src={coin.image} sx={{ height: 20, width: 20 }} />
            <Typography>{coin.name}</Typography>
            <Typography color="info.light"> ${coin.current_price}</Typography>
            <Typography
              sx={{
                color:
                  coin.price_change_percentage_24h >= 0
                    ? "success.light"
                    : "error.light",
              }}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </Typography>
          </Stack>
        ))}
      </Marquee>
    </Paper>
  );
}

export default Section1;