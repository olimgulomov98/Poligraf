import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const portfolioItems = [
  {
    img: "/img/karton-karobka1.png",
    title: "Spring Pharmaceutic",
    desc: "Каробка, картон дизайн",
  },
  {
    img: "/img/karton-karobka2.png",
    title: "Spring Pharmaceutic",
    desc: "Каробка, картон дизайн",
  },
  {
    img: "/img/karton-karobka3.png",
    title: "Spring Pharmaceutic",
    desc: "Каробка, картон дизайн",
  },
  {
    img: "/img/karton-karobka4.png",
    title: "Spring Pharmaceutic",
    desc: "Каробка, картон дизайн",
  },
  {
    img: "/img/karton-karobka5.png",
    title: "Spring Pharmaceutic",
    desc: "Каробка, картон дизайн",
  },
  {
    img: "/img/karton-karobka6.png",
    title: "Spring Pharmaceutic",
    desc: "Каробка, картон дизайн",
  },
];

export default function Portfolio() {
  const navigate = useNavigate();

  /** HANDLERS **/

  const portfolioHandler = () => {
    navigate("/portfolio");
    window.scrollTo(0, 0);
  };
  return (
    <Stack className={"portfolio"}>
      <Typography variant="h1">Портфолио</Typography>
      <Grid container spacing={4} justifyContent={"center"}>
        {portfolioItems.map((item, index) => (
          <Grid item md={4} key={index}>
            <Box className={"portfolio-box"}>
              <Box className={"p-box-img"}>
                <img src={item.img} alt={item.title} />
              </Box>
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="body2">{item.desc}</Typography>
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
        Посмотреть все
      </Button>
    </Stack>
  );
}
