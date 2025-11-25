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
            <Link to="/about/history">연혁</Link>
            <Link to="/about/business_performance">주요 사업실적</Link>
            <Link to="/about/certificate">주요 인증현황</Link>
            <Link to="/about/management">경영지침</Link>
            <Link to="/about/location">오시는 길</Link>
          </div>

          {/* BUSINESS */}
          <div className="mega-col">
            <p className="mega-title">주요사업</p>
            
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
            <p className="mega-title">인재채용</p>
            <Link to="/recruit/talent_recruitment">채용정보</Link>
          </div>

        </div>
      </div>
    </header>
  );
}
