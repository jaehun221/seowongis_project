// src/pages/about/Performance.jsx
import React, { useState } from "react";
import "./performance.css";


const records = [
  {
    no: 1,
    name: "밤갓로(대로3-1호) 개설공사(2차) GIS DB구축 용역",
    client: "서산시",
  },
  {
    no: 2,
    name: "율지로(소로2-98호) 개설공사 GIS DB 구축 용역",
    client: "서산시",
  },
  {
    no: 3,
    name: "해미면 외 2개소 상수도 시설공사 GIS DB 구축 용역",
    client: "서산시",
  },
  {
    no: 4,
    name: "영진크로바아파트옆(소로1-17호) 개설공사 GIS DB 구축 용역",
    client: "서산시",
  },
  {
    no: 5,
    name: "공항물류지역(3단계) 단지조성공사 GIS DB 구축 용역",
    client: "인천공항공사",
  },
  {
    no: 6,
    name: "예천동(법원앞) 상수도 시설공사 외 1건 GIS DB구축 용역",
    client: "서산시",
  },
  {
    no: 7,
    name: "서산시 중앙도서관 건립을 위한 지형현황측량용역",
    client: "서산시",
  },
  {
    no: 8,
    name: "온석동 상수도 시설공사 외 1건 GIS DB구축 용역",
    client: "서산시",
  },
  {
    no: 9,
    name: "부석면(창리) 농어촌 생활용수 개발사업 GIS DB구축 용역",
    client: "서산시",
  },
  {
    no: 10,
    name: "해미면 반양리 421-1번지 외 6필지 상수도 시설공사 GIS DB구축 용역",
    client: "서산시",
  },
  {
    no: 11,
    name: "인지면 산동리 관로 개량공사 GIS DB구축 용역",
    client: "서산시",
  },
  {
    no: 12,
    name: "서천군 지현2리 마을 LPG배관망 구축사업 설계 및 공공측량 용역",
    client: "한국LPG배관망사업단",
  },
  {
    no: 13,
    name: "예산군 평촌리 마을 LPG배관망 구축사업 설계 및 공공측량 용역",
    client: "한국LPG배관망사업단",
  },
  {
    no: 14,
    name: "아산시(배방) 중점관리지역 도시침수 대응사업 GIS DB구축",
    client: "아산시",
  },
  {
    no: 15,
    name: "아산스마트밸리 일반산업단지 용수공급 시설공사 GIS DB 구축",
    client: "아산시",
  },
  {
    no: 16,
    name: "서산 현대자동차 주행시험로 신설공사 지하시설물 구축",
    client: "현대건설(주)",
  },
  {
    no: 17,
    name: "경포 저동지구 복합개발 항공측량 용역",
    client: "강원도",
  },
  {
    no: 18,
    name: "지적재조사지구 연속지적도 및 용도지역, 지구 DB정비 대행 용역(22년)",
    client: "서산시",
  },
  {
    no: 19,
    name: "장곡4리 배수관로 확충공사 GIS DB구축 용역",
    client: "태안군",
  },
  {
    no: 20,
    name: "차성선 농어촌도로 확포장공사 GIS DB 구축 용역",
    client: "서산시",
  },
  {
    no: 21,
    name: "운산면 원평리 상수관로 개량공사 외 1건 GIS DB구축 용역",
    client: "서산시",
  },
  {
    no: 22,
    name: "지구단위계획도로(지곡중로3-2호) 정비사업 GIS DB구축 용역",
    client: "서산시",
  },
  {
    no: 23,
    name: "인지중학교 상수관로 이설공사 GIS DB 구축 용역",
    client: "서산시",
  },
  {
    no: 24,
    name: "지적재조사지구 연속지적도 및 용도지역, 지구 DB정비 대행 용역",
    client: "청양군",
  },
  {
    no: 25,
    name: "인지(소로1-10호) 개설공사 GIS DB구축 용역",
    client: "서산시",
  },
  {
    no: 26,
    name: "당진 수청지구 도시개발사업 간선설치 위치탐사용역",
    client: "한국전력공사",
  },
  {
    no: 27,
    name: "남해군 수원지 및 주변 지형 3차원 데이터 구축(무인수심측량)",
    client: "남해군",
  },
  {
    no: 28,
    name: "청양군 청소2리 마을 LPG배관망 구축사업 설계 및 공공측량 용역",
    client: "한국LPG사업관리원",
  },
  {
    no: 29,
    name: "태안 곰낙리 마을 LPG배관망 구축사업 설계 및 공공측량 용역",
    client: "한국LPG사업관리원",
  },
  {
    no: 30,
    name: "태안 황도리 마을 LPG배관망 구축사업 설계 및 공공측량 용역",
    client: "한국LPG사업관리원",
  },
  {
    no: 31,
    name: "2023 서산시 공간정보시스템 유지보수 용역",
    client: "서산시",
  },
  {
    no: 32,
    name: "호남선 126.03K 용산천교(천안) 등 2개교 전면개축 실시설계용역",
    client: "한국도로공사",
  },
  {
    no: 33,
    name: "당진시 지방상수도 현대화사업 관망정비공사 GIS DB구축 용역(1차년도)",
    client: "한국수자원공사",
  },
  {
    no: 34,
    name: "천안공업고등학교 수치지도 납품 및 교육(2024년)",
    client: "천안공업고등학교",
  },
];

const PAGE_SIZE = 10;

const Performance = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(records.length / PAGE_SIZE);
  const startIndex = (page - 1) * PAGE_SIZE;
  const pageItems = records.slice(startIndex, startIndex + PAGE_SIZE);

  const handlePrev = () => {
    setPage((p) => (p > 1 ? p - 1 : p));
  };

  const handleNext = () => {
    setPage((p) => (p < totalPages ? p + 1 : p));
  };

  return (
    <div className="perf-page">
        <h1 className="performance-title">주요 사업실적</h1>
        <div className="performance-title-line"></div>

      <div className="perf-table-wrapper">
        <table className="perf-table">
          <thead>
            <tr>
              <th className="col-no">No.</th>
              <th className="col-name">용 역 명</th>
              <th className="col-client">발주처</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((row) => (
              <tr key={row.no}>
                <td className="col-no">{row.no}</td>
                <td className="col-name">{row.name}</td>
                <td className="col-client">{row.client}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="perf-pagination">
        <button onClick={handlePrev} disabled={page === 1}>
          이전
        </button>
        <span className="perf-page-info">
          {page} / {totalPages}
        </span>
        <button onClick={handleNext} disabled={page === totalPages}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Performance;