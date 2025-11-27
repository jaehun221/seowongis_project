// src/pages/business/LandUseDB.jsx
export default function LandUseDB() {
  return (
    <div className="business-section-content">
      <div className="business-section-grid">
        <article className="business-text-block">
          <h3 className="business-block-title">
            연속지적도 및 용도지역·지구 DB 정비
          </h3>
          <p className="business-paragraph">
            지적 재조사 사업과 연계하여 연속지적도, 용도지역·지구, 도시·
            하천구역 등의 경계를 최신 상태로 유지하는 데이터베이스를
            구축합니다.
          </p>

          <h4 className="business-list-title">주요 내용</h4>
          <ul className="business-list">
            <li>지적재조사 대상지역에 대한 경계·지번 변화 반영</li>
            <li>용도지역·지구 변경 사항 수집 및 공간정보화</li>
            <li>도시지역·비도시지역, 하천구역 경계 정비</li>
            <li>속성·도면 일치 검수 및 품질관리</li>
          </ul>

          <h4 className="business-list-title">기대 효과</h4>
          <ul className="business-list business-list-inline">
            <li>행정업무용 연속지적도 신뢰도 향상</li>
            <li>개발행위 허가·도시계획 심의 시 최신 정보 활용</li>
            <li>국가·지자체 공간정보 표준과의 정합성 확보</li>
          </ul>
        </article>

        <aside className="business-media-block">
          <div className="business-media-main">
            <img
              src="/assets/images/business/landuse/main.jpg"
              alt="연속지적도 및 용도지역·지구 DB 정비 예시"
            />
          </div>
          <div className="business-media-row">
            <img
              src="/assets/images/business/landuse/city-change.jpg"
              alt="도시지역 경계 변경 예시"
            />
            <img
              src="/assets/images/business/landuse/river-change.jpg"
              alt="하천구역 변경 예시"
            />
          </div>
          <p className="business-media-caption">
            지적·용도지역·지구 정보를 통합한 연속지적도 DB 구축 사례
          </p>
        </aside>
      </div>
    </div>
  );
}
