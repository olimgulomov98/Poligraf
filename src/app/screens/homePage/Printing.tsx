import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Printing() {
  const { t }: { t: (key: string) => string } = useTranslation("main");
  return (
    <Stack className={"printing"}>
      <Typography variant="h4">{t("Добро пожаловать в")}</Typography>
      <Typography variant="h1">{t("Полиграфию Полного Спектра!")}</Typography>
      <img src="/img/Engineering.png" alt="" />
    </Stack>
  );
}
