import "../styles/SideNav.css";

const SideNav = () => {
  return (
    <nav className="sidenav">
      <div class="links">
        <div class="link">
          <h2>Categories</h2>
        </div>
        <div class="link">
          <h2>Upcoming</h2>
        </div>
        <div class="link">
          <h2>Ongoing</h2>
        </div>
        <div class="link">
          <h2>Popular</h2>
        </div>
      </div>
      <div class="pro">
        <h2>Join pro for free games.</h2>
      </div>
    </nav>
  );
};

export default SideNav;
