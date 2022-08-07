/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = ({ paginate, totalProf, profPerPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProf / profPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav className="w-full flex justify-center">
        <ul className="inline-flex -space-x-px mt-5">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                onClick={() => {
                  paginate(number);
                }}
                href="#"
                className="py-4  px-5 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
