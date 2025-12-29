// src/pages/about/ManagementGuideline.jsx
import "./management_guideline.css";

export default function ManagementGuideline() {
  const items = [
    "관계 법령 및 안전보건 준수 의무사항을 철저히 이행하며, 안전보건경영시스템을 체계적으로 실행하고 지속적으로 개선한다.",
    "모든 경영활동의 최일선에 안전보건을 우선 적용하여 사고 예방과 근로자 보호를 최우선으로 고려한다.",
    "모든 임직원 및 협력업체, 이해관계자가 안전보건경영 활동에 적극적으로 참여하고 협의할 수 있는 환경을 조성한다.",
    "업무와 관련된 산업재해 및 건강장해를 예방하기 위하여 안전하고 건강한 근로조건을 제공하도록 지속적으로 노력한다.",
    "위험요인을 사전에 제거하고 안전보건 리스크를 체계적으로 관리하여 임직원 및 협력업체와 함께 상생할 수 있는 안전한 일터를 조성한다.",
    "당사의 조직 및 사업 특성에 부합하는 체계적인 안전보건경영시스템을 구축·운영한다.",
    "실효성 있는 위험성 평가를 정기적으로 실시하여 잠재적인 위험을 사전에 파악하고 안전사고를 예방한다.",
    "안전보건 운영 및 관리와 관련된 규정과 절차를 지속적으로 점검·개선하여 안전보건 수준을 향상시킨다.",
  ];

  return (
    <section className="mg">
      {/* top banner */}
      <div className="mg-hero">
        <div className="mg-hero__inner">
          <p className="mg-crumb">기업소개 · 경영지침</p>
          <h1 className="mg-title">안전보건 경영지침</h1>
          <p className="mg-lead">
            서원공간정보는 안전보건을 경영의 최우선 가치로 삼고, 임직원과 이해관계자가
            함께 참여하는 안전보건경영시스템을 실행·개선하여 안전한 일터를 조성합니다.
          </p>
          {/* ✅ 칩(법규 준수/위험성 평가/지속 개선) 제거 */}
        </div>
      </div>

      {/* content */}
      <div className="mg-wrap">
        {/* ✅ 왼쪽 사이드 제거 → 한 컬럼 */}
        <div className="mg-single">
          <article className="mg-section">
            <h2 className="mg-h2">지침</h2>
            <p className="mg-desc">
              본 지침은 서원공간정보의 모든 임직원이 공유하고 준수해야 할 기본 원칙이며,
              회사는 이를 성실히 이행합니다.
            </p>

            <ol className="mg-list">
              {items.map((t, i) => (
                <li key={i} className="mg-item">
                  {/* ✅ 숫자 박스 제거 → 파란 숫자만 */}
                  <span className="mg-num">{i + 1}.</span>
                  <p className="mg-text">{t}</p>
                </li>
              ))}
            </ol>
          </article>

          <div className="mg-signBox">
            <div className="mg-signTop">
              <div>
                <p className="mg-org">주식회사 서원공간정보</p>
                <p className="mg-ceo">
                  대표이사 <strong>문중원</strong>
                </p>
                <p className="mg-dateLine">2025.12.01</p>
              </div>

              {/* 서명 이미지 넣으면 주석 해제 */}
              {/* <img className="mg-signImg" src="/images/signature.png" alt="대표이사 서명" /> */}
            </div>

            <div className="mg-signArea">
              <span>서명(Signature)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
