import { Box, Button, Stack, Typography } from "@mui/material";
import { GoArrowRight } from "react-icons/go";

export default function Footer() {
  return (
    <Stack className={"footer"}>
      <Box className={"footer-logo"}>
        <img src="/img/poligrafLogo1.png" alt="" />
      </Box>
      <Stack className={"footer-frame"}>
        <Box>
          <Typography variant="h4">
            Узбекистон, Наманган шахар, Косонсой куча 22 уй
          </Typography>

          <Typography variant="h3">@poligraf_extra</Typography>

          <Button
            variant="contained"
            className={"footer-btn"}
            endIcon={<GoArrowRight className="arrowRight-icon" />}
          >
            Связаться
          </Button>
        </Box>
        <Box>
          <Stack className={"footer-boxes"}>
            <Box className={"footer-box"}>
              <img src="/icons/instagram.svg" alt="instagram" />
            </Box>
            <Box className={"footer-box"}>
              <img src="/icons/youtube.svg" alt="youtube" />
            </Box>
            <Box className={"footer-box"}>
              <img src="/icons/telegram.svg" alt="telegram" />
            </Box>
            <Box className={"footer-box"}>
              <img src="/icons/facebook.svg" alt="facebook" />
            </Box>
          </Stack>

          <Typography variant="h2">+99890 552 50 50</Typography>

          <Box className={"email-frame"}>
            <img src="/icons/email.svg" alt="email" />
            <Typography variant="h5">poligrafextra@gmail.com</Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}
