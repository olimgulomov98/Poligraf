import { Box, Button, Stack, Typography } from "@mui/material";
import { GoArrowRight } from "react-icons/go";
import { useHistory } from "react-router-dom";

interface PortfolioProps {
  portfolioItems: {
    id: number;
    img: string;
    title: string;
    desc: string;
  }[];
}

export default function Portfolio({ portfolioItems }: PortfolioProps) {
  const history = useHistory();

  /** HANDLERS **/

  const choosePortfolioHandler = (id: number) => {
    history.push(`/portfolio/${id}`);
  };

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
        {portfolioItems.map((item, index) => {
          return (
            <Box
              className={"portfolio-box"}
              key={index}
              onClick={() => choosePortfolioHandler(item.id)}
            >
              <Box className={"box-img"}>
                <img src={item.img} alt="" />
              </Box>
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="body2">{item.desc}</Typography>
            </Box>
          );
        })}
      </Stack>

      <Button
        variant="contained"
        className={"portfolio-btn"}
        endIcon={<GoArrowRight className="arrowRight-icon" />}
      >
        Показать ещё
      </Button>
    </Stack>
  );
}
