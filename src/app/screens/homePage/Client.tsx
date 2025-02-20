import { Button, Stack, Typography } from "@mui/material";
import { GoArrowRight } from "react-icons/go";

export default function Client() {
  const mapUrl = `https://static-maps.yandex.ru/1.x/?ll=71.675,41.004&z=16&l=map&size=650,450&pt=71.675,41.004,pm2rdm`;

  return (
    <Stack className="client">
      <Typography variant="h1">Станьте Клиентом</Typography>
      <Stack className="client-frame">
        <Stack className="client-left">
          <img src={mapUrl} alt="Yandex Map" width={"100%"} height={"100%"} />
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
