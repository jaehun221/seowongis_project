// src/pages/business/SpatialInfo.jsx
import mainImg from "../../assets/images/business/spatial/main.jpg";
import thumb1 from "../../assets/images/business/spatial/thumb-1.jpg";
import thumb2 from "../../assets/images/business/spatial/thumb-2.jpg";


export default function SpatialInfo() {
  return (
    <div className="business-section-content">
      <div className="business-section-grid">
        <article className="business-text-block">
          <h3 className="business-block-title">공간정보구축 개요</h3>
          <p className="business-paragraph">
            ㈜서원공간정보는 항공측량, UAV·USV, 위성영상, 항공삼각측량(AT),
            DSM, 수치지형도 제작 등 다년간 축적된 노하우를 바탕으로
            고품질의 공간정보를 구축하고 있습니다.
          </p>

          <div className="business-tag-group">
            <span className="business-tag">항공측량</span>
            <span className="business-tag">UAV / USV</span>
            <span className="business-tag">정사영상(Ortho)</span>
            <span className="business-tag">DSM / DTM</span>
            <span className="business-tag">수치지형도</span>
          </div>

          <h4 className="business-list-title">주요 서비스</h4>
          <ul className="business-list">
            <li>GNSS / TS 기반 현황측량 및 지형도, 종·횡단도 작성</li>
            <li>1/1,000 · 1/5,000 축척 수치지형도 및 항공사진도 제작</li>
            <li>항공삼각측량(AT) 및 정사영상 제작</li>
            <li>UAV를 활용한 DSM·Ortho·수치지형도 제작</li>
            <li>대규모 사업지구 공간정보 DB 구축 및 갱신</li>
          </ul>

          <p className="business-paragraph-muted">
            다양한 센서 조합과 정확한 기준점 관리를 통해 지형 변화를
            장기적으로 추적할 수 있는 데이터를 제공합니다.
          </p>
        </article>

        <aside className="business-media-block">
          {/* 여기 src에 실제 이미지 경로만 채워 넣으면 됨 */}
          <div className="business-media-main">
            <img
              src={mainImg}
              alt="공간정보 구축 예시 이미지"
            />
          </div>
          <div className="business-media-row">
            <img
              src={thumb1}
              alt="정사영상 제작 예시"
            />
            <img
              src={thumb2}
              alt="수치지형도 제작 예시"
            />
          </div>
          <p className="business-media-caption">
            항공·드론 영상을 활용한 정사영상 및 수치지형도 제작 사례
          </p>
        </aside>
      </div>
    </div>
  );
}
