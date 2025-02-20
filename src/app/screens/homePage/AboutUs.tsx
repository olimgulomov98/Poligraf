import { Box, Button, Stack, Typography } from "@mui/material";
import { GoArrowRight } from "react-icons/go";

export default function AboutUs() {
  return (
    <Stack className={"about-us"}>
      <Stack className={"about-left"}>
        <Typography variant="h1">О Нас</Typography>
        <Typography variant="h3">
          Poligraf Extra — ваш надежный партнер с <br /> 2009 года!
        </Typography>
        <Typography variant="body2">
          Компания "Poligraf Extra" начала свою деятельность в 2009 <br /> году
          и с тех пор заняла особое место в сердцах наших <br /> клиентов. Мы
          стремимся к совершенству в каждом проекте, <br /> предоставляя
          качественные решения и безупречный сервис.
        </Typography>
        <Typography variant="body2">
          Наша миссия — удовлетворять потребности клиентов, <br /> предлагая
          продукцию и услуги, соответствующие самым <br /> высоким стандартам.
          Нам доверяют, потому что мы ценим <br /> качество, надежность и
          профессионализм.
        </Typography>
        <Button
          variant="contained"
          className={"about-btn"}
          endIcon={<GoArrowRight className="arrowRight-icon" />}
        >
          Узнать больше
        </Button>
      </Stack>
      <Stack className={"about-right"}>
        <Box className={"title"}>
          <Typography variant="h3">Руководители</Typography>
        </Box>
        <Stack className={"content-frame"}>
          <Box>
            <img
              src="/img/person-icon.png"
              alt=""
              width={"111px"}
              height={"111px"}
            />
          </Box>
          <Box>
            <h4>Abror Ibrokhimov</h4>
            <p>
              Предприятие “Poligraf Extra” начало свою деятельность в 2009 году.
            </p>
          </Box>
        </Stack>
        <Stack className={"content-frame"}>
          <Box>
            <img
              src="/img/person-icon.png"
              alt=""
              width={"111px"}
              height={"111px"}
            />
          </Box>
          <Box>
            <Typography variant="h4">Abror Ibrokhimov</Typography>
            <Typography variant="body2">
              Предприятие “Poligraf Extra” начало свою деятельность в 2009 году.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
