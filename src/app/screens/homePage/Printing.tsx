import { Stack, Typography } from "@mui/material";

export default function Printing() {
  return (
    <Stack className={"printing"}>
      <Typography variant="h4">Добро пожаловать в</Typography>
      <Typography variant="h1">Полиграфию Полного Спектра!</Typography>
      <img src="/img/Engineering.png" alt="" />
    </Stack>
  );
}
