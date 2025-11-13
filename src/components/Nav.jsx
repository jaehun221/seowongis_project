export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list nav-list--depth1">
        <li className="nav-list__item"><a href="/about/intro" className="link"><span>About</span></a></li>
        <li className="nav-list__item"><a href="/business/business_1" className="link"><span>Business</span></a></li>
        <li className="nav-list__item"><a href="/equipment/equipment" className="link"><span>Equipment</span></a></li>
        <li className="nav-list__item"><a href="/news/news" className="link"><span>News</span></a></li>
        <li className="nav-list__item"><a href="/recruit/talent_recruitment" className="link"><span>Recruit</span></a></li>
      </ul>
    </nav>
  );
}
