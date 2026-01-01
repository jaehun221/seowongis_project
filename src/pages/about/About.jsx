// src/pages/about/About.jsx
import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <section className="about-layout">
      {/* 여기서 공통 배너/탭/사이드메뉴 같은 레이아웃을 깔고 */}
      {/* 그 아래에 자식 페이지가 꽂히게 Outlet */}
      <Outlet />
    </section>
  );
}
