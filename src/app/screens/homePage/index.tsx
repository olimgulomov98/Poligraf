import Printing from "./Printing";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Numbers from "./Numbers";
import Partners from "./Partners";
import Client from "./Client";
import "../../../css/home.css";

export default function HomePage() {
  return (
    <div className={"homepage"}>
      <Printing />
      <AboutUs />
      <Services />
      <Portfolio />
      <Numbers />
      <Partners />
      <Client />
    </div>
  );
}
