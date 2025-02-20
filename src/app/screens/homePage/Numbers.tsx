import { Box, Stack, Typography } from "@mui/material";

export default function Numbers() {
  return (
    <Stack className={"numbers"}>
      <Typography variant="h1">Наши Реальные Цифры</Typography>
      <Stack className={"numbers-frame"}>
        <Box className={"box-frame"}>
          <Typography variant="h3">Команда экспертов</Typography>
          <Typography variant="body2">100+</Typography>
        </Box>
        <Box className={"box-frame"}>
          <Typography variant="h3">Успешных проектов</Typography>
          <Typography variant="body2">200+</Typography>
        </Box>
        <Box className={"box-frame"}>
          <Typography variant="h3">Страны с которыми мы работаем</Typography>
          <Typography variant="body2">10+</Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
