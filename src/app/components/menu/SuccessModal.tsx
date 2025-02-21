import { useNavigate } from "react-router-dom";
import { Modal, Box, Button, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { GoArrowRight } from "react-icons/go";

export default function SuccessModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    handleClose();
    navigate("/");
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Stack className="success-modal">
        <Box onClick={handleClose}>
          <CloseIcon className="close-btn" />
        </Box>
        <Box className={"success-img"}>
          <img src="/icons/sending-completed.svg" alt="Success" />
        </Box>

        <Button
          onClick={handleRedirect}
          className="success-btn"
          endIcon={<GoArrowRight className={"arrowRight-icon"} />}
        >
          Домой
        </Button>
      </Stack>
    </Modal>
  );
}
