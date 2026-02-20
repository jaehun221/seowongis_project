// src/pages/about/ManagementGuideline.jsx
import "./management_guideline.css";
import signImage from "../../assets/images/about/sign1.png";

export default function ManagementGuideline() {
  const items = [
    {
      title: "법규 준수 및 시스템 개선",
      content: "관계 법령 및 안전보건 의무를 철저히 이행하고, 경영시스템을 지속적으로 개선한다."
    },
    {
      title: "안전 우선 경영",
      content: "모든 경영 활동의 최우선 순위를 안전보건에 두어 사고 예방에 총력을 다한다."
    },
    {
      title: "참여와 소통",
      content: "임직원과 협력업체 등 모든 이해관계자가 안전 활동에 자유롭게 참여하고 협의하는 문화를 조성한다."
    },
    {
      title: "건강한 근로환경",
      content: "산업재해와 건강장해 예방을 위해 쾌적하고 안전한 근로조건을 제공한다."
    },
    {
      title: "리스크 선제적 관리",
      content: "위험요인을 사전에 제거하여 협력업체와 함께 상생하는 안전한 일터를 만든다."
    },
    {
      title: "맞춤형 시스템 운영",
      content: "당사의 사업 특성(측량, 지반조사 등)에 최적화된 안전보건 경영체계를 구축한다."
    },
    {
      title: "실효성 있는 위험성 평가",
      content: "정기적인 평가를 통해 잠재적 위험을 파악하고 현장 안전사고를 원천 차단한다."
    },
    {
      title: "규정의 점검 및 향상",
      content: "안전보건 관련 규정을 주기적으로 점검하고 보완하여 안전 관리 수준을 지속적으로 높인다."
    }
  ];

  return (
    <section className="mg">
      {/* top banner */}
      <div className="mg-hero">
        <div className="mg-hero__inner">
          <p className="mg-crumb">기업소개 · 경영지침</p>
          <h1 className="mg-title">안전보건 경영방침</h1>
          <p className="mg-lead">
            (주)서원공간정보는 임직원의 안전과 생명을 경영의 최우선 가치로 삼으며, 안전한 작업 환경 조성을 위해 다음과 같은 원칙을 준수합니다.
          </p>
          {/* ✅ 칩(법규 준수/위험성 평가/지속 개선) 제거 */}
        </div>
      </div>

      {/* content */}
      <div className="mg-wrap">
        {/* ✅ 왼쪽 사이드 제거 → 한 컬럼 */}
        <div className="mg-single">
          <article className="mg-section">
            <h2 className="mg-h2">[8대 안전보건 실천 원칙]</h2>
            <p className="mg-desc">
              본 원칙은 서원공간정보의 모든 임직원이 공유하고 준수해야 할 기본 방침이며,
              회사는 이를 성실히 이행합니다.
            </p>

            <ol className="mg-list">
              {items.map((item, i) => (
                <li key={i} className="mg-item">
                  <span className="mg-num">{i + 1}.</span>
                  <div className="mg-text">
                    <strong>{item.title}:</strong> {item.content}
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <div className="mg-signBox">
            <div>
              <p className="mg-org">주식회사 서원공간정보</p>
              <p className="mg-ceo">
                대표이사 <strong>문중원</strong>
              </p>
              <p className="mg-dateLine">2025.12.01</p>
            </div>
            <img className="mg-signImg" src={signImage} alt="대표이사 서명" />
          </div>
        </div>
      </div>
    </section>
  );
}
