// src/pages/business/GroundInvestigation.jsx
import mainImg from "../../assets/images/business/ground/main.jpg";
import thumb1 from "../../assets/images/business/ground/drill.jpg";
import thumb2 from "../../assets/images/business/ground/downhole.jpg";

export default function GroundInvestigation() {
  return (
    <div className="business-section-content">
      <div className="business-section-grid">
        <article className="business-text-block">
          <h3 className="business-block-title">지반조사 및 Down-Hole Test</h3>
          <p className="business-paragraph">
            건축·토목 구조물의 안전한 설계와 시공을 위해 지반 특성을
            파악하는 각종 조사 및 시험을 수행합니다. 시추조사, 지반탄성파
            측정, Down-Hole Test 등을 통해 설계에 필요한 공학적 지반
            정보를 제공합니다.
          </p>

          <h4 className="business-list-title">주요 업무</h4>
          <ul className="business-list">
            <li>시추조사 및 시추 장비 운영</li>
            <li>P·S파 탄성파 측정을 통한 전단파 속도 산정</li>
            <li>Down-Hole Test 모식도 설계 및 시험 수행</li>
            <li>지반층 분류, N값·전단파 속도 기반 지반 정수 도출</li>
          </ul>

          <h4 className="business-list-title">활용 분야</h4>
          <ul className="business-list business-list-inline">
            <li>건축물·교량·옹벽 등 구조물 기초 설계</li>
            <li>지진응답 분석 및 지반 등급 평가</li>
            <li>노후 시설물 보강 설계</li>
          </ul>
        </article>

        <aside className="business-media-block">
          <div className="business-media-main">
            <img
              src={mainImg}
              alt="지반조사 시추장비와 탐사장비"
            />
          </div>
          <div className="business-media-row">
            <img
              src={thumb1}
              alt="시추조사 장비 예시"
            />
            <img
              src={thumb2}
              alt="Down-Hole Test 모식도 및 장비"
            />
          </div>
          <p className="business-media-caption">
            시추조사와 지반탄성파 시험을 통한 정밀 지반 특성 평가
          </p>
        </aside>
      </div>
    </div>
  );
}
