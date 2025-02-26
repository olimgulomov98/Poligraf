import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { TbWorld } from "react-icons/tb";

export default function Navbar({ openModal }: { openModal: () => void }) {
  const navigate = useNavigate();
  const { t, i18n }: { t: (key: string) => string; i18n: any } =
    useTranslation("navbarFooter");

  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const [navbarLangAnchorEl, setNavbarLangAnchorEl] =
    useState<null | HTMLElement>(null);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

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

  return (
    <Stack
      className="navbar"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#fff !important",
      }}
    >
      <Stack
        className="navbar-container"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#fff !important",
        }}
      >
        <Box sx={{ cursor: "pointer" }}>
          <a href="/">
            <img
              src="/img/poligrafLogo.png"
              alt="poligrafLogo"
              width="104px"
              height="56.75px"
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
                src="/icons/en-logo.jpg"
                alt="Русский"
                variant="square"
                sx={{
                  width: "30px",
                  height: "30px",
                  "@media (max-width: 450px)": {
                    width: "18px",
                    height: "14px",
                  },
                }}
              />{" "}
              {t("Энг")}
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
                src="/icons/ru-logo.svg"
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
                src="/icons/uz-logo.svg"
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
            onClick={openModal}
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
                  onClick={openModal}
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
    </Stack>
  );
}
