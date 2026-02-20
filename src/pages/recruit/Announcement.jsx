import React, { useState } from "react";
import "./AnnouncementSection.css";

const ANNOUNCEMENTS = [
  { id: 1, title: "[서원공간정보] 2025년 신입/경력사원 수시 채용", hasFile: true, date: "2025.03.27", views: 1250 },
];

const TOTAL_PAGES = 1;
const CURRENT_PAGE = 1;

export default function RecruitmentSection() {
  const [searchType, setSearchType] = useState("title");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const selectedPost = ANNOUNCEMENTS.find((a) => a.id === selectedId);

  return (
    <div className="announce-page">
      <section className="announce-hero">
        <div className="announce-container">
          <span className="announce-hero__label">Recruitment</span>
          <h1 className="announce-hero__title">채용공고</h1>
          <p className="announce-hero__desc">
            서원공간정보의 채용 관련 공고사항을 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      {selectedPost ? (
        <section className="announce-board">
          <div className="announce-container">
            <div className="announce-detail">
              <div className="announce-detail__header">
                <h2 className="announce-detail__title">{selectedPost.title}</h2>
                <div className="announce-detail__meta">
                  <span className="announce-detail__meta-item">
                    <span className="announce-detail__meta-label">작성자</span>
                    <span className="announce-detail__meta-value">관리자</span>
                  </span>
                  <span className="announce-detail__meta-divider" />
                  <span className="announce-detail__meta-item">
                    <span className="announce-detail__meta-label">등록일</span>
                    <span className="announce-detail__meta-value">2025-03-27</span>
                  </span>
                </div>
              </div>

              <div className="announce-detail__file">
                <span className="announce-detail__file-label">첨부파일</span>
                <a
                  className="announce-detail__file-name"
                  href="/files/서원공간정보_입사지원서.hwp"
                  download
                >
                  (주)서원공간정보_입사지원서.hwp
                </a>
              </div>

              <div className="announce-detail__body">
                <p>안녕하세요, 서원공간정보입니다.</p>
                <p>2025년 신입/경력사원 수시 채용 기간입니다.</p>
                <p>
                  서원공간정보와 함께 성장할 인재를 모십니다.
                  <br />
                  많은 지원 부탁드립니다.
                </p>
              </div>

              <div className="announce-detail__actions">
                <button
                  type="button"
                  className="announce-detail__list-btn"
                  onClick={() => setSelectedId(null)}
                >
                  목록
                </button>
              </div>

              <div className="announce-detail__nav">
                <div className="announce-detail__nav-row">
                  <span className="announce-detail__nav-label">이전</span>
                  <span className="announce-detail__nav-text">이전글이 없습니다.</span>
                </div>
                <div className="announce-detail__nav-row">
                  <span className="announce-detail__nav-label">다음</span>
                  <span className="announce-detail__nav-text">다음글이 없습니다.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="announce-board">
          <div className="announce-container">
            <div className="announce-table-wrap">
              <table className="announce-table">
                <thead>
                  <tr>
                    <th className="announce-th--no">NO</th>
                    <th className="announce-th--title">제목</th>
                    <th className="announce-th--file">첨부파일</th>
                    <th className="announce-th--date">등록일</th>
                    <th className="announce-th--views">조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {ANNOUNCEMENTS.length > 0 ? (
                    ANNOUNCEMENTS.map((item) => (
                      <tr key={item.id}>
                        <td className="announce-td--no">{item.id}</td>
                        <td
                          className="announce-td--title"
                          onClick={() => setSelectedId(item.id)}
                        >
                          {item.title}
                        </td>
                        <td className="announce-td--file">
                          {item.hasFile ? "📎" : ""}
                        </td>
                        <td className="announce-td--date">{item.date}</td>
                        <td className="announce-td--views">
                          {item.views.toLocaleString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="announce-empty">
                      <td colSpan={5}>등록된 채용공고가 없습니다.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <nav className="announce-pagination">
              <button
                type="button"
                className="announce-page-btn announce-page-btn--arrow announce-page-btn--disabled"
                aria-label="이전"
              >
                ‹
              </button>
              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    type="button"
                    key={page}
                    className={`announce-page-btn${
                      page === CURRENT_PAGE ? " announce-page-btn--active" : ""
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                type="button"
                className="announce-page-btn announce-page-btn--arrow announce-page-btn--disabled"
                aria-label="다음"
              >
                ›
              </button>
            </nav>

            <div className="announce-search">
              <div className="announce-search__row">
                <select
                  className="announce-search__select"
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                >
                  <option value="title">제목</option>
                  <option value="content">내용</option>
                </select>
                <input
                  type="text"
                  className="announce-search__input"
                  placeholder="검색어를 입력하세요"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="button" className="announce-search__btn">
                  검색
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
