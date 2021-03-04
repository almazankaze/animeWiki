import "../styles/Modal.css";
import { Link } from "react-router-dom";

const Modal = ({ isClicked, closeMenu }) => {
  return (
    <div className={`${isClicked ? "show-modal" : "hide-modal"}`}>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Menu</h2>
            <span className="close" onClick={closeMenu}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <section className="link-group">
              <div className="modal-category">Anime</div>
              <Link to="/" className="modal-link" onClick={closeMenu}>
                <h3>Popular</h3>
              </Link>
              <Link
                to="/anime/ongoing"
                className="modal-link"
                onClick={closeMenu}
              >
                <h3>Ongoing</h3>
              </Link>
              <Link
                to="/anime/upcoming"
                className="modal-link"
                onClick={closeMenu}
              >
                <h3>Upcoming</h3>
              </Link>
            </section>
            <section className="link-group">
              <div className="modal-category">Manga</div>
              <h3>Popular</h3>
              <h3>Ongoing</h3>
              <h3>Upcoming</h3>
            </section>
            <section className="link-group">
              <Link to="/about" className="modal-link" onClick={closeMenu}>
                <h3>About</h3>
              </Link>
            </section>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
