import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { offsetItems } from "../../../assets/common";

export default function Flex() {
  const { t }: { t: (key: string) => string } = useTranslation("main");
  return (
    <Stack className={"printing"}>
      <Typography variant="h1" className={"title t-2"}>
        {t("Флоксографическая печать")}
      </Typography>
      <Typography variant="body2" className={"paragraph p-2"}>
        {t(
          "Флексографическая печать – в настоящее время один из самых распространенных способов нанесения изображений на упаковку и этикетку."
        )}
      </Typography>

      <Stack className={"boxes-container"}>
        <Stack className={"boxes-frame"}>
          <Box className={"box-left flex-first"}>
            <Box className={"box-img"}>
              <img src="/icons/oscillating-knife-cutting-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">{t("Флексопечать основы")}</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              {t(
                "Поняв принцип получения изображения в флексографической печати, легко можно разобраться и с другими видами полиграфии, например, офсетная и цифровая печать."
              )}
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame eighth"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/hydraulic-tube-bending-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">
              {t("Возможности флексопечати")}
            </Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              {t(
                "Флексографическая печать позволяет расширить полиграфические возможности исполнения заказа. Прежде всего, это высокая скорость печати, экономичность и возможность работы с различными типами материалов. Флексография отлично подходит для печати на гибких упаковках, этикетках, пленках и картоне."
              )}
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame second"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/paper-cutter.svg" alt="" />
            </Box>
            <Typography variant="h3">
              {t("Подготовка к флексопечати")}
            </Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              {t(
                "Оригинал-макет создается в электронном виде, затем изготавливаются печатные формы (клише). Следующий этап – их установка на печатное оборудование, настройка параметров печати и тестовый оттиск для проверки качества перед началом тиража."
              )}
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame third need"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/laser-printing-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">
              {t("Экономичность флексопечати")}
            </Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              {t(
                "Стоимость подготовительных работ в флексографической печати распределяется на весь тираж. Чем больше количество конечных изделий, тем ниже стоимость единицы продукции, что делает этот метод особенно выгодным для массового производства."
              )}
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame ninth"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/electric-saw-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">{t("Основы флексопечати")}</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              {t(
                "Эта статья знакомит с основами флексографической печати без углубленного анализа технологий, поэтому будет полезна, прежде всего, начинающим специалистам в полиграфии."
              )}
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Stack className={"products"}>
        <Typography variant="h1">{t("Флоксографическая продукция")}</Typography>
        <Stack className={"products-frame"}>
          {offsetItems.map((item, index) => (
            <Box className={"product-box"} key={index}>
              <Box className={"p-box-img"}>
                <img
                  src={item.img}
                  alt={item.title}
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
              <Typography variant="h3">{t(item.title)}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
