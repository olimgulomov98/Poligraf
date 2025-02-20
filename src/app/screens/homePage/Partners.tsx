import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";

const partnersItems = [
  { img: "/img/vivo.png" },
  { img: "/img/zikki.png" },
  { img: "/img/adim.png" },
  { img: "/img/zaminmix.png" },
  { img: "/img/almaz.png" },
  { img: "/img/dori.png" },
  { img: "/img/arex.png" },
  { img: "/img/atx.png" },
  { img: "/img/best.png" },
  { img: "/img/gtg.png" },
  { img: "/img/gtg.png" },
  { img: "/img/gtg.png" },
];

const itemsPerPage = 10;
const totalPages = Math.ceil(partnersItems.length / itemsPerPage);

export default function Partners() {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <Stack className="partners">
      <Typography variant="h1">Партнёры</Typography>

      <Stack className="partners-frame">
        {partnersItems
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
