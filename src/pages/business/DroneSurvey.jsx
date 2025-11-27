// src/pages/business/DroneSurvey.jsx
export default function DroneSurvey() {
  return (
    <div className="business-section-content">
      <div className="business-section-grid">
        <article className="business-text-block">
          <h3 className="business-block-title">드론측량 및 항공사진 촬영</h3>
          <p className="business-paragraph">
            UAV 드론과 항공사진 측량 기술을 결합하여 넓은 지역을
            고해상도로 촬영하고, 정밀한 수치지형과 정사영상을 제작합니다.
            현장 상황을 빠르게 파악해야 하는 사업에 적합합니다.
          </p>

          <h4 className="business-list-title">드론 수치지형도 제작 절차</h4>
          <ol className="business-list business-list-number">
            <li>비행 계획 수립 및 기준점 측량</li>
            <li>드론/항공사진 촬영</li>
            <li>사진기준점 측량 및 보정</li>
            <li>수치도화 및 편집</li>
            <li>정사영상, 수치지형도, 3D 모델 생성</li>
          </ol>

          <h4 className="business-list-title">적용 분야</h4>
          <ul className="business-list">
            <li>개발사업지 및 택지 조성 현황 파악</li>
            <li>산지 · 절·성토 구간 안전관리</li>
            <li>하천 · 제방 · 수변지역 모니터링</li>
            <li>골프장, 공원, 산업단지 등 넓은 부지 관리</li>
          </ul>
        </article>

        <aside className="business-media-block">
          <div className="business-media-main">
            <img
              src="/assets/images/business/drone/main.jpg"
              alt="드론을 활용한 항공사진 촬영 및 수치지형도 제작"
            />
          </div>
          <div className="business-media-row">
            <img
              src="/assets/images/business/drone/step-1.jpg"
              alt="촬영 및 비행 계획 예시"
            />
            <img
              src="/assets/images/business/drone/step-2.jpg"
              alt="정사영상과 수치지형도 결과"
            />
          </div>
          <p className="business-media-caption">
            드론 촬영부터 수치지형도·정사영상 제작까지 일관된 작업 수행
          </p>
        </aside>
      </div>
    </div>
  );
}
