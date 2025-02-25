import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import { GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const navigate = useNavigate();
  const { t }: { t: (key: string) => string } = useTranslation("main");

  /** HANDLERS **/

  const aboutHandler = () => {
    navigate("/about-us");
    window.scrollTo(0, 0);
  };

  return (
    <Stack className={"about-us"}>
      <Stack className={"about-left"}>
        <Typography variant="h1">{t("О Нас")}</Typography>
        <Typography variant="h3">
          {t("Poligraf Extra — ваш надежный партнер с 2009 года!")}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "16px" }}>
          {t(
            "Компания Poligraf Extra начала свою деятельность в 2009 году и с тех пор заняла особое место в сердцах наших клиентов. Мы стремимся к совершенству в каждом проекте, предоставляя качественные решения и безупречный сервис."
          )}
        </Typography>
        <Typography variant="body2">
          {t(
            "Наша миссия — удовлетворять потребности клиентов, предлагая продукцию и услуги, соответствующие самым высоким стандартам. Нам доверяют, потому что мы ценим качество, надежность и профессионализм."
          )}
        </Typography>
        <Button
          variant="contained"
          className={"about-btn"}
          endIcon={<GoArrowRight className="arrowRight-icon" />}
          onClick={aboutHandler}
        >
          {t("Узнать больше")}
        </Button>
      </Stack>
      <Stack className={"about-right"}>
        <Box className={"title"}>
          <Typography variant="h3">{t("Руководители")}</Typography>
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
              {t(
                "Предприятие Poligraf Extra начало свою деятельность в 2009 году."
              )}
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
              {t(
                "Предприятие Poligraf Extra начало свою деятельность в 2009 году."
              )}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
