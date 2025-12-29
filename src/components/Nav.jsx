import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list nav-list--depth1">

        <li className="nav-list__item">
          <Link to="/about/intro" className="link">
            <span>기업소개</span>
          </Link>
        </li>

        <li className="nav-list__item">
          <Link to="/business" className="link">
            <span>주요사업</span>
          </Link>
        </li>

        <li className="nav-list__item">
          <Link to="/equipment" className="link">
            <span>보유장비</span>
          </Link>
        </li>

        <li className="nav-list__item">
          <Link to="/news" className="link">
            <span>게시판</span>
          </Link>
        </li>

        <li className="nav-list__item">
          <Link to="/recruit/talent_recruitment" className="link">
            <span>인재채용</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
}
