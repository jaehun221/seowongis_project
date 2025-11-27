// src/pages/business/Business.jsx
import { NavLink, Outlet } from "react-router-dom";
import "./business.css";

const sections = [
  {
    path: "spatial-info",
    label: "공간정보구축",
    eng: "Spatial Data Construction",
  },
  {
    path: "underground-survey",
    label: "지하시설물측량",
    eng: "Underground Utility Survey",
  },
  {
    path: "drone-survey",
    label: "드론측량·항공사진측량",
    eng: "Drone & Aerial Survey",
  },
  {
    path: "drone-lidar",
    label: "드론 LiDAR",
    eng: "Drone LiDAR",
  },
  {
    path: "aerial-photo-analysis",
    label: "항공사진 판독",
    eng: "Aerial Image Interpretation",
  },
  {
    path: "landuse-db",
    label: "연속지적·용도지역·지구 DB",
    eng: "Cadastral & Land-use DB",
  },
  {
    path: "water-3d-model",
    label: "수원지·3차원 지형 데이터",
    eng: "Reservoir & 3D Terrain",
  },
  {
    path: "tech-transfer",
    label: "수치도화기 판매 및 기술이전",
    eng: "Digitizer Supply & Training",
  },
  {
    path: "ground-investigation",
    label: "지반조사",
    eng: "Ground Investigation",
  },
];

export default function Business() {
  return (
    <main className="business-page">
      {/* 공통 상단 영역 */}
      <section className="business-hero">
        <div className="business-hero-inner">
          <p className="business-eyebrow">OUR BUSINESS</p>
          <h1 className="business-title">주요 사업 분야</h1>
          <p className="business-subtitle">
            ㈜서원공간정보의 핵심 사업 영역을 한눈에 확인하고,
            <br className="br-desktop" />
            세부 페이지에서 각 분야별 전문 서비스를 자세히 살펴보실 수 있습니다.
          </p>
        </div>

        {/* 상단 탭 네비게이션 */}
        <nav className="business-nav" aria-label="주요 사업 선택">
          {sections.map((section) => (
            <NavLink
              key={section.path}
              to={section.path}
              className={({ isActive }) =>
                "business-nav-item" + (isActive ? " active" : "")
              }
              end
            >
              <span className="business-nav-label">{section.label}</span>
              <span className="business-nav-eng">{section.eng}</span>
            </NavLink>
          ))}
        </nav>
      </section>

      {/* 여기에서 실제 페이지가 바뀜 */}
      <section className="business-detail">
        <Outlet />
      </section>
    </main>
  );
}
