import { useState } from "react";
import { Modal, Box, Button, Typography, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { GoArrowRight } from "react-icons/go";
import SuccessModal from "./SuccessModal";

export default function ContactModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    linkedin: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    linkedin: "",
  });

  const [success, setSuccess] = useState(false); // Yangi modalni boshqarish uchun

  const validate = () => {
    let newErrors = { name: "", phone: "", email: "", linkedin: "" };

    if (!formData.name.trim()) newErrors.name = "Имя обязательно!";
    if (!/^\+998 \d{2} \d{3} \d{2} \d{2}$/.test(formData.phone))
      newErrors.phone = "Введите корректный номер (+998 XX XXX XX XX)";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Введите корректный email!";
    if (formData.linkedin.trim() === "")
      newErrors.linkedin = "LinkedIn обязателен!";

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setTimeout(() => {
        console.log("Fake API: Ma'lumotlar yuborildi", formData);
        setSuccess(true);
        handleClose();
      }, 1000);
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Stack className={"modal"}>
          <Box className={"modal-navbar"}>
            <Typography variant="h6" className={"title"}>
              Стать клиентом
            </Typography>
            <Box onClick={handleClose}>
              <CloseIcon className={"close-icon"} />
            </Box>
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

          <form className="custom-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Имя</label>
              <input
                type="text"
                placeholder="John"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={errors.name ? "error-border" : ""}
              />
            </div>

            <div className="form-group">
              <label>Номер телефона</label>
              <input
                type="text"
                placeholder="+998 00 000 00 00"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={errors.phone ? "error-border" : ""}
              />
            </div>

            <div className="form-group">
              <label>Почта</label>
              <input
                type="email"
                placeholder="john@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={errors.email ? "error-border" : ""}
              />
            </div>

            <div className="form-group">
              <label>LinkedIn (обязательно)</label>
              <input
                type="text"
                placeholder="URL"
                value={formData.linkedin}
                onChange={(e) =>
                  setFormData({ ...formData, linkedin: e.target.value })
                }
                className={errors.linkedin ? "error-border" : ""}
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              className={"modal-btn"}
              endIcon={<GoArrowRight className={"arrowRight-icon"} />}
            >
              Отправить
            </Button>
          </form>
        </Stack>
      </Modal>

      {/* Yangi modal */}
      <SuccessModal open={success} handleClose={() => setSuccess(false)} />
    </>
  );
}
