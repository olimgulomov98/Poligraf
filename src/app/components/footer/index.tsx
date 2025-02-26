import { Box, Button, Stack, Typography } from "@mui/material";
import { GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";

export default function Footer({ openModal }: { openModal: () => void }) {
  const { t }: { t: (key: string) => string } = useTranslation("navbarFooter");

  const socialLinks = {
    instagram: "https://www.instagram.com/poligrafextra?igsh=NzIza2NsMDRtMTVw",
    youtube: "https://youtube.com/@poligrafextra?si=3dXEdljY4CSsx09D",
    telegram: "https://t.me/poligrafextra",
    facebook: "https://www.facebook.com/share/1BVycuU6ZY/?mibextid=wwXIfr",
  } as const;

  type SocialPlatform = keyof typeof socialLinks;

  const handleRedirect = (platform: SocialPlatform) => {
    window.open(socialLinks[platform], "_blank");
  };

  return (
    <Stack className={"footer"}>
      <Box className={"footer-logo"}>
        <img src="/icons/whitePeLogo.svg" alt="whitePeLogo" />
      </Box>
      <Stack className={"footer-frame"}>
        <Box>
          <Typography variant="h4">
            {t("Узбекистон, Наманган шахар, Косонсой куча 22 уй")}
          </Typography>

          <Typography variant="h3">@poligraf_extra</Typography>

          <Button
            variant="contained"
            className={"footer-btn"}
            endIcon={<GoArrowRight className="arrowRight-icon" />}
            onClick={openModal}
          >
            {t("Связаться")}
          </Button>
        </Box>
        <Box>
          <Stack className={"footer-boxes"}>
            {Object.entries(socialLinks).map(([platform, url]) => (
              <Box
                key={platform}
                className={"footer-box"}
                onClick={() => handleRedirect(platform as SocialPlatform)}
                sx={{ cursor: "pointer" }}
              >
                <img src={`/icons/${platform}.svg`} alt={platform} />
              </Box>
            ))}
          </Stack>

          <Typography
            variant="h2"
            component="a"
            href="tel:+998905525050"
            className="footer-phone"
          >
            +99890 552 50 50
          </Typography>

          <Box className={"email-frame"}>
            <img src="/icons/email.svg" alt="email" />
            <Typography variant="h5">poligrafextra@gmail.com</Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}
