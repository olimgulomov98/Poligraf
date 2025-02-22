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
  });

  const [success, setSuccess] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, ""); // Faqat raqamlarni saqlash
    if (numbers.startsWith("998")) {
      return `+998 ${numbers.slice(3, 5)} ${numbers.slice(
        5,
        8
      )} ${numbers.slice(8, 10)} ${numbers.slice(10, 12)}`.trim();
    }
    return "+998 ";
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) });
  };

  const validate = () => {
    let newErrors = { name: "", phone: "", email: "" };

    if (!formData.name.trim()) newErrors.name = "Имя обязательно!";
    if (!/^\+998 \d{2} \d{3} \d{2} \d{2}$/.test(formData.phone))
      newErrors.phone = "Введите корректный номер (+998 XX XXX XX XX)";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Введите корректный email!";

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      const cleanedPhone = formData.phone.replace(/\s+/g, "");

      const message = `📌 *Yangi Mijoz!* \n\n👤 *Ism:* ${formData.name}\n📞 *Telefon:* ${cleanedPhone}\n📧 *Email:* ${formData.email}\n🔗 *LinkedIn:* ${formData.linkedin}`;

      const botToken = "7465455715:AAEKOckH-IMRVu3xlMumd72ixAHKDJchqlE"; // O'zingizning bot tokeningizni kiriting
      const chatId = "-4792479785"; // O'zingizning chat_id yoki guruh_id ni kiriting

      const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

      try {
        await fetch(telegramApiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
          }),
        });

        console.log("Ma'lumotlar Telegram botga yuborildi!");
        setSuccess(true);
        handleClose();
      } catch (error) {
        console.error("Telegram botga yuborishda xatolik:", error);
      }
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
            <Button
              variant="contained"
              className={"btn telegram"}
              onClick={() =>
                window.open("https://t.me/poligrafextra", "_blank")
              }
            >
              <img src="/icons/telegram1.svg" alt="" />
              <span style={{ marginTop: "3px" }}>Telegram</span>
            </Button>
            <Button
              variant="contained"
              className={"btn phone"}
              onClick={() => (window.location.href = "tel:+998905525050")}
            >
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
                type="tel"
                placeholder="+998 00 000 00 00"
                value={formData.phone}
                onChange={handlePhoneChange}
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
