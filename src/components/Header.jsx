import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import logo from "../assets/images/main/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      id="header"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="header">
        <div className="container header-wrap">

          <Link
            to="/"
            className="logo d-inline-flex align-items-center h-100"
          >
            <img src={logo} className="logo-img" alt="지오스토리" />
          </Link>

          <Nav />
        </div>
      </div>

      {/* mega menu */}
      <div className={`mega-menu ${open ? "show" : ""}`}>
        <div className="container mega-menu-inner">

          <div className="mega-col">
            <p className="mega-title">About</p>
            <a href="/about/intro">지오스토리</a>
            <a href="/about/ci">CI</a>
            <a href="/about/history">연혁</a>
            <a href="/about/business_performance">주요 사업실적</a>
            <a href="/about/certificate">주요 인증현황</a>
            <a href="/about/management">경영지침</a>
            <a href="/about/location">오시는 길</a>
          </div>

          <div className="mega-col">
            <p className="mega-title">Business</p>
            <a href="/business/business_1">항공사진 촬영</a>
            <a href="/business/business_12">정사영상 제작</a>
            <a href="/business/business_2">수치표고자료 제작</a>
            <a href="/business/business_3">수치지도 제작</a>
            <a href="/business/business_4">지하시설물 측량</a>
            <a href="/business/business_5">3차원 모델링 제작</a>
            <a href="/business/business_6">MMS 측량</a>
            <a href="/business/business_7">초분광 영상처리</a>
            <a href="/business/business_8">초분광 장비판매/컨설팅</a>
            <a href="/business/business_9">항공수심측량</a>
            <a href="/business/business_10">R&D</a>
          </div>

          <div className="mega-col">
            <p className="mega-title">Equipment</p>
            <a href="/equipment/equipment">장비 목록</a>
          </div>

          <div className="mega-col">
            <p className="mega-title">News</p>
            <a href="/news/news">뉴스</a>
            <a href="/news/data">자료실</a>
          </div>

          <div className="mega-col">
            <p className="mega-title">Recruit</p>
            <a href="/recruit/talent_recruitment">인재채용</a>
            <a href="/recruit/recruitment_announcement">채용공고</a>
          </div>

        </div>
      </div>
    </header>
  );
}
