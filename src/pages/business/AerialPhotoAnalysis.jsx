// src/pages/business/AerialPhotoAnalysis.jsx
import mainImg from "../../assets/images/business/aerial-analysis/main.jpg";
import thumb1 from "../../assets/images/business/aerial-analysis/past.jpg";
import thumb2 from "../../assets/images/business/aerial-analysis/current.jpg";
export default function AerialPhotoAnalysis() {
  return (
    <div className="business-section-content">
      <div className="business-section-grid">
        <article className="business-text-block">
          <h3 className="business-block-title">항공사진 판독 및 변화 분석</h3>
          <p className="business-paragraph">
            과거와 현재의 항공사진을 비교·분석하여 지형·토지이용·시설물의
            변화를 판독합니다. 불법 건축물, 훼손지역, 산림 변화 등
            시간에 따른 변화를 정량적으로 제시할 수 있습니다.
          </p>

          <h4 className="business-list-title">주요 업무</h4>
          <ul className="business-list">
            <li>과거·현시점 항공사진 비교를 통한 변화 판독</li>
            <li>불법 건축물 및 무단 형질변경 의심 지역 조사</li>
            <li>산림지역 석외선 촬영 및 산림 분석</li>
            <li>항공사진 기준점 측량 및 수치도화</li>
          </ul>

          <h4 className="business-list-title">활용 분야</h4>
          <ul className="business-list business-list-inline">
            <li>도시계획 및 개발 행위 관리</li>
            <li>환경·산림 모니터링</li>
            <li>하천·해안선 변화 분석</li>
            <li>도로 및 기반시설 유지관리</li>
          </ul>
        </article>

        <aside className="business-media-block">
          <div className="business-media-main tall">
            <img
              src={mainImg}
              alt="항공사진 판독 및 변화 분석 결과"
            />
          </div>
          <div className="business-media-row">
            <img
              src={thumb1}
              alt="과거 항공사진 예시"
            />
            <img
              src={thumb2}
              alt="현재 항공사진 예시"
            />
          </div>
          <p className="business-media-caption">
            과거·현재 항공영상을 중첩하여 변화 지역을 직관적으로 파악
          </p>
        </aside>
      </div>
    </div>
  );
}
        