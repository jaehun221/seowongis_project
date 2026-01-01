// src/pages/business/TechTransfer.jsx
import mainImg from "../../assets/images/business/tech/main.jpg";
import thumb1 from "../../assets/images/business/tech/classroom-1.jpg";
import thumb2 from "../../assets/images/business/tech/classroom-2.jpg";

export default function TechTransfer() {
  return (
    <div className="business-section-content">
      <div className="business-section-grid">
        <article className="business-text-block">
          <h3 className="business-block-title">수치도화기 판매 및 기술이전</h3>
          <p className="business-paragraph">
            서원공간정보는 수치도화기 및 관련 소프트웨어를 공급하고,
            교육·실습을 통한 기술이전을 함께 제공하여 학교·기관의 공간정보
            교육과 실무 활용 능력을 높이고 있습니다.
          </p>

          <h4 className="business-list-title">제공 서비스</h4>
          <ul className="business-list">
            <li>수치도화기 및 관련 장비 공급</li>
            <li>설치·환경 구성 및 초기 세팅 지원</li>
            <li>기본 교육(도화 이론, 장비 사용법)</li>
            <li>실무 중심의 실습 교육 및 커리큘럼 제안</li>
            <li>장비 운영·유지관리 컨설팅</li>
          </ul>

          <h4 className="business-list-title">협력 사례</h4>
          <ul className="business-list business-list-inline">
            <li>충남 논산공업고등학교 수치도화기 기자재 납품</li>
            <li>도화기능사 양성 MOU 체결 및 교육과정 운영</li>
          </ul>
        </article>

        <aside className="business-media-block">
          <div className="business-media-main">
            <img
              src={mainImg}
              alt="수치도화 교육 및 실습 현장"
            />
          </div>
          <div className="business-media-row">
            <img
              src={thumb1}
              alt="도화 교육 실습 예시 1"
            />
            <img
              src={thumb2}
              alt="도화 교육 실습 예시 2"
            />
          </div>
          <p className="business-media-caption">
            학교·기관과의 협력을 통한 공간정보 인력 양성 및 기술이전
          </p>
        </aside>
      </div>
    </div>
  );
}
