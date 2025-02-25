import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Numbers() {
  const { t }: { t: (key: string) => string } = useTranslation("main");

  return (
    <Stack className={"numbers"}>
      <Typography variant="h1">{t("Наши Реальные Цифры")}</Typography>
      <Stack className={"numbers-frame"}>
        <Box className={"box-frame"}>
          <Typography variant="h3">{t("Команда экспертов")}</Typography>
          <Typography variant="body2">100+</Typography>
        </Box>
        <Box className={"box-frame"}>
          <Typography variant="h3">{t("Успешных проектов")}</Typography>
          <Typography variant="body2">200+</Typography>
        </Box>
        <Box className={"box-frame"}>
          <Typography variant="h3">
            {t("Страны с которыми мы работаем")}
          </Typography>
          <Typography variant="body2">10+</Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
