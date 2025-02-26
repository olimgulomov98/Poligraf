import { Box, Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();
  const { t }: { t: (key: string) => string } = useTranslation("main");

  /** HANDLERS **/

  const servicesHandler = (serviceType: string) => {
    navigate(`/services/${serviceType}`);
    window.scrollTo(0, 0);
  };

  return (
    <Stack className={"services"}>
      <Typography variant="h1">{t("Наши Услуги")}</Typography>
      <Stack className={"services-frame"}>
        <Box className={"box-frame"}>
          <Box className={"box-img"}>
            <img
              src="/icons/printer.svg"
              alt="printer"
              width={"40px"}
              height={"40px"}
            />
          </Box>
          <Typography variant="h3">{t("Цивровая печать")}</Typography>
          <Typography variant="body2">
            {t(
              "Цифровая печать – это технология прямого нанесения красок на запечатываемую поверхность без применения постоянных печатных форм."
            )}
          </Typography>
          <Button
            variant="contained"
            className={"box-btn"}
            onClick={() => servicesHandler("digital")}
          >
            {t("Подробнее")}
          </Button>
        </Box>
        <Box className={"box-frame"}>
          <Box className={"box-img"}>
            <img
              src="/icons/colored-printer.svg"
              alt="colored-printer"
              width={"40px"}
              height={"40px"}
            />
          </Box>
          <Typography variant="h3">{t("Офсетная печать")}</Typography>
          <Typography variant="body2">
            {t(
              "Офсетная печать, постпечать, полиграфические возможности, полноцветное изображение, высокое качество"
            )}
          </Typography>
          <Button
            variant="contained"
            className={"box-btn"}
            onClick={() => servicesHandler("offset")}
          >
            {t("Подробнее")}
          </Button>
        </Box>
        <Box className={"box-frame"}>
          {" "}
          <Box className={"box-img"}>
            <img
              src="/icons/cutting-plotter.svg"
              alt="cutting-plotter"
              width={"40px"}
              height={"40px"}
            />
          </Box>
          <Typography variant="h3">{t("Флоксографическая печать")}</Typography>
          <Typography variant="body2">
            {t(
              "Флексографическая печать — универсальное решение для упаковки, этикетки и массового производства. Высокая скорость, экономичность и качество!"
            )}
          </Typography>
          <Button
            variant="contained"
            className={"box-btn"}
            onClick={() => servicesHandler("flex")}
          >
            {t("Подробнее")}
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}
