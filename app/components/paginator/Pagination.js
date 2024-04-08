import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ paginationProcess, totalPage, page }) => {
  useEffect(() => {
    let elements = document?.querySelector(".reactPaginate")?.children;
    if (elements?.length > 0) {
      for (let i = 0; i < elements.length; i++) {
        elements[i]?.classList?.remove("selected");
      }
      elements[page]?.classList?.add("selected");
    }
  });
  return (
    <>
      <ReactPaginate
        className="reactPaginate"
        breakLabel="..."
        nextLabel=" >"
        onPageChange={(e) => {
          paginationProcess(e.selected + 1);
        }}
        onPageActive={(e) => paginationProcess(e.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={totalPage}
        previousLabel="<"
        renderOnZeroPageCount={null}
        // activeClassName="selected"
      />
    </>
  );
};

export default Pagination;
