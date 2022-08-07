/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Pagination = ({ paginate, totalProf, profPerPage }) => {
  const [pageColor, setPageColor] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProf / profPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav className="w-full flex justify-center mt-8 rounded-md">
        <ul className="inline-flex -space-x-px ">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                onClick={() => {
                  paginate(number);
                  setPageColor(number);
                }}
                href="#"
                className={`py-4  px-5 leading-tight text-gray-500 ${
                  pageColor === number ? "bg-gray-600 text-white" : "bg-white"
                }  border border-gray-300 hover:bg-gray-400 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
