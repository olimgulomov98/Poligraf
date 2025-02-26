import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  Menu,
  MenuItem,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { TbWorld } from "react-icons/tb";
import Swal from "sweetalert2";

export default function Navbar() {
  const navigate = useNavigate();
  const { t, i18n }: { t: (key: string) => string; i18n: any } =
    useTranslation("navbarFooter");

  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const [navbarLangAnchorEl, setNavbarLangAnchorEl] =
    useState<null | HTMLElement>(null);

  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

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

  /** HANDLERS **/

  const openServiceMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const closeServiceMenu = () => {
    setServicesAnchorEl(null);
  };

  const handleServiceClick = (service: string) => {
    navigate(`/services/${service}`);
    closeServiceMenu();
  };

  const openNavbarLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavbarLangAnchorEl(event.currentTarget);
  };

  const closeLanguageMenu = (lang?: "En" | "Ru" | "Uz") => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
    setNavbarLangAnchorEl(null);
  };

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
      const chatId = "152495758"; // O'zingizning chat_id yoki guruh_id ni kiriting
      const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

      // const chatId = "-4792479785";

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
          setFormData({ name: "", phone: "", email: "", linkedin: "" });
          handleClose();
          setOpen(false);
          Swal.fire({
            icon: "success",
            title: t("Данные отправлены!"),
            text: t("Мы свяжемся с вами в ближайшее время."),
            timer: 3000,
            showConfirmButton: false,
            customClass: {
              popup: "swal-high-zindex",
            },
            backdrop: `rgba(0,0,0,0.4)`,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: t("Произошла ошибка!"),
            text: t("Попробуйте еще раз."),
          });
        }
      } catch (error) {
        console.error("Xatolik:", error);
        Swal.fire({
          icon: "error",
          title: t("Произошла ошибка при отправке информации!"),
          text: t("Проверьте подключение к Интернету."),
        });
      }
    }
  };

  return (
    <Stack
      className={"navbar"}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#fff !important",
      }}
    >
      <Stack className="navbar-container">
        <Box sx={{ cursor: "pointer" }}>
          <a href="/">
            <img
              src="/icons/blackPeLogo.svg"
              alt="poligrafLogo"
              width="104px"
              height="57px"
            />
          </a>
        </Box>

        <Stack className="links">
          <Box className="hover-line">
            <NavLink to="/">{t("Главная")}</NavLink>
          </Box>
          <Box className="hover-line">
            <NavLink to="/portfolio">{t("Портфолио")}</NavLink>
          </Box>

          <Box className="hover-line" onClick={openServiceMenu}>
            <span className="uslugi-link">
              {t("Услуги")} <KeyboardArrowDownIcon fontSize="medium" />
            </span>
          </Box>

          <Menu
            anchorEl={servicesAnchorEl}
            open={Boolean(servicesAnchorEl)}
            onClose={closeServiceMenu}
            sx={{
              "& .MuiPaper-root": {
                border: "1px solid #e8e8e8",
                borderRadius: "5px",
                boxShadow: "none",
              },
              "& .MuiMenu-list": {
                paddingTop: "0px",
                paddingBottom: "0px",
              },
            }}
          >
            <MenuItem
              onClick={() => handleServiceClick("offset")}
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                "&:hover": { backgroundColor: "#f9f9f9" },
              }}
            >
              {t("Офсетная печать")}
            </MenuItem>
            <MenuItem
              onClick={() => handleServiceClick("digital")}
              sx={{
                borderTop: "1px solid #e8e8e8",
                borderBottom: "1px solid #e8e8e8",
                paddingTop: "10px",
                paddingBottom: "10px",
                "&:hover": { backgroundColor: "#f9f9f9" },
              }}
            >
              {t("Цифровая печать")}
            </MenuItem>
            <MenuItem
              onClick={() => handleServiceClick("flex")}
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                "&:hover": { backgroundColor: "#f9f9f9" },
              }}
            >
              {t("Флекс печать")}
            </MenuItem>
          </Menu>

          <Box className="hover-line">
            <NavLink to="/about-us">{t("О нас")}</NavLink>
          </Box>
        </Stack>

        <Stack className="navbar-right-frame">
          <Box className="navbar-lang" onClick={openNavbarLanguageMenu}>
            <TbWorld fontSize={"30px"} />
          </Box>

          <Menu
            anchorEl={navbarLangAnchorEl}
            open={Boolean(navbarLangAnchorEl)}
            onClose={() => closeLanguageMenu()}
            sx={{
              "& .MuiPaper-root": {
                width: "214px",
                height: "168px",
                border: "1px solid #e8e8e8",
                borderRadius: "8px",
                boxShadow: "none",
                marginTop: "15px",

                "@media (max-width: 450px)": {
                  width: "146px",
                  height: "147px",
                  borderRadius: "5px",
                  marginTop: "5px",
                },
              },
              "& .MuiMenu-list": {
                paddingTop: "0px",
                paddingBottom: "0px",
              },
            }}
          >
            <MenuItem
              onClick={() => closeLanguageMenu("En")}
              sx={{
                height: "56px",
                borderBottom: "1px solid #e8e8e8",
                columnGap: "10px",
                fontWeight: 500,
                fontSize: "20px",
                "@media (max-width: 450px)": {
                  height: "48px",
                  fontSize: "16px",
                  lineHeight: "16.55px",
                },
                "&:hover": { backgroundColor: "#f9f9f9" },
              }}
            >
              <Avatar
                src="/icons/enLogo.svg"
                alt="Русский"
                variant="square"
                sx={{
                  width: "30px",
                  height: "18px",
                  borderRadius: "3px",
                  "@media (max-width: 450px)": {
                    width: "18px",
                    height: "12px",
                  },
                }}
              />{" "}
              {t("Анг")}
            </MenuItem>
            <MenuItem
              onClick={() => closeLanguageMenu("Ru")}
              sx={{
                height: "56px",
                borderBottom: "1px solid #e8e8e8",
                columnGap: "10px",
                fontWeight: 500,
                fontSize: "20px",
                "@media (max-width: 450px)": {
                  height: "48px",
                  fontSize: "16px",
                  lineHeight: "16.55px",
                },
                "&:hover": { backgroundColor: "#f9f9f9" },
              }}
            >
              <Avatar
                src="/icons/ruLogo.svg"
                alt="Русский"
                variant="square"
                sx={{
                  width: "30px",
                  height: "30px",
                  "@media (max-width: 450px)": {
                    width: "18px",
                    height: "18px",
                  },
                }}
              />{" "}
              {t("Рус")}
            </MenuItem>
            <MenuItem
              onClick={() => closeLanguageMenu("Uz")}
              sx={{
                height: "56px",
                columnGap: "10px",
                fontSize: "20px",
                "@media (max-width: 450px)": {
                  height: "48px",
                  fontSize: "16px",
                  lineHeight: "16.55px",
                },
                "&:hover": { backgroundColor: "#f9f9f9" },
              }}
            >
              <Avatar
                src="/icons/uzLogo.svg"
                alt="Uzbek"
                variant="square"
                sx={{
                  width: "30px",
                  height: "30px",
                  "@media(max-width: 450px)": {
                    width: "18px",
                    height: "18px",
                  },
                }}
              />{" "}
              {t("Узб")}
            </MenuItem>
          </Menu>

          <Button
            variant="contained"
            className="navbar-btn"
            endIcon={<GoArrowRight />}
            onClick={handleOpen}
          >
            {t("Связаться")}
          </Button>

          <Box>
            <Box onClick={toggleDrawer(!open)} className={"drawer-btn"}>
              {open ? (
                <CloseIcon className={"close-icon"} />
              ) : (
                <img src="/icons/menu.svg" alt="menu" />
              )}
            </Box>

            {/* Drawer */}
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  position: "absolute",
                  top: "81px",
                  left: 0,
                  right: 0,
                  height: "calc(100vh - 81px)",
                  backgroundColor: "white",
                  padding: "20px",
                  boxShadow: "none",
                },
              }}
            >
              <Box
                sx={{
                  marginTop: "67px",
                  fontFamily: "Gilroy",
                  fontSize: "24px",
                  fontWeight: 500,
                  lineHeight: "38px",
                }}
              >
                <Box
                  sx={{
                    borderBottom: "1px solid #e8e8e8",
                    paddingBottom: "12px",
                  }}
                >
                  <NavLink
                    to="/"
                    style={{ textDecoration: "none", color: "#181818" }}
                    onClick={toggleDrawer(false)}
                  >
                    {t("Главная")}
                  </NavLink>
                </Box>
                <Box
                  sx={{ borderBottom: "1px solid #e8e8e8", padding: "12px 0" }}
                >
                  <NavLink
                    to="/portfolio"
                    style={{ textDecoration: "none", color: "#181818" }}
                    onClick={toggleDrawer(false)}
                  >
                    {t("Портфолио")}
                  </NavLink>
                </Box>

                <Box
                  sx={{ borderBottom: "1px solid #e8e8e8", padding: "12px 0" }}
                >
                  <NavLink
                    to="/services/offset"
                    style={{ textDecoration: "none", color: "#181818" }}
                    onClick={toggleDrawer(false)}
                  >
                    {t("Офсетная печать")}
                  </NavLink>
                </Box>
                <Box
                  sx={{ borderBottom: "1px solid #e8e8e8", padding: "12px 0" }}
                >
                  <NavLink
                    to="/services/digital"
                    style={{ textDecoration: "none", color: "#181818" }}
                    onClick={toggleDrawer(false)}
                  >
                    {t("Цифровая печать")}
                  </NavLink>
                </Box>
                <Box
                  sx={{ borderBottom: "1px solid #e8e8e8", padding: "12px 0" }}
                >
                  <NavLink
                    to="/services/flex"
                    style={{ textDecoration: "none", color: "#181818" }}
                    onClick={toggleDrawer(false)}
                  >
                    {t("Флекс печать")}
                  </NavLink>
                </Box>
                <Box
                  sx={{ borderBottom: "1px solid #e8e8e8", padding: "12px 0" }}
                >
                  <NavLink
                    to="/about-us"
                    style={{ textDecoration: "none", color: "#181818" }}
                    onClick={toggleDrawer(false)}
                  >
                    {t("О нас")}
                  </NavLink>
                </Box>

                <Button
                  variant="contained"
                  className="btn-2"
                  endIcon={<GoArrowRight />}
                  onClick={handleOpen}
                  sx={{
                    width: "200px",
                    height: "55px",
                    borderRadius: "12px",
                    backgroundColor: "#181818",
                    fontFamily: "Gilroy",
                    fontSize: "26px",
                    fontWeight: 500,
                    lineHeight: "38px",
                    color: "#fff",
                    textDecoration: "none",
                    textTransform: "none",
                    position: "absolute",
                    bottom: "50px",
                    "&:hover": { backgroundColor: "#181818" },
                    "&:active": { backgroundColor: "#181818" },
                    "&.Mui-focusVisible": { backgroundColor: "#181818" },
                  }}
                >
                  {t("Связаться")}
                </Button>
              </Box>
            </Drawer>
          </Box>
        </Stack>
      </Stack>

      <Modal open={openModal} onClose={handleClose}>
        <Stack className={"modal"}>
          <Box className={"modal-navbar"}>
            <Typography variant="h6" className={"title"}>
              {t("Стать клиентом")}
            </Typography>
            <Box onClick={handleClose}>
              <CloseIcon className={"close-icon"} />
            </Box>
          </Box>

          <Typography variant="body2" className={"modal-paragraph"}>
            {t(
              "Наши клиенты получают наилучшие результаты, когда наша команда занимается их полиграфическими проектами в течение длительного времени, обеспечивая качество и надежность"
            )}
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
              <span style={{ marginTop: "3px" }}>{t("Телеграм")}</span>
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
              <label>{t("Имя")}</label>
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
              <label>{t("Номер телефона")}</label>
              <input
                type="tel"
                placeholder="+998 00 000 00 00"
                value={formData.phone}
                onChange={handlePhoneChange}
                className={errors.phone ? "error-border" : ""}
              />
            </div>

            <div className="form-group">
              <label>{t("Почта")}</label>
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
              <label>{t("LinkedIn (необязательно)")}</label>
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
              {t("Отправить")}
            </Button>
          </form>
        </Stack>
      </Modal>
    </Stack>
  );
}
