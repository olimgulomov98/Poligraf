import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

interface ChosenPortfolioProps {
  portfolioItems: {
    id: number;
    img: string;
    title: string;
    desc: string;
    works?: { img: string; title: string; desc: string }[];
  }[];
}

export default function ChosenPortfolio({
  portfolioItems,
}: ChosenPortfolioProps) {
  const { portfolioId } = useParams();
  const { t }: { t: (key: string) => string } = useTranslation("main");

  if (!portfolioItems || portfolioItems.length === 0) {
    return <h2>{t("Список портфолио не загружен!")}</h2>;
  }

  const chosenItem = portfolioItems.find(
    (item) => item.id === Number(portfolioId)
  );

  if (!chosenItem) return <h2>{t("Портфолио не найдено!")}</h2>;

  return (
    <Stack className="chosenPortfolio-frame">
      <Box className={"main-img"}>
        <img src={chosenItem.img} alt={chosenItem.title} />
      </Box>

      <Stack className={"main-content"}>
        <Typography variant="h1">{t("Сделанные Работы")}</Typography>
        <Stack className={"boxes-frame"}>
          {chosenItem.works?.map((item, index) => (
            <Box key={index}>
              <Box className={"box-img"}>
                <img src={item.img} alt="" />
              </Box>
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="body2">{t(item.desc)}</Typography>
            </Box>
          ))}
        </Stack>
        <Box className={"main-parag"}>
          {t("Выполненные работы для Компании")}:
          <p>
            {t("Полиграфическая продукция")}:{" "}
            <span>
              {t(
                "Мы разработали и напечатали качественную полиграфическую продукцию, которая помогает компании эффективно продвигать свои товары и услуги. В рамках сотрудничества были изготовлены каталоги, буклеты, визитки, рекламные плакаты и упаковочные материалы с уникальным дизайном."
              )}
            </span>
          </p>
          <p>
            {t("Брендирование")}:{" "}
            <span>
              {t(
                "Мы помогли компании создать единый стиль, разработав фирменную айдентику для печатной продукции. Это включает в себя дизайн логотипов, корпоративных цветов и шаблонов для рекламных материалов."
              )}
            </span>
          </p>
          <p>
            {t("Оперативная печать и доставка")}:{" "}
            <span>
              {t(
                "Благодаря современным технологиям печати и налаженной логистике, компания получила все материалы в кратчайшие сроки. Мы также предоставили услугу персонализированной печати, что позволило адаптировать продукцию под разные маркетинговые кампании."
              )}
            </span>
          </p>
          <p>
            <span>
              {t(
                "Эти решения позволяют Компании эффективно взаимодействовать с клиентами, повышать узнаваемость бренда и предоставлять своим партнерам качественную печатную продукцию для бизнеса"
              )}
              .
            </span>
          </p>
        </Box>
      </Stack>
    </Stack>
  );
}
