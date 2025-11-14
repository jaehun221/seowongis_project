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

  // ---------------- 항공측량 ----------------
  {
    id: 6,
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
