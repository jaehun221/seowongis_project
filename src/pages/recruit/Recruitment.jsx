import React from "react";
import "./RecruitmentSection.css";

const PROCESS_STEPS = [
  { num: "01", label: "서류전형", sub: "Document Screening" },
  { num: "02", label: "실무자 면접", sub: "Working Interview" },
  { num: "03", label: "임원 면접", sub: "Executive Interview" },
  { num: "04", label: "최종 합격", sub: "Final Acceptance" },
];

const WELFARE_ITEMS = [
  { icon: "📋", title: "4대보험", desc: "국민건강보험, 국민연금보험, 고용보험, 산재보험" },
  { icon: "💼", title: "퇴직연금", desc: "안정적인 노후 대비" },
  { icon: "✈️", title: "휴가제도", desc: "연차, 월차, 하계, 산전후 휴가, 육아휴직" },
  { icon: "🎉", title: "경조사", desc: "경조휴가, 경조사비 지원" },
  { icon: "🏆", title: "포상제도", desc: "우수사원, 장기근속자 표창" },
  { icon: "🍽️", title: "회식지원", desc: "부서별 단합 회식" },
  { icon: "🏕️", title: "워크샵", desc: "전직원 화합과 소통 단합대회" },
  { icon: "💰", title: "수당지원", desc: "출장 근무시 수당지원" },
  { icon: "🚕", title: "업무지원", desc: "야근식대 및 업무 택시비 지원" },
  { icon: "📚", title: "교육지원", desc: "업무관련 자기계발비 지원" },
];

const NOTICE_ITEMS = [
  "입사지원서는 반드시 당사 양식을 사용하여 작성해 주십시오.",
  "제출된 서류는 반환하지 않으며, 기재 내용이 사실과 다를 경우 합격이 취소될 수 있습니다.",
  "국가유공자 및 장애인은 관련 법령에 의거하여 우대합니다.",
  "문의사항은 아래 채용문의 연락처로 연락 바랍니다.",
];

export default function RecruitmentSection() {
  return (
    <div className="recruit-page">
      <section className="recruit-hero">
        <div className="recruit-container">
          <span className="recruit-hero__label">Recruitment</span>
          <h1 className="recruit-hero__title">인재채용</h1>
          <p className="recruit-hero__desc">
            서원공간정보는 미래를 향해 끊임없이 도전하고, 긍정적인 생각을 가지고
            자신의 일에 최선을 다하는 인재를 필요로 합니다.
          </p>
        </div>
      </section>

      <section className="recruit-process">
        <div className="recruit-container">
          <h2 className="recruit-process__title">채용과정</h2>
          <div className="recruit-process__steps">
            {PROCESS_STEPS.map((step, idx) => (
              <React.Fragment key={step.num}>
                {idx > 0 && <div className="recruit-step-arrow" />}
                <div className="recruit-step">
                  <div className="recruit-step__circle">{step.num}</div>
                  <div className="recruit-step__text">
                    <span className="recruit-step__label">{step.label}</span>
                    <span className="recruit-step__sublabel">{step.sub}</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="recruit-welfare">
        <div className="recruit-container">
          <h2 className="recruit-welfare__title">인사복지</h2>
          <p className="recruit-welfare__subtitle">
            서원공간정보는 임직원의 안정적인 근무환경과 삶의 질 향상을 위해
            다양한 복리후생 제도를 운영하고 있습니다.
          </p>
          <div className="recruit-welfare__grid">
            {WELFARE_ITEMS.map((item) => (
              <div className="welfare-card" key={item.title}>
                <div className="welfare-card__icon">{item.icon}</div>
                <h3 className="welfare-card__title">{item.title}</h3>
                <p className="welfare-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="recruit-apply">
        <div className="recruit-container">
          <h2 className="recruit-apply__title">지원방법</h2>
          <p className="recruit-apply__desc">
            당사 입사지원서 양식을 다운받아 작성 후, 이메일로 발송해주시면 빠른
            시일내에 검토 후 서류전형 합격자에 한하여 개별 인터뷰를 진행합니다.
          </p>
          <div className="recruit-apply__notice">
            <h3 className="recruit-apply__notice-title">
              지원서 작성 시 유의사항
            </h3>
            <ul className="recruit-apply__notice-list">
              {NOTICE_ITEMS.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="recruit-apply__boxes">
            <div className="apply-box">
              <div className="apply-box__icon">📄</div>
              <div className="apply-box__label">입사지원서</div>
              <div className="apply-box__value">DOWNLOAD</div>
            </div>
            <div className="apply-box">
              <div className="apply-box__icon">✉️</div>
              <div className="apply-box__label">이메일</div>
              <div className="apply-box__value">recruit@seowongis.com</div>
            </div>
            <div className="apply-box">
              <div className="apply-box__icon">📞</div>
              <div className="apply-box__label">채용문의</div>
              <div className="apply-box__value">000-0000-0000</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
