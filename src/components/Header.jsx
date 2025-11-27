// src/components/Header.jsx
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
            <Link to="/about/history">연혁</Link>
            <Link to="/about/business_performance">주요 사업실적</Link>
            <Link to="/about/certificate">주요 인증현황</Link>
            <Link to="/about/management">경영지침</Link>
            <Link to="/about/location">오시는 길</Link>
          </div>

          {/* BUSINESS */}
          <div className="mega-col">
            <p className="mega-title">주요사업</p>
            {/* 대표 페이지 */}
            <Link to="/business">사업 분야 전체보기</Link>
            {/* 각 항목별 “한 페이지” */}
            <Link to="/business/spatial-info">공간정보구축</Link>
            <Link to="/business/underground-survey">지하시설물측량</Link>
            <Link to="/business/drone-survey">드론측량 · 항공사진측량</Link>
            <Link to="/business/drone-lidar">드론 LiDAR</Link>
            <Link to="/business/aerial-photo-analysis">항공사진 판독</Link>
            <Link to="/business/landuse-db">
              연속지적·용도지역·지구 DB
            </Link>
            <Link to="/business/water-3d-model">
              수원지 · 3차원 지형 데이터
            </Link>
            <Link to="/business/tech-transfer">
              수치도화기 판매 및 기술이전
            </Link>
            <Link to="/business/ground-investigation">지반조사</Link>
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
            <Link to="/recruit/recruitment">채용정보</Link>
            <Link to="/recruit/announcement">채용공고</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
