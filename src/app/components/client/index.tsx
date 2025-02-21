import { Button, Stack, Typography } from "@mui/material";
import { GoArrowRight } from "react-icons/go";

export default function Client() {
  return (
    <Stack className="client">
      <Typography variant="h1">Станьте Клиентом</Typography>
      <Stack className="client-frame">
        <Stack className="client-left">
          <iframe
            src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=71.650331%2C41.014719&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0NTYzMTA0MTcxEjdPyrt6YmVraXN0b24sIE5hbWFuZ2FuLCBHb8q7emFsLCBLb3NvbnNveSBrb8q7Y2hhc2ksIDIyIgoN20yPQhVJDyRC&source=mapframe&um=constructor%3Ac67e88b6c96a4d4f97113d177a34a4a38f48f14245b4b4c42d05c15b94b0c345&utm_source=mapframe&z=18.1"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Yandex Map - 41.014926, 71.650112"
          ></iframe>
        </Stack>
        <Stack className={"client-right"}>
          <form action={"#"} method={"POST"}>
            <div className={"client-input-box"}>
              <label>Имя</label>
              <input type={"text"} placeholder="John" />
            </div>
            <div className={"client-input-box"}>
              <label>Номер телефона</label>
              <input type={"text"} placeholder="+998 000 00 00" />
            </div>
            <div className={"client-input-box"}>
              <label>Почта</label>
              <input type={"email"} placeholder="john@email.com" />
            </div>
            <div className={"client-input-box"}>
              <label>LinkedIn (необязательно)</label>
              <input type={"text"} placeholder="URL" />
            </div>
            <Button
              variant="contained"
              className="client-btn"
              endIcon={<GoArrowRight className="arrowRight-icon" />}
            >
              Отправить
            </Button>
          </form>
        </Stack>
      </Stack>
    </Stack>
  );
}
