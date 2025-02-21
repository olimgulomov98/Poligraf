import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  /** HANDLERS **/

  const servicesHandler = (serviceType: string) => {
    navigate(`/services/${serviceType}`);
    window.scrollTo(0, 0);
  };

  return (
    <Stack className={"services"}>
      <Typography variant="h1">Наши Услуги</Typography>
      <Stack className={"services-frame"}>
        <Box className={"box-frame"}>
          <Box className={"box-img"}>
            <img
              src="/img/printer.png"
              alt="printer"
              width={"40px"}
              height={"40px"}
            />
          </Box>
          <Typography variant="h3">Цивровая печать</Typography>
          <Typography variant="body2">
            Цифровая печать – это технология прямого нанесения красок на
            запечатываемую поверхность без применения постоянных печатных форм.
          </Typography>
          <Button
            variant="contained"
            className={"box-btn"}
            onClick={() => servicesHandler("digital")}
          >
            Подробнее
          </Button>
        </Box>
        <Box className={"box-frame"}>
          <Box className={"box-img"}>
            <img
              src="/img/colored-printer.png"
              alt="colored-printer"
              width={"40px"}
              height={"40px"}
            />
          </Box>
          <Typography variant="h3">Офсетная печать</Typography>
          <Typography variant="body2">
            Офсетная печать, постпечать, полиграфические возможности,
            полноцветное изображение, высокое качество
          </Typography>
          <Button
            variant="contained"
            className={"box-btn"}
            onClick={() => servicesHandler("offset")}
          >
            Подробнее
          </Button>
        </Box>
        <Box className={"box-frame"}>
          {" "}
          <Box className={"box-img"}>
            <img
              src="/img/cutting-plotter.png"
              alt="cutting-plotter"
              width={"40px"}
              height={"40px"}
            />
          </Box>
          <Typography variant="h3">Флоксографическая печать</Typography>
          <Typography variant="body2">
            Флексографическая печать — универсальное решение для упаковки,
            этикетки и массового производства. Высокая скорость, экономичность и
            качество!
          </Typography>
          <Button
            variant="contained"
            className={"box-btn"}
            onClick={() => servicesHandler("flex")}
          >
            Подробнее
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}
