// src/pages/business/DroneLiDAR.jsx
import mainImg from "../../assets/images/business/lidar/main.jpg";
import thumb1 from "../../assets/images/business/lidar/detail-1.jpg";
import thumb2 from "../../assets/images/business/lidar/detail-2.jpg";

export default function DroneLiDAR() {
  return (
    <div className="business-section-content">
      <div className="business-section-grid">
        <article className="business-text-block">
          <h3 className="business-block-title">드론 LiDAR 측량</h3>
          <p className="business-paragraph">
            LiDAR 센서를 탑재한 드론을 이용해 산림·도시·시설물을
            고정밀 3차원 포인트클라우드로 취득합니다. 수목, 지표, 구조물
            등을 분리하여 분석할 수 있어 정밀 지형·지물 관리에 적합합니다.
          </p>

          <h4 className="business-list-title">기술 특징</h4>
          <ul className="business-list">
            <li>Light Detection And Ranging 기반 거리·형상 측정</li>
            <li>항공사진 대비 수목 하부 지형까지 표현 가능한 고밀도 데이터</li>
            <li>실시간 3D, GIS 구축, 재난 대응, 인프라 관리 등에 활용</li>
            <li>산림 구조 분석, 임도 계획, 절·성토 위험구간 분석 등에 적용</li>
          </ul>

          <h4 className="business-list-title">산출물</h4>
          <ul className="business-list business-list-inline">
            <li>포인트클라우드(색채·강도 정보 포함)</li>
            <li>고정밀 DSM/DTM</li>
            <li>수관고 지도 및 산림분류도</li>
            <li>3D 모델 및 단면도</li>
          </ul>
        </article>

        <aside className="business-media-block">
          <div className="business-media-main">
            <img
              src={mainImg}
              alt="LiDAR 기반 산림 3D 모델"
            />
          </div>
          <div className="business-media-row">
            <img
              src={thumb1}
              alt="LiDAR 산림 촬영 상세 예시"
            />
            <img
              src={thumb2}
              alt="DSM 생성 결과 예시"
            />
          </div>
          <p className="business-media-caption">
            LiDAR 데이터로 생성한 산림·지형 포인트클라우드 및 DSM 예시
          </p>
        </aside>
      </div>
    </div>
  );
}
