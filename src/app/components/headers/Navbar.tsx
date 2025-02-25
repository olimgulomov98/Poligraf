import { useState } from "react";
import { Avatar, Box, Button, Menu, MenuItem, Stack } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navbar({ openModal }: { openModal: () => void }) {
  const navigate = useNavigate();
  const { t, i18n }: { t: (key: string) => string; i18n: any } =
    useTranslation("navbarFooter");

  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const [selectedLang, setSelectedLang] = useState<"Ru" | "Uz">(
    i18n.language as "Ru" | "Uz"
  );

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

  const openLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const closeLanguageMenu = (lang?: "Ru" | "Uz") => {
    if (lang) {
      i18n.changeLanguage(lang);
      setSelectedLang(lang);
    }
    setLanguageAnchorEl(null);
  };

  return (
    <Stack className="navbar">
      <Stack className="navbar-container">
        <Box sx={{ cursor: "pointer" }}>
          <img
            src="/img/poligrafLogo.png"
            alt="poligrafLogo"
            width="104px"
            height="56.75px"
          />
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
              Офсетная печать
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
              Цифровая печать
            </MenuItem>
            <MenuItem
              onClick={() => handleServiceClick("flex")}
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                "&:hover": { backgroundColor: "#f9f9f9" },
              }}
            >
              Флекс печать
            </MenuItem>
          </Menu>

          <Box className="hover-line">
            <NavLink to="/about-us">{t("О нас")}</NavLink>
          </Box>
        </Stack>

        <Stack className="navbar-right-frame">
          <Box className="navbar-lang" onClick={openLanguageMenu}>
            {selectedLang} <KeyboardArrowDownIcon fontSize="medium" />
          </Box>

          <Menu
            anchorEl={languageAnchorEl}
            open={Boolean(languageAnchorEl)}
            onClose={() => closeLanguageMenu()}
            sx={{
              "& .MuiPaper-root": {
                width: "214px",
                height: "112px",
                border: "1px solid #e8e8e8",
                borderRadius: "8px",
                boxShadow: "none",
                marginTop: "15px",

                "@media (max-width: 450px)": {
                  width: "146px",
                  height: "98px",
                  borderRadius: "5px",
                },
              },
              "& .MuiMenu-list": {
                paddingTop: "0px",
                paddingBottom: "0px",
              },
            }}
          >
            <MenuItem
              onClick={() => closeLanguageMenu("Ru")}
              sx={{
                height: "56px",
                borderBottom: "1px solid #e8e8e8",
                columnGap: "10px",
                fontSize: "20px",
                "@media (max-width: 450px)": {
                  height: "38px",
                  fontSize: "13.64px",
                  lineHeight: "16.55px",
                },
                "&:hover": { backgroundColor: "#f9f9f9" },
              }}
            >
              <Avatar
                src="/icons/ru-logo.svg"
                alt="Русский"
                variant="square"
                sx={{
                  "@media (max-width: 450px)": {
                    width: "16px",
                    height: "16px",
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
                  width: "100%",
                  height: "38px",
                  fontSize: "13.64px",
                  lineHeight: "16.55px",
                },
                "&:hover": { backgroundColor: "#f9f9f9" },
              }}
            >
              <Avatar
                src="/icons/uz-logo.svg"
                alt="Uzbek"
                variant="square"
                sx={{
                  "@media(max-width: 450px)": {
                    width: "16px",
                    height: "16px",
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
            onClick={openModal}
          >
            Связаться
          </Button>

          <Box>{/* <img src="/icons/menu.svg" alt="menu" /> */}</Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
