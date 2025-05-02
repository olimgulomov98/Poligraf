import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const portfolioItems = [
  {
    img: "/img/products/Asssunna-Ala-diabet.jpg",
    title: "As sunna Ala diabet",
    desc: "Каробка, картон дизайн",
  },
  {
    img: "/img/products/AREX-OTTOCENTO.jpg",
    title: "Arex Ottocento",
    desc: "Каробка, картон дизайн",
  },
  {
    img: "/img/products/AREX-TRAVERTIN.jpg",
    title: "Arex Travertin",
    desc: "Каробка, картон дизайн",
  },
  {
    img: "/img/products/Bos-Kos-Katalog.jpg",
    title: "Bos-Kos Katalog",
    desc: "Каробка, картон дизайн",
  },
  {
    img: "/img/products/Fazman-katta-sumka.jpg",
    title: "Fazman katta sumka",
    desc: "Каробка, картон дизайн",
  },
  {
    img: "/img/products/Hydro-plast-sumka.jpg",
    title: "Hydro plast sumka",
    desc: "Каробка, картон дизайн",
  },
];

export default function Portfolio() {
  const navigate = useNavigate();
  const { t }: { t: (key: string) => string } = useTranslation("main");

  /** HANDLERS **/

  const portfolioHandler = () => {
    navigate("/portfolio");
    window.scrollTo(0, 0);
  };
  return (
    <Stack className={"portfolio"}>
      <Typography variant="h1">{t("Портфолио")}</Typography>
      <Grid container spacing={4} justifyContent={"center"}>
        {portfolioItems
          .slice(0, window.innerWidth <= 450 ? 3 : portfolioItems.length)
          .map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {" "}
              <Box className={"portfolio-box"}>
                <Box className={"p-box-img"}>
                  <img
                    src={item.img}
                    alt={item.title}
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
                <Typography variant="h3">{item.title}</Typography>
                <Typography variant="body2">{t(item.desc)}</Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
      <Button
        variant="contained"
        className={"portfolio-btn"}
        endIcon={<GoArrowRight className="arrowRight-icon" />}
        onClick={portfolioHandler}
      >
        {t("Посмотреть все")}
      </Button>
    </Stack>
  );
}
