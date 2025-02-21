import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import Partners from "../homePage/Partners";
import Offset from "./Offset";
import Digital from "./Digital";
import Flex from "./Flex";
import "../../../css/services.css";

export default function ServicesPage() {
  const { serviceType } = useParams<{ serviceType: string }>();

  return (
    <Stack className={"services"}>
      {serviceType === "offset" && <Offset />}
      {serviceType === "digital" && <Digital />}
      {serviceType === "flex" && <Flex />}

      <Partners />
    </Stack>
  );
}
