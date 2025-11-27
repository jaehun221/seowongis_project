// src/pages/business/BusinessOverview.jsx
import { Link } from "react-router-dom";

const items = [
  { path: "spatial-info", label: "공간정보구축", desc: "항공·드론을 활용한 정사영상, 수치지형도, 공간정보 DB 구축" },
  { path: "underground-survey", label: "지하시설물측량", desc: "상·하수, 가스, 전기, 통신 등 8대 지하시설물에 대한 정밀 조사·탐사" },
  { path: "drone-survey", label: "드론측량·항공사진측량", desc: "넓은 지역을 고해상도로 촬영하고 정사영상·지형정보로 가공" },
  { path: "drone-lidar", label: "드론 LiDAR", desc: "고정밀 3D 포인트클라우드 기반 산림·지형 분석" },
  { path: "aerial-photo-analysis", label: "항공사진 판독", desc: "과거·현재 항공사진 비교를 통한 변화 판독 및 불법행위 모니터링" },
  { path: "landuse-db", label: "연속지적·용도지역·지구 DB", desc: "지적재조사·용도지역·지구 정보를 통합한 행정용 공간 DB 구축" },
  { path: "water-3d-model", label: "수원지·3차원 지형 데이터", desc: "수심·지형을 동시에 취득하는 3D 수역 데이터 구축" },
  { path: "tech-transfer", label: "수치도화기 판매 및 기술이전", desc: "장비 공급과 더불어 교육·실습으로 기술이전까지 지원" },
  { path: "ground-investigation", label: "지반조사", desc: "시추·지반탄성파 시험을 통한 구조물 설계를 위한 지반 정보 제공" },
];

export default function BusinessOverview() {
  return (
    <div className="business-overview">
      <p className="business-paragraph">
        서원공간정보는 공간정보 구축에서 드론 LiDAR, 지하시설물 측량, 지반조사에 이르기까지
        토탈 서비스를 제공하는 전문 기업입니다. 아래에서 관심 분야를 선택하시면
        세부 페이지에서 보다 구체적인 업무 내용과 적용 사례를 확인하실 수 있습니다.
      </p>

      <div className="business-overview-grid">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="business-card"
          >
            <h3 className="business-card-title">{item.label}</h3>
            <p className="business-card-desc">{item.desc}</p>
            <span className="business-card-more">자세히 보기 →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
