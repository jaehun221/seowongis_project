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

          <Link to="/" className="logo d-inline-flex align-items-center h-100">
            <img src={logo} className="logo-img" alt="서원공간정보" />
          </Link>

          <Nav />
        </div>
      </div>

      {/* MEGA MENU */}
      <div className={`mega-menu ${open ? "show" : ""}`}>
        <div className="container mega-menu-inner">

          {/* ABOUT */}
          <div className="mega-col">
            <p className="mega-title">기업소개</p>
            <Link to="/about/intro">서원공간정보</Link>
            <Link to="/about/ci">CI</Link>
            <Link to="/about/history">연혁</Link>
            <Link to="/about/business_performance">주요 사업실적</Link>
            <Link to="/about/certificate">주요 인증현황</Link>
            <Link to="/about/management">경영지침</Link>
            <Link to="/about/location">오시는 길</Link>
          </div>

          {/* BUSINESS */}
          <div className="mega-col">
            <p className="mega-title">주요사업</p>
            <Link to="/business/business_1">항공사진 촬영</Link>
            <Link to="/business/business_12">정사영상 제작</Link>
            <Link to="/business/business_2">수치표고자료 제작</Link>
            <Link to="/business/business_3">수치지도 제작</Link>
            <Link to="/business/business_4">지하시설물 측량</Link>
            <Link to="/business/business_5">3차원 모델링 제작</Link>
            <Link to="/business/business_6">MMS 측량</Link>
            <Link to="/business/business_7">초분광 영상처리</Link>
            <Link to="/business/business_8">초분광 장비판매/컨설팅</Link>
            <Link to="/business/business_9">항공수심측량</Link>
            <Link to="/business/business_10">R&D</Link>
          </div>

          {/* EQUIPMENT */}
          <div className="mega-col">
            <p className="mega-title">보유장비</p>
            <Link to="/equipment">장비 목록</Link>
          </div>

          {/* NEWS */}
          <div className="mega-col">
            <p className="mega-title">게시판</p>
            <Link to="/news">뉴스</Link>
            <Link to="/archive">자료실</Link>
          </div>

          {/* RECRUIT */}
          <div className="mega-col">
            <p className="mega-title">채용</p>
            <Link to="/recruit/talent_recruitment">인재채용</Link>
            <Link to="/recruit/recruitment_announcement">채용공고</Link>
          </div>

        </div>
      </div>
    </header>
  );
}
