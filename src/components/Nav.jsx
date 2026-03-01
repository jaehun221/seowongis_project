import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuHover = (menuId) => {
    setOpenMenu(menuId);
  };

  const handleMenuLeave = () => {
    setOpenMenu(null);
  };

  const handleLinkClick = () => {
    setOpenMenu(null); // 링크 클릭 시 메뉴 닫기
  };

  return (
    <nav className="nav">
      <ul className="nav-list nav-list--depth1">

        <li className="nav-list__item"
            onMouseEnter={() => handleMenuHover('about')}
            onMouseLeave={handleMenuLeave}>
          <Link to="/about/history" className="link" onClick={handleLinkClick}>
            <span>기업소개</span>
          </Link>
        </li>

        <li className="nav-list__item"
            onMouseEnter={() => handleMenuHover('business')}
            onMouseLeave={handleMenuLeave}>
          <Link to="/business" className="link" onClick={handleLinkClick}>
            <span>주요사업</span>
          </Link>
        </li>

        <li className="nav-list__item"
            onMouseEnter={() => handleMenuHover('equipment')}
            onMouseLeave={handleMenuLeave}>
          <Link to="/equipment" className="link" onClick={handleLinkClick}>
            <span>보유장비</span>
          </Link>
        </li>

        <li className="nav-list__item"
            onMouseEnter={() => handleMenuHover('news')}
            onMouseLeave={handleMenuLeave}>
          <Link to="/news" className="link" onClick={handleLinkClick}>
            <span>게시판</span>
          </Link>
        </li>

        <li className="nav-list__item"
            onMouseEnter={() => handleMenuHover('recruit')}
            onMouseLeave={handleMenuLeave}>
          <Link to="/recruit/recruitment" className="link" onClick={handleLinkClick}>
            <span>인재채용</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
}
