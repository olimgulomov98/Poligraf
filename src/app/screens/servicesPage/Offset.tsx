import { Box, Stack, Typography } from "@mui/material";

export default function Offset() {
  return (
    <Stack className={"printing"}>
      <Typography variant="h1" className={"title"}>
        Офсетная печать
      </Typography>
      <Typography variant="body2" className={"paragraph"}>
        Офсетная печать, в настоящий момент, наиболее распространенный способ
        <br />
        получения полноцветного изображения полиграфическим способом.
      </Typography>
      <Stack className={"boxes-container"}>
        <Stack className={"boxes-frame"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/hydraulic-paper-cutting-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">Принципы офсетной печати</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Поняв принцип получения изображения в офсетной печати, легко можно
              разобраться и с другими видами полиграфии, например, цифровая
              печать и т.п.
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame second"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/dishwasher.svg" alt="" />
            </Box>
            <Typography variant="h3">
              Офсетная печать и ее возможности
            </Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Офсетная печать позволяет расширить полиграфические возможности
              исполнения заказа. Прежде всего, это качественная передача всех
              цветов (CMYK) и полутонов (Panton), печать металлизированными
              красками, бронзирование металлическими порошками и т.п.
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame third"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/hydraulic-paper-cutting-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">Подготовка офсетного тиража</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Подготовительный этап офсетного тиража включает в себя несколько
              процессов (оригинал-макет монтируется на компьютере в электронном
              виде, затем выводится в виде фотоформ, следующий этап - их
              засветка и наладка оборудования под изготовленную форму).
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame fourth"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/liquid-filling-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">Экономия на тираже</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Стоимость подготовительных работ переносится на весь заказываемый
              тираж, чем больше будет количество конечных изделий, тем меньше
              соответственно будет стоимость.
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame fifth"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/wood-lathe-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">Основы офсетной печати</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Данная статья описывает общие принципы технологии офсетной печати
              без детального обзора процессов, поэтому будет полезна, в
              основном, новичкам в полиграфическом производстве.
            </Typography>
          </Box>
        </Stack>

        <Stack className={"boxes-frame sixth"}>
          <Box className={"box-left"}>
            <Box className={"box-img"}>
              <img src="/icons/sweater-knitting-machine.svg" alt="" />
            </Box>
            <Typography variant="h3">Материалы и обработка</Typography>
          </Box>
          <Box className={"box-right"}>
            <Typography variant="body2">
              Мы предлагаем Вам широкий выбор разнообразных материалов и бумаги
              и предоставляем услуги высококачественной посплечатной обработки:
              тиснение, фольгирование, конгрев, различные виды брошюровки,
              ламинирование, и многие другие, придающие печатным изделиям
              прочность и неповторимый вид.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
