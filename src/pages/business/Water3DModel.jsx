// src/pages/business/Water3DModel.jsx
export default function Water3DModel() {
  return (
    <div className="business-section-content">
      <div className="business-section-grid">
        <article className="business-text-block">
          <h3 className="business-block-title">
            수원지 및 주변 지형 3차원 데이터 구축
          </h3>
          <p className="business-paragraph">
            무인수심측량선과 드론을 활용하여 저수지·댐·수원지의 수심과
            주변 지형을 동시에 3차원 데이터로 구축합니다. 수질·수량
            관리뿐만 아니라 시설물 안전진단, 저수 용량 분석 등에 활용할 수
            있습니다.
          </p>

          <h4 className="business-list-title">업무 절차</h4>
          <ol className="business-list business-list-number">
            <li>대상 수역 및 주변 지형 조사, 장비 구성</li>
            <li>무인선(USV)을 이용한 수심 측량 및 궤적 기록</li>
            <li>드론을 활용한 정사영상 및 지형 촬영</li>
            <li>수심·지형 데이터를 통합한 3D 모델 생성</li>
            <li>수심도, 용량 계산, 단면도 등 산출물 작성</li>
          </ol>

          <h4 className="business-list-title">대표 산출물</h4>
          <ul className="business-list business-list-inline">
            <li>정사영상 + 항적 수심도</li>
            <li>3D 지형·저수지 모델</li>
            <li>수심 분포도 · 용량 분석도</li>
          </ul>
        </article>

        <aside className="business-media-block">
          <div className="business-media-main">
            <img
              src="/assets/images/business/water3d/main.jpg"
              alt="수원지 3D 지형 모델"
            />
          </div>
          <div className="business-media-row">
            <img
              src="/assets/images/business/water3d/usv.jpg"
              alt="무인수심측량선 운용 예시"
            />
            <img
              src="/assets/images/business/water3d/terrain.jpg"
              alt="정사영상과 수심 데이터를 결합한 예시"
            />
          </div>
          <p className="business-media-caption">
            무인선 수심측량과 드론 촬영을 결합한 3차원 수역 데이터 구축
          </p>
        </aside>
      </div>
    </div>
  );
}
