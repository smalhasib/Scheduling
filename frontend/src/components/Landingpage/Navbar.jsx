import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [state, setState] = useState(false);
  const navRef = useRef();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const body = document.body;

    // Disable scrolling
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    // Enable scrolling
    else body.classList.remove(...customBodyStyle);

    // Sticky strick
    const customStyle = ["sticky-nav", "fixed", "border-b"];
    window.onscroll = () => {
      if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };
  }, [state]);

  return (
    <nav ref={navRef} className="bg-white w-full top-0 z-20 sticky-nav">
      <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
          <Link to="/" className="flex items-center mt-2">
            <img
              src="/img/database_logo.png"
              width={60}
              height={40}
              alt="Float UI logo"
              className="h-11 w-11"
            />
            <span className="text-2xl font-bold ml-3 ">DATABASE</span>
          </Link>
          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
          }`}
        >
          <div>
            <ul className="flex flex-col p-3 space-x-0 lg:space-x-20 lg:flex-row">
              <li
                style={{ fontSize: "1.1rem" }}
                className="text-black mr-2 font-bold hover:text-indigo-600"
              >
                <Link to="/">Home</Link>
              </li>
              <li
                style={{ fontSize: "1.1rem" }}
                className="text-black font-bold hover:text-indigo-600"
              >
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li
                style={{ fontSize: "1.1rem" }}
                className=" font-bold mt-4 lg:mt-0"
              >
                {user ? (
                  <Link
                    to="/login"
                    className="py-3 px-4 text-center border text-black hover:text-indigo-600 rounded-md block lg:inline lg:border-0"
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="py-3 px-4 text-center border text-black hover:text-indigo-600 rounded-md block lg:inline lg:border-0"
                  >
                    Login
                  </Link>
                )}
              </li>
              <li className="mt-8 font-bold lg:mt-0">
                <Link
                  to="/signup"
                  className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
