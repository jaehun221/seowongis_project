import React, { useState } from "react";
import "./equipment.css";

// 이미지 자동 import
const equipmentImages = import.meta.glob(
  "../../assets/images/equipments/*",
  {
    eager: true,
    import: "default",
  }
);

// 파일명으로 이미지 불러오기
const getEquipmentImage = (filename) => {
  const imagePath = `../../assets/images/equipments/${filename}`;
  return equipmentImages[imagePath] || null;
};

export const EQUIPMENTS = [
  {
    id: 1,
    category: "지상측량·정밀수준",
    type: "VRS측량 / 스태틱측량 / RTK측량",
    name: "GNSS수신기",
    image: "gnss.png",
    manufacturer: "Trimble / Leica 등",
    size: "본체 + 안테나 세트",
    performance: "센티미터급 RTK 정밀도",
    description:
      "VRS, 스태틱, RTK 등 다양한 방식으로 고정밀 위치 측정이 가능한 GNSS 수신기입니다.",
    detail:
      "국토지리정보원 기준망과 연계하여 센티미터급 정밀 측위가 가능하며, 토목·측량·건설 현장에서 활용됩니다.",
  },
  {
    id: 2,
    category: "지상측량·정밀수준",
    type: "2급 레벨측량",
    name: "자동레벨(SPRINTER250)",
    image: "sprinter250.png",
    manufacturer: "Leica Geosystems",
    size: "본체 + 삼각대 + 스태프",
    performance: "2급 수준측량 정밀도 충족",
    description:
      "현장 적용성이 뛰어난 자동 레벨 장비로, 2급 수준측량 작업에 사용됩니다.",
    detail:
      "버튼 조작만으로 측정값을 자동으로 판독·저장할 수 있어 반복적인 수준측량에 효율적입니다.",
  },
  {
    id: 3,
    category: "지상측량·정밀수준",
    type: "1급측량장비",
    name: "토탈스테이션(T32R)",
    image: "t32r.png",
    manufacturer: "TOPCON 등",
    size: "본체 + 삼각대 + 프리즘",
    performance: "1급 각·거리 측정 정밀도",
    description:
      "각도 및 거리 측정이 가능한 1급 토탈스테이션으로, 정밀 지상측량에 적합합니다.",
    detail:
      "좌표 측정, 트래버스 측량, 공사 측량 등 다양한 현장 업무에 활용됩니다.",
  },
  {
    id: 4,
    category: "지상측량·정밀수준",
    type: "1급 정리레벨",
    name: "DiNi",
    image: "dini.png",
    manufacturer: "Leica Geosystems",
    size: "본체 + 삼각대 + 인바 스태프",
    performance: "1급 정밀수준측량 가능",
    description:
      "고정밀 디지털 레벨 장비로, 정밀 수직 기준 확립에 사용됩니다.",
    detail:
      "디지털 판독 방식으로 오차를 줄이고, 자동 저장 기능으로 데이터 관리가 용이합니다.",
  },
  {
    id: 5,
    category: "지상측량·정밀수준",
    type: "1급 데오톨라이트",
    name: "ET-02F",
    image: "et-02f.png",
    manufacturer: "SOKKIA 등",
    size: "본체 + 삼각대",
    performance: "고정밀 각도 측정",
    description:
      "수평·수직 각을 정밀 측정하는 데오톨라이트 장비입니다.",
    detail:
      "기준선 설정, 구조물 시공지, 각도 측정 등 다양한 토목·건축 현장에서 사용됩니다.",
  },
  {
    id: 6,
    category: "지상측량·정밀수준",
    type: "지상라이다(LIDAR)",
    name: "RTC360",
    image: "rtc360.png",
    manufacturer: "Leica Geosystems",
    size: "스캐너 본체 + 삼각대",
    performance: "초당 최대 약 200만 포인트, 수 mm~수 cm 수준 3D 스캔 정밀도",
    description:
      "현장에서 구조물과 지형을 고정밀로 스캔하여 포인트클라우드를 생성하는 지상형 3D 레이저 스캐너입니다.",
    detail:
      "터널·구조물·플랜트·건축물 등을 빠르게 3차원으로 계측하여 메쉬, 단면도, 변위 분석 등 다양한 성과물을 생성할 수 있으며, BIM·디지털트윈 구축에 활용됩니다.",
  },
  // ---------------- 항공측량 ----------------
  {
    id: 10,
    category: "항공측량·원격탐사",
    type: "항공측량 / 항공동영상 (RMS 5cm 정확도)",
    name: "PHANTOM 4 RTK 및 MAVIC3",
    image: "mavic3.png",
    manufacturer: "DJI",
    size: "기체 + 컨트롤러 + 배터리",
    performance: "RMS 약 5cm 수준의 항공사진 정확도",
    description:
      "RTK 기반 항공사진 및 동영상 취득이 가능한 드론 장비입니다.",
    detail:
      "RTK 모듈 탑재로 고정밀 위치 정보 취득이 가능하며, 지형·시설물 3D 모델링에 활용됩니다.",
  },
  {
    id: 11,
    category: "항공측량·원격탐사",
    type: "항공측량 / 고정밀 매핑",
    name: "M350S",
    image: "m350s.png",
    manufacturer: "DJI",
    size: "기체 + 컨트롤러 + 여분 배터리",
    performance:
      "RTK/PPK 지원을 통한 고정밀 위치 보정, 페이로드 및 센서에 따라 실측 오차 수 cm 수준 가능",
    description:
      "산업용·측량용으로 설계된 다목적 드론으로, RTK/PPK 기반의 정밀 항공사진과 영상 수집에 적합합니다. 강한 바람과 열악한 환경에서도 안정적인 비행 성능을 제공하며 다양한 센서 페이로드(고해상도 카메라, 열화상, 멀티스펙트럴, 소형 LiDAR 등)를 장착할 수 있어 현장 요구에 맞춘 데이터 수집이 가능합니다.",
    detail:
      "실제 측량·매핑 워크플로우에서의 활용을 고려해 장거리 비행과 높은 하중 대응성을 갖추고 있습니다. 배터리와 페이로드 구성에 따라 통상 25~40분 수준의 비행 시간이 가능하며, 자동 비행 계획·중복비행 및 안전장치(장애물 회피, 이중 GPS/관성 보정 등)를 통해 데이터 수집의 안정성을 높입니다. 취득한 항공사진은 포인트클라우드, 정사영상(orthomosaic), DSM/DTM 등 다양한 지형·구조물 분석 산출물로 처리할 수 있습니다."
  },
  {
    id: 12,
    category: "항공측량·원격탐사",
    type: "항공사진도화/항공사진판독",
    name: "수치도화기",
    image: "dohwa.png",
    manufacturer: "DATEM, Summit 등 소프트웨어/워크스테이션",
    size: "워크스테이션 PC + 스테레오 모니터/입력장치",
    performance: "항공사진 기반 수치지형도·수치표고모델(DEM) 제작",
    description:
      "항공사진과 위성영상을 스테레오로 판독하여 수치지형도와 3D 지형 데이터를 생성하는 도화 시스템입니다.",
    detail:
      "스테레오 영상에서 지형·시설물을 판독해 등고선, 구조물, 지형요소를 벡터화하고, 정사영상(Ortho), DEM/DSM, 편집용 도면을 제작하는 데 사용됩니다.",
  },
  // --------- 지하매설물, 관로탐사 ------------
  {
    id: 20,
    category: "지하매설물·관로탐사",
    type: "관로탐사",
    name: "MPS-11S",
    image: "mps-11s.png",
    manufacturer: "Takachiho",
    size: "송신기 본체 + 수신기",
    performance: "지중 매설 선로의 위치·방향 탐지",
    description:
      "지하에 매설된 전력·통신선 및 금속 관로의 위치를 탐지하는 지중선로 탐지기입니다.",
    detail:
      "송신기에서 매설 선로나 금속관에 신호를 인가하고, 수신기로 지표면에서 그 신호를 수신해 선로의 위치와 진행 방향을 추적합니다. 굴착 공사 전 지하매설물 조사 및 관로 노선 파악에 활용됩니다.",
  },
  {
    id: 21,
    category: "지하매설물·관로탐사",
    type: "핸드GPR",
    name: "Opera XR",
    image: "opera.png",
    manufacturer: "IDS GeoRadar",
    size: "카트형 GPR 본체",
    performance: "다중 주파수 GPR로 관로·공동 고해상도 탐지",
    description:
      "도로 상에서 주행하며 지하 매설 관로와 공동, 지반 구조를 탐지하는 카트형 GPR 시스템입니다.",
    detail:
      "여러 주파수 대역의 레이더 안테나를 사용해 얕은 구간부터 비교적 깊은 구간까지 연속적으로 조사할 수 있으며, GNSS와 결합해 2D/3D 지하공간 지도를 생성합니다. 굴착 공사 전 지하시설물 조사와 관로 위치 파악, 지반 안전진단에 활용됩니다.",
  },
  {
    id: 22,
    category: "지하매설물·관로탐사",
    type: "맨홀탐지기",
    name: "MD-3010",
    image: "md-3010.png",
    manufacturer: "Tianxun",
    size: "본체 + 탐지 코일",
    performance: "지중 금속 대상(관, 케이블, 매설체 등) 탐지",
    description:
      "지하에 매설된 금속 관로·케이블·각종 금속체를 탐지하는 지중 금속 탐지기입니다.",
    detail:
      "지표면에서 탐지 코일을 이동시키며 금속 물체 존재 여부와 대략적인 위치를 파악하는 장비로, 관로 위치 확인·지장물 예비 조사·금속 매설물 탐사 등에 활용됩니다.",
  },
  // -------- 수로, 해양측량 ----------
  {
    id: 30,
    category: "수로·해양측량",
    type: "무인수심측량선",
    name: "아파치3호",
    image: "apache.png",
    manufacturer: "국내 제작 / 자체 조립",
    size: "소형 무인선 본체 + GNSS 안테나 + 통신장치",
    performance: "원격·자동 항해를 통한 연속 수심 및 위치 계측",
    description:
      "GNSS·자동항법 장치를 탑재한 무인선으로, 하천·호수·저수지 등에서 수심 및 수로를 자동 측량하는 장비입니다.",
    detail:
      "원격 조종 또는 사전 계획된 경로에 따라 자율 항해하며, 탑재된 센서와 GNSS를 통해 수심·위치 데이터를 연속 취득합니다. 위험 구간이나 접근이 어려운 구간의 수로측량, 댐·저수지 관리 등 수자원 조사를 효율적으로 수행하는 데 활용됩니다.",
  },
  {
    id: 31,
    category: "수로·해양측량",
    type: "지중탐사기",
    name: "SBP-1 Sub Bottom Profiler",
    image: "sbp-1.png",
    manufacturer: "JW Fishers",
    size: "견인식 송수파기 + 케이블 + 상부 제어장치",
    performance: "수십 m 수준 해저 하부 지층 구조 고해상도 탐사",
    description:
      "해저면 아래의 퇴적층과 암반 경계를 영상화하여 천부 지층 구조를 파악하는 Sub Bottom Profiler(SBP) 장비입니다.",
    detail:
      "에코사운더와 유사하게 음파를 해저 방향으로 발사하지만, 일부 에너지가 해저 내부까지 투과되도록 설계되어 지층 경계에서 반사된 신호를 기록합니다. 항로·케이블·관로 매설 구간의 지반 조건 평가, 매립·준설 구간의 퇴적층 두께 파악 등 해양공사·해저지질 조사에 활용됩니다.",
  },
  {
    id: 32,
    category: "수로·해양측량",
    type: "검조의",
    name: "조위계",
    image: "zowige.png",
    manufacturer: "제조사",
    size: "센서부 + 기록장치(데이터로거) + 통신장치",
    performance: "조석에 따른 수위 변화를 실시간·연속 측정",
    description:
      "해안·항만·하구 등에 설치하여 밀물·썰물에 따른 수위 변화를 연속 관측하는 조위계입니다.",
    detail:
      "수로측량 시 수심 값을 보정하기 위한 기준 조위를 제공하며, 장기 관측 자료는 조위표 작성, 항만·해안 구조물 설계, 해수면 변화 분석 등에 활용됩니다.",
  },
  {
    id: 33,
    category: "수로·해양측량",
    type: "음향측식기",
    name: "aquaruler200",
    image: "aquaruler200.png",
    manufacturer: "(주)소나테크",
    size: "선박 탑재용 송수파기 + 본체",
    performance: "천해용 정밀음향측심, 해저면 수심 연속 계측",
    description:
      "선박에 장착하여 항주하면서 수심을 정밀하게 계측하는 싱글빔 음향식 수심측량 장비입니다.",
    detail:
      "200 kHz 대역의 송수파기를 이용해 해저면까지의 거리를 측정하며, GNSS 위치와 결합해 수심도와 해저지형 단면도를 작성하는 데 활용됩니다. 항만·어항 기본계획과 준설 설계 등 정밀 수로측량 업무에 적합합니다.",
  },
  // ------- 출력, 기타 ------
  {
    id: 15,
    category: "출력·기타",
    type: "플로터",
    name: "HP Designjet T1600",
    image: "t1600.png",
    manufacturer: "HP",
    size: "플로터 본체",
    performance: "대형 도면 고해상도 출력",
    description:
      "대형 도면 및 설계 도면 출력을 위한 고해상도 플로터입니다.",
    detail:
      "A1, A0 등 대형 도면을 고해상도로 출력하여 설계·보고용 도면 제작에 활용됩니다.",
  },
  
];

