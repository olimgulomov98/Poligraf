import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import "../../../css/home.css";

export default function HomePage() {
  return (
    <div className={"homepage"}>
      <Home1 />
      <Home2 />
      <Home3 />
    </div>
  );
}
