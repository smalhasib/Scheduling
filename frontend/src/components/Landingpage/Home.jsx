import React from "react";

const Home = () => {
  return (
    <>
      <section className="h-5/6 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
            Make your schedule.
            <span className="text-indigo-600"> Database management</span>
          </h1>
          <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sunt
            placeat repellendus fugit temporibus iusto aperiam, sequi qui cumque
            cupiditate accusantium officia, quis voluptatem sapiente dignissimos
            debitis optio id vel.
          </p>
          <div>
            <button className="outline-none bg-indigo-600 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
              Get started
            </button>
          </div>
        </div>
        <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
          <img
            src="/img/hero_section.gif"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
            alt="img"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
