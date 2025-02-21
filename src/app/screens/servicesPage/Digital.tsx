import { Box, Stack, Typography } from "@mui/material";

export default function Digital() {
  return (
    <Stack className={"printing"}>
      <Typography variant="h1" className={"title"}>
        Цивровая печать
      </Typography>
      <Typography variant="body2" className={"paragraph"}>
        Цифровая печать – это технология прямого нанесения красок на
        <br />
        запечатываемую поверхность без применения постоянных печатных форм.
      </Typography>

      <Stack className={"boxes-container"}>
        <Stack className={"boxes-frame"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/uv-printing-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">Цифровая печать</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              это технология прямого нанесения красок на запечатываемую
              поверхность без применения постоянных печатных форм. Позволяет
              изготавливать малые тиражные продукции в полиграфии.
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame second"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img
                src="/icons/negijet-konica-flex-printing-machine.svg"
                alt=""
              />
            </Box>
            <Typography variant="h3">Современные технологии печати</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              объединяет в себе технологии, которые позволяют воспроизвести
              текст и изображения электронного формата, не прибегая к формным
              процессам. Технология прямого нанесения красок дешевая, что
              способствует повышению ее рентабельности в выгоду.
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame fourth"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/ctcp-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">Экономичная технология печати</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Технология прямого нанесения красок дешевая, что способствует
              повышению ее рентабельности в выгоду.
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame fourth"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/ctp-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">Цифровая печать в дизайне</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Цифровая печать широко используется в оформлении интерьеров и
              дизайне. Этот вариант незаменим для широкоформатной печати
              наружной рекламы.
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame seventh"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/industrial-generator.svg" alt="" />
            </Box>
            <Typography variant="h3">Широкоформатная печать</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Позволяет изготавливать качественные и привлекающие внимание
              вывески, плакаты для выставок и ярмарок. Реклама больших форматов
              печатается в разрешении 150-360 dpi. Готовое изделие ламинируется
              для защиты от выгорания на солнце и механических повреждений.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
