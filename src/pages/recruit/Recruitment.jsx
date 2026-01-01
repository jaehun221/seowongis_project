import React, { useState, useMemo } from "react";
import "./RecruitmentSection.css";

const TEMP_BENEFITS = [
  "임시 복지 1: 임시 복지 내용이 들어가는 자리입니다.",
  "임시 복지 2: 임시 복지 내용이 들어가는 자리입니다.",
  "임시 복지 3: 임시 복지 내용이 들어가는 자리입니다.",
  "임시 복지 4: 임시 복지 내용이 들어가는 자리입니다.",
];

const TEMP_PROCESS = [
  "임시 채용단계 1: 임시 내용이 들어가는 자리입니다.",
  "임시 채용단계 2: 임시 내용이 들어가는 자리입니다.",
  "임시 채용단계 3: 임시 내용이 들어가는 자리입니다.",
  "임시 채용단계 4: 임시 내용이 들어가는 자리입니다.",
];
const TEMP_HOW_TO_APPLY = [
  "지원방법 : 네비게이션 바에서 채용공고에서 지원하시면 됩니다."
];

const TEMP_JOBS = [
  {
    id: 1,
    title: "임시 채용공고 1",
    team: "임시팀 A",
    type: "임시고용형태1",
    location: "임시지역 1",
    level: "임시레벨 1",
    postedAt: "임시등록일 1",
    tags: ["임시태그1"],
    talent: ["임시 인재상 1-1", "임시 인재상 1-2", "임시 인재상 1-3"],
    responsibilities: [
      "임시 업무내용 1-1",
      "임시 업무내용 1-2",
      "임시 업무내용 1-3",
    ],
    requirements: [
      "임시 자격요건 1-1",
      "임시 자격요건 1-2",
      "임시 자격요건 1-3",
    ],
  },
  {
    id: 2,
    title: "임시 채용공고 2",
    team: "임시팀 B",
    type: "임시고용형태2",
    location: "임시지역 2",
    level: "임시레벨 2",
    postedAt: "임시등록일 2",
    tags: ["임시태그2"],
    talent: ["임시 인재상 2-1", "임시 인재상 2-2", "임시 인재상 2-3"],
    responsibilities: [
      "임시 업무내용 2-1",
      "임시 업무내용 2-2",
      "임시 업무내용 2-3",
    ],
    requirements: [
      "임시 자격요건 2-1",
      "임시 자격요건 2-2",
      "임시 자격요건 2-3",
    ],
  },
  {
    id: 3,
    title: "임시 채용공고 3",
    team: "임시팀 C",
    type: "임시고용형태3",
    location: "임시지역 3",
    level: "임시레벨 3",
    postedAt: "상시채용",
    tags: ["임시태그3"],
    talent: ["임시 인재상 3-1", "임시 인재상 3-2", "임시 인재상 3-3"],
    responsibilities: [
      "임시 업무내용 3-1",
      "임시 업무내용 3-2",
      "임시 업무내용 3-3",
    ],
    requirements: [
      "임시 자격요건 3-1",
      "임시 자격요건 3-2",
      "임시 자격요건 3-3",
    ],
  },
];

const FILTER_TAGS = ["전체", "임시태그1", "임시태그2", "임시태그3"];

export default function RecruitmentSection() {
  const [activeTag, setActiveTag] = useState("전체");
  const [sortBy, setSortBy] = useState("latest");

  const filteredJobs = useMemo(() => {
    let list = [...TEMP_JOBS];

    if (activeTag !== "전체") {
      list = list.filter((job) => job.tags.includes(activeTag));
    }

    if (sortBy === "latest") {
      list.sort((a, b) => (a.postedAt < b.postedAt ? 1 : -1));
    } else {
      list.sort((a, b) => (a.postedAt > b.postedAt ? 1 : -1));
    }

    return list;
  }, [activeTag, sortBy]);

  return (
    <section className="recruitment-section">
      {/* 상단 헤더 */}
      <header className="rec-header">
        <div className="rec-header-left">
          <p className="rec-eyebrow">채용정보(임시)</p>
          <h2 className="rec-title">임시 채용 안내</h2>
          <p className="rec-subtitle">
            이 영역의 모든 텍스트는 임시 값입니다. 실제 복지, 채용과정, 지원방법,
            채용공고로 교체해서 사용하세요.
          </p>
        </div>
        <div className="rec-header-right-only-sort">
          <div className="rec-sort">
            <label>
              정렬
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="latest">임시 최신순</option>
                <option value="oldest">임시 오래된순</option>
              </select>
            </label>
          </div>
        </div>
      </header>

      {/* 복지 / 채용과정 / 지원방법 - 회사연혁 스타일 */}
      <section className="rec-top-timeline">
        <div className="rec-timeline-row">
          <div className="rec-timeline-label">복지</div>
          <div className="rec-timeline-content">
            <ul>
              {TEMP_BENEFITS.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rec-timeline-row">
          <div className="rec-timeline-label">채용 과정</div>
          <div className="rec-timeline-content">
            <ul>
              {TEMP_PROCESS.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rec-timeline-row">
          <div className="rec-timeline-label">지원 방법</div>
          <div className="rec-timeline-content">
            <ul>
              {TEMP_HOW_TO_APPLY.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 태그 필터 */}
      <div className="rec-tags">
        {FILTER_TAGS.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={
              activeTag === tag ? "rec-tag rec-tag--active" : "rec-tag"
            }
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 공고 리스트 */}
      <div className="rec-list">
        {filteredJobs.length === 0 && (
          <div className="rec-empty">
            <p>임시 메시지 1: 조건에 맞는 채용공고가 없습니다.</p>
            <p>임시 메시지 2: 필터를 변경해 주세요.</p>
          </div>
        )}

        {filteredJobs.map((job) => (
          <article key={job.id} className="rec-card rec-card--detail">
            <div className="rec-card-main">
              <div className="rec-card-left">
                <h3 className="rec-card-title">{job.title}</h3>
                <p className="rec-card-meta">
                  {job.team} · {job.location} · {job.level}
                </p>
                <div className="rec-card-tags">
                  <span className="rec-chip rec-chip--type">{job.type}</span>
                  {job.tags.map((t) => (
                    <span key={t} className="rec-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rec-card-info-right">
                <span className="rec-label">임시 등록정보</span>
                <p className="rec-card-date">
                  {job.postedAt === "상시채용"
                    ? "임시 상시채용"
                    : `임시 등록일 · ${job.postedAt}`}
                </p>
              </div>
            </div>

            <div className="rec-card-detail">
              <div className="rec-detail-block">
                <h4>임시 인재상</h4>
                <ul>
                  {job.talent.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rec-detail-block">
                <h4>임시 맡게 될 업무</h4>
                <ul>
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rec-detail-block">
                <h4>임시 자격요건</h4>
                <ul>
                  {job.requirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
