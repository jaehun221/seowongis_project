import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list nav-list--depth1">

        <li className="nav-list__item">
          <Link to="/about/intro" className="link">
            <span>About</span>
          </Link>
        </li>

        <li className="nav-list__item">
          <Link to="/business/business_1" className="link">
            <span>Business</span>
          </Link>
        </li>

        <li className="nav-list__item">
          <Link to="/equipment" className="link">
            <span>Equipment</span>
          </Link>
        </li>

        <li className="nav-list__item">
          <Link to="/news" className="link">
            <span>News</span>
          </Link>
        </li>

        <li className="nav-list__item">
          <Link to="/recruit/talent_recruitment" className="link">
            <span>Recruit</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
}
