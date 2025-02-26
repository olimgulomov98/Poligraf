import { Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";
import ChosenPortfolio from "./ChosenPortfolio";
import "../../../css/portfolio.css";

const portfolioItems = [
  {
    id: 1,
    category: "Фармацевтика",
    img: "/icons/spring-p.svg",
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
    category: "Финанс",
    img: "/icons/sqb.svg",
    title: "SQB",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 3,
    category: "Гос. Проекты",
    img: "/icons/yec-gilam.svg",
    title: "YEC Gilam",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 4,
    category: "Рестораны",
    img: "/icons/whynut.svg",
    title: "Why Nut",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 5,
    category: "Рестораны",
    img: "/icons/zikki.svg",
    title: "Zikki",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 6,
    category: "Рестораны",
    img: "/icons/zeytun.svg",
    title: "Zeytun Restaurant",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 7,
    category: "Другие",
    img: "/icons/almaz.svg",
    title: "Almaz",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 8,
    category: "Травертин, эмульсия",
    img: "/icons/adim.svg",
    title: "Adim",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 9,
    category: "Производство",
    img: "/icons/vivo.svg",
    title: "Vivo",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 10,
    category: "Финанс",
    img: "/icons/aloqabank.svg",
    title: "Aloqabank",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 11,
    category: "Медицина",
    img: "/icons/andrologiya.svg",
    title: "Андрология-н Тиббиёт маркази",
    desc: "Каробка, картон дизайн",
  },
  {
    id: 12,
    category: "Гос. Проекты",
    img: "/icons/artsoft.svg",
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
