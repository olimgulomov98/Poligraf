import { Box, Button, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navbar() {
  return (
    <Stack className={"navbar"}>
      <Stack className={"navbar-container"}>
        <Box>
          <img
            src="/img/poligrafLogo.png"
            alt="poligrafLogo"
            width={"104px"}
            height={"56.75px"}
          />
        </Box>
        <Stack className="links">
          <Box className={"hover-line"}>
            <NavLink to="/">Главная</NavLink>
          </Box>
          <Box className={"hover-line"}>
            <NavLink to="/portfolio">Портфолио</NavLink>
          </Box>
          <Box className={"hover-line"}>
            <NavLink to="/uslugi">
              Услуги <KeyboardArrowDownIcon fontSize="medium" />
            </NavLink>
          </Box>
          <Box className={"hover-line"}>
            <NavLink to="/o-nas">О нас</NavLink>
          </Box>
        </Stack>
        <Stack className={"navbar-right-frame"}>
          <Box className={"navbar-lang"}>
            Ru <KeyboardArrowDownIcon fontSize="medium" />
          </Box>
          <Button
            variant="contained"
            className={"navbar-btn"}
            endIcon={<GoArrowRight />}
          >
            Связаться
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
