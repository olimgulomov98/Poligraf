import { useState } from "react";
import { Box, Button, Menu, MenuItem, Stack } from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navbar({ openModal }: { openModal: () => void }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleServiceClick = (service: string) => {
    history.push(`/services/${service}`);
    handleClose();
  };

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
          <Box className={"hover-line"} onClick={handleClick}>
            <span className={"uslugi-link"}>
              Услуги <KeyboardArrowDownIcon fontSize="medium" />
            </span>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{
              "& .MuiPaper-root": {
                border: "1px solid #c5c3c3",
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
              sx={{ paddingTop: "10px", paddingBottom: "10px" }}
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
              }}
            >
              Цивровая печать
            </MenuItem>
            <MenuItem
              onClick={() => handleServiceClick("flex")}
              sx={{ paddingTop: "10px", paddingBottom: "10px" }}
            >
              Флекс печать
            </MenuItem>
          </Menu>

          <Box className={"hover-line"}>
            <NavLink to="/about-us">О нас</NavLink>
          </Box>
        </Stack>
        <Stack className={"navbar-right-frame"}>
          <Box className={"navbar-lang"}>
            Ru <KeyboardArrowDownIcon fontSize="medium" />
          </Box>
          <Button
            variant="contained"
            className={"navbar-btn"}
            endIcon={<GoArrowRight className={"arrowRight-icon"} />}
            onClick={openModal}
          >
            Связаться
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
