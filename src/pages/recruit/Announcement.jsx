import React, { useState } from "react";
import "./AnnouncementSection.css";

const JOB_TAGS = ["임시태그1", "임시태그2", "임시태그3", "임시태그4", "임시태그5"];

const JOBS = [
  {
    id: 1,
    title: "임시포지션1",
    type: "임시고용형태1",
    level: "임시레벨1",
    location: "임시지역1",
    stack: ["스택1", "스택2", "스택3"],
    tag: "임시태그1",
  },
  {
    id: 2,
    title: "임시포지션2",
    type: "임시고용형태2",
    level: "임시레벨2",
    location: "임시지역2",
    stack: ["스택1", "스택2", "스택3"],
    tag: "임시태그2",
  },
  {
    id: 3,
    title: "임시포지션3",
    type: "임시고용형태3",
    level: "임시레벨3",
    location: "임시지역3",
    stack: ["스택1", "스택2", "스택3"],
    tag: "임시태그3",
  },
];

export default function RecruitmentSection() {
  const [activeTag, setActiveTag] = useState("ALL");

  const filteredJobs =
    activeTag === "ALL"
      ? JOBS
      : JOBS.filter((job) => job.tag === activeTag);

  return (
    <section className="recruitment-section">
      {/* 헤더 */}
      <div className="recruitment-header">
        <span className="badge">
          <span className="badge-dot" />
          Always Hiring · 상시채용
        </span>
        <h2>
          함께 성장할 인재를 <span className="highlight">상시</span>로 기다립니다.
        </h2>
        <p>
          특정 공고가 없어도, 좋은 동료는 먼저 모십니다. 포지션에 딱 맞지 않아도
          편하게 이력서를 보내 주세요.
        </p>
      </div>

      {/* 태그 필터 */}
      <div className="recruitment-filter">
        <button
          type="button"
          onClick={() => setActiveTag("ALL")}
          className={
            activeTag === "ALL"
              ? "filter-btn filter-btn--active"
              : "filter-btn"
          }
        >
          전체
        </button>
        {JOB_TAGS.map((tag) => (
          <button
            type="button"
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={
              activeTag === tag ? "filter-btn filter-btn--active" : "filter-btn"
            }
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 채용 카드 리스트 */}
      <div className="recruitment-list">
        {filteredJobs.map((job) => (
          <article key={job.id} className="recruitment-card">
            <div className="card-top">
              <h3>{job.title}</h3>
              <span className="always-open">
                <span className="always-dot" />
                Always open
              </span>
            </div>

            <p className="meta">
              {job.location} · {job.level}
            </p>

            <div className="chips">
              <span className="chip chip--type">{job.type}</span>
              <span className="chip chip--tag">{job.tag}</span>
            </div>

            <div className="stack">
              {job.stack.map((s) => (
                <span key={s} className="stack-item">
                  {s}
                </span>
              ))}
            </div>

            <div className="card-bottom">
              <p>이 포지션이 애매해도, 비슷한 역할로 제안드릴 수 있어요.</p>
              <button type="button" className="apply-btn">
                이력서 보내기
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* 하단 문구 */}
      <p className="recruitment-footer">
        공개된 포지션 외에도{" "}
        <span className="highlight">상시로 포트폴리오 / 자기소개</span>를 받고
        있습니다. “나 이런 거 잘함” 정도만 보내 주셔도 충분합니다.
      </p>
    </section>
  );
}
