import { Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";
import ChosenPortfolio from "./ChosenPortfolio";
import "../../../css/portfolio.css";

const portfolioItems = [
  {
    id: 1,
    img: "/img/spring-p.png",
    title: "Spring Pharmaceutic",
    desc: "Каробка, картон дизайн",
    works: [
      {
        img: "/img/senupar.png",
        title: "Spring Pharmaceutic",
        desc: "Каробка, картон дизайн",
      },
      {
        img: "/img/diazolin.png",
        title: "Spring Pharmaceutic",
        desc: "Каробка, картон дизайн",
      },
      {
        img: "/img/atsiklovir.png",
        title: "Spring Pharmaceutic",
        desc: "Каробка, картон дизайн",
      },
    ],
  },
  {
    id: 2,
    img: "/img/sqb.png",
    title: "SQB",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 3,
    img: "/img/yec-gilam.png",
    title: "YEC Gilam",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 4,
    img: "/img/whynut.png",
    title: "Why Nut",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 5,
    img: "/img/zikki.png",
    title: "Zikki",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 6,
    img: "/img/zeytun.png",
    title: "Zeytun Restaurant",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 7,
    img: "/img/almaz.png",
    title: "Almaz",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 8,
    img: "/img/adim.png",
    title: "Adim",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 9,
    img: "/img/vivo.png",
    title: "Vivo",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 10,
    img: "/img/aloqabank.png",
    title: "Aloqabank",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 11,
    img: "/img/andrologiya.png",
    title: "Андрология-н Тиббиёт маркази",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 12,
    img: "/img/artsoft.png",
    title: "Art Soft",
    desc: "Каробка, картон дизайн",
  },
];

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
