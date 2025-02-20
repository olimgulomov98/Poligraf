import { Route, Switch } from "react-router-dom";
import Portfolio from "./Portfolio";
import "../../../css/portfolio.css";

export default function PortfolioPage() {
  return (
    <div className={"portfolio-page"}>
      <Switch>
        <Route>
          <Portfolio />
        </Route>
      </Switch>
    </div>
  );
}