export const EQUIPMENT_CATEGORIES = [
  "전체",
  "지상측량·정밀수준",
  "항공측량·원격탐사",
  "지하매설물·관로탐사",
  "수로·해양측량",
  "출력·기타",
];

export default function EquipmentPage() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const filteredEquipments =
    activeCategory === "전체"
      ? EQUIPMENTS
      : EQUIPMENTS.filter((item) => item.category === activeCategory);

  const handleRowClick = (eq) => setSelectedEquipment(eq);
  const closeModal = () => setSelectedEquipment(null);

  return (
    <div className="equipment-page">
      
      {/* 타이틀 */}
      <section className="equipment-header container">
        <h2 className="equipment-title">보유장비</h2>
        <div className="equipment-title-line" />
        <p className="equipment-subtitle">서원공간정보가 보유한 주요 장비 목록입니다</p>
      </section>

      {/* 카테고리 */}
      <section className="equipment-filter container">
        <ul className="equipment-filter__list">
          {EQUIPMENT_CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                className={
                  "equipment-filter__button" +
                  (activeCategory === cat ? " on" : "")
                }
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* 리스트 */}
      <section className="equipment-list container">
        <div className="equipment-table">

          {/* 헤더 */}
          <div className="equipment-table__header">
            <div className="equipment-table__col equipment-table__col--image">
              이미지
            </div>
            <div className="equipment-table__col equipment-table__col--info">
              장비 정보
            </div>
          </div>

          {/* 데이터 행 */}
          {filteredEquipments.map((eq) => (
            <div
              key={eq.id}
              className="equipment-row"
              onClick={() => handleRowClick(eq)}
              role="button"
              tabIndex={0}
            >
              {/* 이미지 */}
              <div className="equipment-image">
                <img src={getEquipmentImage(eq.image)} alt={eq.name} />
              </div>

              {/* 정보 */}
              <div className="equipment-info">
                
                {/* 위 표 */}
                <div className="equipment-info__rows">
                  <div className="equipment-info__row">
                    <span className="equipment-info__label">구분</span>
                    <span className="equipment-info__value">
                      {eq.category}
                    </span>
                  </div>
                  <div className="equipment-info__row">
                    <span className="equipment-info__label">장비명</span>
                    <span className="equipment-info__value equipment-info__value--name">
                      {eq.name}
                    </span>
                  </div>
                  <div className="equipment-info__row">
                    <span className="equipment-info__label">용도/규격</span>
                    <span className="equipment-info__value">
                      {eq.type}
                    </span>
                  </div>
                </div>

                {/* 리스트 설명 */}
                {eq.description && (
                  <div className="equipment-detail">{eq.description}</div>
                )}

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ---------------- 팝업 모달 ---------------- */}
      {selectedEquipment && (
        <div className="equipment-modal">
          <div className="equipment-modal__backdrop" onClick={closeModal} />

          <div className="equipment-modal__content">
            
            {/* 헤더 */}
            <div className="equipment-modal__header">
              <h3 className="equipment-modal__title">{selectedEquipment.name}</h3>
              <button className="equipment-modal__close" onClick={closeModal}>×</button>
            </div>

            {/* 바디 */}
            <div className="equipment-modal__body">

              {/* 왼쪽 이미지 */}
              <div className="equipment-modal__image-wrap">
                <img
                  src={getEquipmentImage(selectedEquipment.image)}
                  alt={selectedEquipment.name}
                />
              </div>

              {/* 오른쪽 정보 */}
              <div className="equipment-modal__info">

                {/* 테이블 */}
                <table className="equipment-modal__table">
                  <tbody>
                    <tr>
                      <th>구분</th>
                      <td>{selectedEquipment.category}</td>
                    </tr>
                    <tr>
                      <th>제조사</th>
                      <td>{selectedEquipment.manufacturer}</td>
                    </tr>
                    <tr>
                      <th>크기/구성</th>
                      <td>{selectedEquipment.size}</td>
                    </tr>
                    <tr>
                      <th>성능</th>
                      <td>{selectedEquipment.performance}</td>
                    </tr>
                  </tbody>
                </table>

                {/* 상세영역(비고 포함) */}
                <div className="equipment-modal__detail">
                  {selectedEquipment.note && (
                    <div>{selectedEquipment.note}</div>
                  )}
                  {selectedEquipment.detail && (
                    <div style={{ marginTop: "6px" }}>
                      {selectedEquipment.detail}
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* 하단 버튼 */}
            <div className="equipment-modal__footer">
              <button className="equipment-modal__button" onClick={closeModal}>
                닫기
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
