import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import { GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";

interface PortfolioProps {
  portfolioItems: {
    id: number;
    category: string;
    img: string;
    title: string;
    desc: string;
  }[];
}

const categories = [
  "Популярные",
  "Фармацевтика",
  "Финанс",
  "Производство",
  "Гос. Проекты",
  "Рестораны",
  "Медицина",
  "Другие",
];

export default function Portfolio({ portfolioItems }: PortfolioProps) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Популярные");
  const { t }: { t: (key: string) => string } = useTranslation("main");

  /** HANDLERS **/

  const choosePortfolioHandler = (id: number) => {
    navigate(`/portfolio/${id}`);
  };

  // Kategoriya bo‘yicha filter qilish
  const filteredItems =
    selectedCategory === "Популярные"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <Stack className={"portfolio-frame"}>
      <Typography variant="h1" className={"title"}>
        {t("Портфолио")}
      </Typography>
      <Typography variant="body2" className={"paragraph p-2"}>
        {t(
          "Каждая наша работа — это гармония технологий, креатива и качества. Мы создаем упаковку и этикетки, которые выделяют ваш бренд."
        )}
      </Typography>
      <Stack className={"button-frame"}>
        {categories.map((category, index) => (
          <Button
            key={index}
            variant="contained"
            className="btn"
            onClick={() => setSelectedCategory(category)}
            sx={{
              background: selectedCategory === category ? "#181818" : "#f9f9f9",
              "&:hover": {
                background:
                  selectedCategory === category ? "#181818" : "#f9f9f9",
              },
              color: selectedCategory === category ? "#fff" : "#181818",
            }}
          >
            {t(category)}
          </Button>
        ))}
      </Stack>

      <Stack className={"portfolio-boxes"}>
        {filteredItems.map((item, index) => {
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
              <Typography variant="body2">{t(item.desc)}</Typography>
            </Box>
          );
        })}
      </Stack>

      {filteredItems.length === 0 && (
        <Typography variant="body2" className="no-results">
          {t("Ничего не найдено для выбранной категории.")}
        </Typography>
      )}

      <Button
        variant="contained"
        className={"portfolio-btn"}
        endIcon={<GoArrowRight className="arrowRight-icon" />}
      >
        {t("Показать ещё")}
      </Button>
    </Stack>
  );
}
