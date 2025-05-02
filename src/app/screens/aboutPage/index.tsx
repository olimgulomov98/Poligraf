import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { portfolioItems } from "../../../assets/common";
import "../../../css/about.css";

const faqs = [
  {
    question: "Какие виды полиграфической продукции вы предлагаете?",
    answer: "Ответ на этот вопрос...",
  },
  {
    question: "Можно ли заказать дизайн у вас?",
    answer:
      "Да, у нас есть профессиональные дизайнеры, которые помогут разработать уникальный макет с учетом ваших пожеланий и фирменного стиля.",
  },
  {
    question: "Какой минимальный тираж можно заказать?",
    answer: "Минимальный тираж - 10 единиц.",
  },
  {
    question: "Как долго выполняется заказ?",
    answer: "Обычно выполнение заказа занимает от 3 до 7 дней.",
  },
  {
    question: "Какие файлы нужны для печати?",
    answer: "Мы принимаем файлы в форматах PDF, PNG, JPEG.",
  },
  {
    question: "Можно ли заказать срочное изготовление?",
    answer:
      "Да, мы можем выполнить заказ в срочном порядке за дополнительную плату.",
  },
  {
    question: "Доставляете ли вы продукцию?",
    answer: "Да, у нас есть доставка по всей стране.",
  },
  {
    question: "Какие способы оплаты доступны?",
    answer: "Мы принимаем оплату через банковские карты, PayPal и наличными.",
  },
];

export default function AboutPage() {
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState<number | false>(false);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const { t }: { t: (key: string) => string } = useTranslation("main");

  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 450) {
        setItemsPerPage(15);
      } else {
        setItemsPerPage(25);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages || 1);
    }
  }, [totalPages, page]);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleChange =
    (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Stack className={"about-page"}>
      <Typography variant="h1" className={"title"}>
        {t("Яркая полиграфия для вашего успеха")}!
      </Typography>
      <Typography variant="body2" className={"paragraph p-2"}>
        {t(
          "Мы создаем инновационные полиграфические решения, которые помогают брендам выделяться. Совмещая передовые технологии и опыт, мы предлагаем клиентам уникальную печатную продукцию, соответствующую самым высоким стандартам."
        )}
      </Typography>

      {/* Numbers */}
      <Stack className={"numbers"}>
        <Typography variant="h1">{t("Наши Реальные Цифры")}</Typography>
        <Stack className={"numbers-frame"}>
          <Box className={"box-frame"}>
            <Typography variant="h3">{t("Команда экспертов")}</Typography>
            <Typography variant="body2">100+</Typography>
          </Box>
          <Box className={"box-frame"}>
            <Typography variant="h3">{t("Успешных проектов")}</Typography>
            <Typography variant="body2">200+</Typography>
          </Box>
          <Box className={"box-frame"}>
            <Typography variant="h3">
              {t("Страны с которыми мы работаем")}
            </Typography>
            <Typography variant="body2">10+</Typography>
          </Box>
        </Stack>
      </Stack>

      {/* Values */}
      <Stack className={"values"}>
        <Typography variant="h1">{t("Наши ценности")}</Typography>
        <Stack className={"values-frame"}>
          <Box className={"box-frame"}>
            <Typography variant="h3">{t("Счастья всех")}</Typography>
            <Typography variant="body2" className={"box-parag box-parag1"}>
              {t("Создаём решения для счастья каждого.")}
            </Typography>
            <Box className={"box-img"}>
              <img src="/icons/namaste.svg" alt="namaste" />
            </Box>
          </Box>
          <Box className={"box-frame"}>
            <Typography variant="h3">{t("Качество")}</Typography>
            <Typography variant="body2" className={"box-parag"}>
              {t("Стремление к совершенству в каждом элементе.")}
            </Typography>
            <Box className={"box-img"}>
              <img src="/icons/burn.svg" alt="burn" />
            </Box>
          </Box>
          <Box className={"box-frame"}>
            <Typography variant="h3">{t("Скорость")}</Typography>
            <Typography variant="body2" className={"box-parag"}>
              {t("Быстрые и эффективные решения для вашего успеха.")}
            </Typography>
            <Box className={"box-img"}>
              <img src="/icons/firecracke.svg" alt="firecracke" />
            </Box>
          </Box>
        </Stack>
      </Stack>

      {/* Partners */}
      <Stack className="partners">
        <Typography variant="h1">{t("Партнёры")}</Typography>

        <Stack className="partners-frame">
          {portfolioItems
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((item, index) => (
              <Box className="box-frame" key={index}>
                <img src={item.img} alt="" />
              </Box>
            ))}
        </Stack>
        <Stack className={"pagination-section"}>
          <Box className={"pagination-arrow"} onClick={handlePrev}>
            <TbArrowNarrowLeft className={"arrow"} />
          </Box>
          <Box className={"pagination-arrow"} onClick={handleNext}>
            <TbArrowNarrowRight className={"arrow"} />
          </Box>
        </Stack>
      </Stack>

      {/* Questions */}
      <Stack className={"questions"}>
        <Typography variant="h1">{t("Часто Задаваемые Вопросы")}</Typography>
        <Stack className={"questions-frame"}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              className={"box-frame"}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                padding: "8px 24px",
                backgroundColor: expanded === index ? "#fff" : "#f9f9f9",
                borderRadius: "16px",
                "&:before": { display: "none" },
                "@media (max-width: 450px)": {
                  padding: "6px 9px",
                  margin: 0,
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === index ? (
                    <RemoveIcon className={"expand-icon"} />
                  ) : (
                    <AddIcon className={"expand-icon"} />
                  )
                }
                sx={{
                  borderBottom:
                    expanded === index ? "2px solid #e8e8e8" : "none",
                  borderRadius: "16px",
                  padding: 0,
                  margin: 0,
                  minHeight: 0,
                  borderBottomLeftRadius: expanded === index ? "0" : "16px",
                  borderBottomRightRadius: expanded === index ? "0" : "16px",
                  "& .MuiAccordionSummary-content": {
                    margin: "0 !important",
                  },
                  "@media (max-width: 450px)": {
                    minHeight: "0px",
                  },
                  "&.Mui-expanded": {
                    minHeight: "64px",
                    "@media (max-width: 450px)": {
                      minHeight: "0px",
                      padding: "6px 9px",
                    },
                  },
                }}
              >
                <Typography variant="h3" sx={{ margin: 0 }}>
                  {t(faq.question)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#fff",
                  padding: "20px 0 12px 0",
                  "@media (max-width: 450px)": {
                    padding: "6px 9px 6px 9px !important",
                  },
                }}
              >
                <Typography variant="h4">{t(faq.answer)}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
