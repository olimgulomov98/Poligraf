import { Box, Stack, Typography } from "@mui/material";

const flexItems = [
  {
    img: "/img/senupar.png",
    title: "Каробка, картон дизайн",
  },
  {
    img: "/img/diazolin.png",
    title: "Каробка, картон дизайн",
  },
  {
    img: "/img/atsiklovir.png",
    title: "Каробка, картон дизайн",
  },
  {
    img: "/img/trexopal.png",
    title: "Каробка, картон дизайн",
  },
  {
    img: "/img/karton-karobka6.png",
    title: "Каробка, картон дизайн",
  },
  {
    img: "/img/karton-karobka4.png",
    title: "Каробка, картон дизайн",
  },
  {
    img: "/img/karton-karobka3.png",
    title: "Каробка, картон дизайн",
  },
  {
    img: "/img/karton-karobka5.png",
    title: "Каробка, картон дизайн",
  },
  {
    img: "/img/dustotolin.png",
    title: "Каробка, картон дизайн",
  },
];

export default function Flex() {
  return (
    <Stack className={"printing"}>
      <Typography variant="h1" className={"title t-2"}>
        Флоксографическая печать
      </Typography>
      <Typography variant="body2" className={"paragraph p-2"}>
        Флексографическая печать – в настоящее время один из самых
        распространенных способов нанесения изображений на упаковку и этикетку.
      </Typography>

      <Stack className={"boxes-container"}>
        <Stack className={"boxes-frame"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/oscillating-knife-cutting-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">Флексопечать основы</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Поняв принцип получения изображения в флексографической печати,
              легко можно разобраться и с другими видами полиграфии, например,
              офсетная и цифровая печать.
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame eighth"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/hydraulic-tube-bending-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">Возможности флексопечати</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Флексографическая печать позволяет расширить полиграфические
              возможности исполнения заказа. Прежде всего, это высокая скорость
              печати, экономичность и возможность работы с различными типами
              материалов. Флексография отлично подходит для печати на гибких
              упаковках, этикетках, пленках и картоне.
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame second"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/paper-cutter.svg" alt="" />
            </Box>
            <Typography variant="h3">Подготовка к флексопечати</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Оригинал-макет создается в электронном виде, затем изготавливаются
              печатные формы (клише). Следующий этап – их установка на печатное
              оборудование, настройка параметров печати и тестовый оттиск для
              проверки качества перед началом тиража.
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame third"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/laser-printing-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">Экономичность флексопечати</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Стоимость подготовительных работ в флексографической печати
              распределяется на весь тираж. Чем больше количество конечных
              изделий, тем ниже стоимость единицы продукции, что делает этот
              метод особенно выгодным для массового производства.
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame ninth"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/electric-saw-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">Основы флексопечати</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Эта статья знакомит с основами флексографической печати без
              углубленного анализа технологий, поэтому будет полезна, прежде
              всего, начинающим специалистам в полиграфии.
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Stack className={"products"}>
        <Typography variant="h1">Флоксографическая продукция</Typography>
        <Stack className={"products-frame"}>
          {flexItems.map((item, index) => (
            <Box className={"product-box"} key={index}>
              <Box className={"p-box-img"}>
                <img src={item.img} alt={item.title} />
              </Box>
              <Typography variant="h3">{item.title}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
