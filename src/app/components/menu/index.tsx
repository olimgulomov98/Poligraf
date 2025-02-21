import {
  Modal,
  Box,
  Button,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { GoArrowRight } from "react-icons/go";

export default function ContactModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Stack className={"modal"}>
        <Box className={"modal-navbar"}>
          <Typography variant="h6" className={"title"}>
            Стать клиентом
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon className={"close-icon"} />
          </IconButton>
        </Box>

        <Typography variant="body2" className={"modal-paragraph"}>
          Наши клиенты получают наилучшие результаты, когда наша команда
          занимается их полиграфическими проектами в течение длительного
          времени, обеспечивая качество и надежность
        </Typography>

        <Box className={"button-frame"}>
          <Button variant="contained" className={"btn telegram"}>
            <img src="/icons/telegram1.svg" alt="" />
            <span style={{ marginTop: "3px" }}>Telegram</span>
          </Button>
          <Button variant="contained" className={"btn phone"}>
            <img src="/icons/call.svg" alt="" />
            <span style={{ marginTop: "3px" }}>+998 90 552 50 50</span>
          </Button>
        </Box>

        <form className="custom-form">
          <div className="form-group">
            <label>Имя</label>
            <input type="text" placeholder="John" />
          </div>

          <div className="form-group">
            <label>Номер телефона</label>
            <input type="text" placeholder="+998 000 00 00" />
          </div>

          <div className="form-group">
            <label>Почта</label>
            <input type="email" placeholder="john@email.com" />
          </div>

          <div className="form-group">
            <label>LinkedIn (необязательно)</label>
            <input type="text" placeholder="URL" />
          </div>
        </form>

        <Button
          variant="contained"
          className={"modal-btn"}
          endIcon={<GoArrowRight className={"arrowRight-icon"} />}
        >
          Отправить
        </Button>
      </Stack>
    </Modal>
  );
}
