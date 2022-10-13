import React from "react";
import { NavLink } from "react-router-dom";

import "./pagination.css";

function Pagination({ currentPage, pages }) {
  const addBtns = () => {
    let content = [];
    let start = currentPage;
    let end = start + 2;

    if (currentPage > 1) start = currentPage - 1;
    if (pages - currentPage < 3) end = pages;

    if (currentPage !== 1) {
      content.push(
        <NavLink
          className="page-btn"
          key="prev"
          to={`/anime/trending?page=${currentPage - 1}`}
        >
          prev
        </NavLink>
      );
    }

    for (let i = start; i <= end; i++) {
      content.push(
        <NavLink
          className={
            currentPage === i
              ? "page-btn num-btn active-btn"
              : "page-btn num-btn"
          }
          key={i}
          to={`/anime/trending?page=${i}`}
        >
          {i}
        </NavLink>
      );
    }

    if (currentPage !== pages) {
      content.push(
        <NavLink
          className="page-btn"
          key="next"
          to={`/anime/trending?page=${currentPage + 1}`}
        >
          next
        </NavLink>
      );
    }

    return content;
  };
  return <div className="btns-container">{addBtns()}</div>;
}

export default Pagination;
