// src/pages/business/UndergroundSurvey.jsx
export default function UndergroundSurvey() {
  return (
    <div className="business-section-content">
      <div className="business-section-grid">
        <article className="business-text-block">
          <h3 className="business-block-title">지하시설물측량 개요</h3>
          <p className="business-paragraph">
            상수, 하수, 가스, 전기, 통신, 난방, 송유관 등 도시 기반을
            구성하는 8대 지하시설물에 대해 정밀한 측량·조사·탐사를
            수행합니다. 신규 시공과 유지관리, 재해 대비를 위한 기초 자료를
            생산합니다.
          </p>

          <h4 className="business-list-title">업무 프로세스</h4>
          <ol className="business-list business-list-number">
            <li>기존 도면·시설물 조사 및 현장 기초조사</li>
            <li>탐사 장비를 활용한 관로·시설물 위치 탐지</li>
            <li>야장 작성 및 기준점·참조점 측량</li>
            <li>정위치 편집 및 속성정보 입력</li>
            <li>지하시설물 DB 구축 및 도면 작성</li>
          </ol>

          <h4 className="business-list-title">주요 대상 시설</h4>
          <ul className="business-list business-list-inline">
            <li>상수관로</li>
            <li>하수관로</li>
            <li>LPG 가스관로</li>
            <li>오수관로</li>
            <li>전기관로</li>
            <li>통신관로</li>
            <li>도로시설물</li>
            <li>열수송관</li>
          </ul>

          <p className="business-paragraph-muted">
            준공·유지관리 단계에서 바로 활용 가능한 도면과 DB를 제공하여
            발주처의 관리 비용과 리스크를 줄입니다.
          </p>
        </article>

        <aside className="business-media-block">
          <div className="business-media-main tall">
            <img
              src="/assets/images/business/underground/main.jpg"
              alt="지하시설물 측량 현장 사진"
            />
          </div>
          <div className="business-media-row">
            <img
              src="/assets/images/business/underground/map-1.jpg"
              alt="지하시설물 도면 예시"
            />
            <img
              src="/assets/images/business/underground/map-2.jpg"
              alt="지하시설물 정위치 도면 예시"
            />
          </div>
          <p className="business-media-caption">
            측량·탐사·정위치 편집을 거쳐 구축되는 지하시설물 데이터
          </p>
        </aside>
      </div>
    </div>
  );
}
