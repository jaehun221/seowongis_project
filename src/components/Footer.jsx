export default function Footer() {
  return (
    <footer id="footer" className="footer">
      {/* footer 전체를 감싸는 full-width 영역 */}
      <div className="footer-inner">

        {/* 정책 링크 */}
        <ul className="footer-policy">
          <li><a href="/policy/privacy">개인정보취급방침</a></li>
          <li><a href="/policy/term">이용약관</a></li>
        </ul>
        <hr></hr>

        {/* 정보 */}
        <div className="footer-text">
          <p>㈜서원공간정보 | 대표: 문중원</p>
          <p>사업자등록번호: 435-81-01752</p>
          <p>주소: 충청남도 서산시 고운로 275-5 동문프라자 207호</p>
          <p>
            Tel: <a href="tel:0416621106">041-662-1106</a> | Fax: 041-663-1109
          </p>
          <p>COPYRIGHT &copy;2019 (주)서원공간정보. All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}
