import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { GoArrowRight } from "react-icons/go";
import Swal from "sweetalert2";

export default function Client() {
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
      const botToken = "7465455715:AAEKOckH-IMRVu3xlMumd72ixAHKDJchqlE";
      const chatId = "-4792479785";
      const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

      try {
        const response = await fetch(telegramApiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
          }),
        });

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "✅ Ma'lumotlar yuborildi!",
            text: "Biz siz bilan tez orada bog'lanamiz.",
            timer: 3000,
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "❌ Xatolik yuz berdi!",
            text: "Iltimos, qayta urinib ko'ring.",
          });
        }
      } catch (error) {
        console.error("Xatolik:", error);
        Swal.fire({
          icon: "error",
          title: "❌ Ma'lumot yuborishda xatolik yuz berdi!",
          text: "Internet aloqangizni tekshirib ko'ring.",
        });
      }
    }
  };

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
          <form action={"#"} method={"POST"} onSubmit={handleSubmit} noValidate>
            <div className={"client-input-box"}>
              <label>Имя</label>
              <input
                type={"text"}
                placeholder="John"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={errors.name ? "error-border" : ""}
              />
            </div>
            <div className={"client-input-box"}>
              <label>Номер телефона</label>
              <input
                type="tel"
                placeholder="+998 00 000 00 00"
                value={formData.phone}
                onChange={handlePhoneChange}
                className={errors.phone ? "error-border" : ""}
              />
            </div>
            <div className={"client-input-box"}>
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
            <div className={"client-input-box"}>
              <label>LinkedIn (необязательно)</label>
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
