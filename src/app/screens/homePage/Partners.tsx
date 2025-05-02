import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { portfolioItems } from "../../../assets/common";

// const itemsPerPage = 10;
// const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

export default function Partners() {
  const [page, setPage] = useState(1);
  const { t }: { t: (key: string) => string } = useTranslation("main");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 450) {
        setItemsPerPage(9);
      } else {
        setItemsPerPage(10);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <Stack className="partners">
      <Typography variant="h1">{t("Клиенты")}</Typography>

      <Stack className="partners-frame">
        {portfolioItems
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((item, index) => (
            <Box className="box-frame" key={index}>
              <img src={item.img} alt="" />
            </Box>
          ))}
      </Stack>

      {/* Chap va o‘ng tugmalar */}
      <Stack className={"pagination-section"}>
        <Box className={"pagination-arrow"} onClick={handlePrev}>
          <TbArrowNarrowLeft className={"arrow"} />
        </Box>
        <Box className={"pagination-arrow"} onClick={handleNext}>
          <TbArrowNarrowRight className={"arrow"} />
        </Box>
      </Stack>
    </Stack>
  );
}
