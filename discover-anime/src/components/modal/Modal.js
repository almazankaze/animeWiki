import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context";

import "./modal.css";

const Modal = () => {
  const { showMenu, setShowMenu } = useGlobalContext();

  return (
    <div className={showMenu ? "modal show" : "modal"}>
      <div className="modal-content animate">
        <div className="modal-header">
          <h2>Menu</h2>
          <span className="close" onClick={() => setShowMenu(false)}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-nav">
            <div className="modal-category">Main</div>
            <Link
              to="/"
              className="modal-link"
              onClick={() => setShowMenu(false)}
            >
              Search
            </Link>
            <Link
              to="/"
              className="modal-link"
              onClick={() => setShowMenu(false)}
            >
              Community
            </Link>
            <Link
              to="/"
              className="modal-link"
              onClick={() => setShowMenu(false)}
            >
              News
            </Link>
            <Link
              to="/about"
              className="modal-link"
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
          </div>
          <div className="modal-nav">
            <div className="modal-category">Anime</div>
            <Link
              to="/anime/trending"
              className="modal-link"
              onClick={() => setShowMenu(false)}
            >
              Trending
            </Link>
            <Link
              to="/anime/upcoming"
              className="modal-link"
              onClick={() => setShowMenu(false)}
            >
              Upcoming
            </Link>
            <Link
              to="/anime/popular"
              className="modal-link"
              onClick={() => setShowMenu(false)}
            >
              All Time
            </Link>
          </div>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};

export default Modal;
