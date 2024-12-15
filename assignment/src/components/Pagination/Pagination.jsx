import React from "react";
import { DOTS, usePagination } from "./usePagination";
import "./Pagination.css";

function Pagination({ totalPages, currentPage, onChange }) {
  const paginationUIElements = usePagination(currentPage, totalPages);

  const handlePageClick = (page) => {
    onChange(page);
  };

  const prevHandler = () => {
    if (currentPage - 1 > 0) {
      onChange(currentPage - 1);
    }
  };

  const nextHandler = () => {
    if (currentPage + 1 <= totalPages) {
      onChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination_container">
      <button
        className="btn"
        onClick={prevHandler}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {paginationUIElements.map((item, index) => {
        if (item === DOTS) {
          return <span key={index}>{DOTS}</span>;
        }

        return (
          <button
            key={index}
            className={`btn ${item === currentPage ? "btn_active" : ""}`}
            onClick={() => handlePageClick(item)}
          >
            {item}
          </button>
        );
      })}
      <button
        className="btn"
        onClick={nextHandler}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
