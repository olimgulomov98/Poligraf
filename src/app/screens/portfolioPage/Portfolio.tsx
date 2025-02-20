import { Box, Button, Stack, Typography } from "@mui/material";

export default function Portfolio() {
  return (
    <Stack className={"portfolio-frame"}>
      <Typography variant="h1" className={"title"}>
        Портфолио
      </Typography>
      <Typography variant="body2" className={"paragraph"}>
        Каждая наша работа — это гармония технологий, креатива и качества.
        <br /> Мы создаем упаковку и этикетки, которые выделяют ваш бренд.
      </Typography>
      <Stack className={"button-frame"}>
        <Button variant="contained" className={"btn"}>
          Популярные
        </Button>
        <Button variant="contained" className={"btn"}>
          Травертин, эмульсия
        </Button>
        <Button variant="contained" className={"btn"}>
          Визитки
        </Button>
        <Button variant="contained" className={"btn"}>
          Ручки
        </Button>
        <Button variant="contained" className={"btn"}>
          Сумки
        </Button>
        <Button variant="contained" className={"btn"}>
          Картоны
        </Button>
        <Button variant="contained" className={"btn"}>
          Флаеры
        </Button>
        <Button variant="contained" className={"btn"}>
          Гофра каробки
        </Button>
      </Stack>

      <Stack className={"portfolio-boxes"}>
        <Box className={"portfolio-box"}>
          <Box className={"box-img"}>
            <img src="/img/spring-p.png" alt="" />
          </Box>
          <Typography variant="h4">Spring Pharmaceutic</Typography>
          <Typography variant="body2">Каробка, картон дизайн</Typography>
        </Box>
        <Box className={"portfolio-box"}>
          <Box className={"box-img"}>
            <img src="/img/spring-p.png" alt="" />
          </Box>
          <Typography variant="h4">Spring Pharmaceutic</Typography>
          <Typography variant="body2">Каробка, картон дизайн</Typography>
        </Box>
        <Box className={"portfolio-box"}>
          <Box className={"box-img"}>
            <img src="/img/spring-p.png" alt="" />
          </Box>
          <Typography variant="h4">Spring Pharmaceutic</Typography>
          <Typography variant="body2">Каробка, картон дизайн</Typography>
        </Box>
        <Box className={"portfolio-box"}>
          <Box className={"box-img"}>
            <img src="/img/spring-p.png" alt="" />
          </Box>
          <Typography variant="h4">Spring Pharmaceutic</Typography>
          <Typography variant="body2">Каробка, картон дизайн</Typography>
        </Box>
      </Stack>

      <Button>2312</Button>
    </Stack>
  );
}
