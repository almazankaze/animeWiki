import "../styles/SideNav.css";

const SideNav = () => {
  return (
    <nav className="sidenav">
      <div className="links">
        <div className="link">
          <h2>Categories</h2>
        </div>
        <div className="link">
          <h2>Upcoming</h2>
        </div>
        <div className="link">
          <h2>Ongoing</h2>
        </div>
        <div className="link">
          <h2>Popular</h2>
        </div>
      </div>
      <div className="pro">
        <h2>Join pro for free games.</h2>
      </div>
    </nav>
  );
};

export default SideNav;
