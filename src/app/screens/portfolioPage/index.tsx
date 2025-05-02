import { Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";
import ChosenPortfolio from "./ChosenPortfolio";
import { portfolioItems } from "../../../assets/common";
import "../../../css/portfolio.css";

export default function PortfolioPage() {
  return (
    <div className={"portfolio-page"}>
      <Routes>
        <Route index element={<Portfolio portfolioItems={portfolioItems} />} />
        <Route
          path=":portfolioId"
          element={<ChosenPortfolio portfolioItems={portfolioItems} />}
        />
      </Routes>
    </div>
  );
}
