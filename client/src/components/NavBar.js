import { useState } from "react";

export default function NavBar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 py-4 px-8">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/" className="font-thin text-xl tracking-tight">
          good<span className="font-bold text-purple-500">games</span>
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 rounded text-white hover:opacity-75"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={
          "w-full block flex-grow lg:flex lg:items-center lg:w-auto " +
          (navbarOpen ? "justify-center items-center flex" : "hidden")
        }
      >
        <div className="lg:flex lg:ml-auto lg:my-0 mt-4 items-center text-center mb-4">
          <div className=" relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="Search..."
            />
          </div>
          <div className="text-md lg:flex-grow lg:mx-10">
            <a
              href="/"
              className="font-thin block mt-4 lg:inline-block lg:my-0 my-4 text-white hover:opacity-75 mx-4"
            >
              Home
            </a>
            <a
              href="/discover"
              className="font-thin block mt-4 lg:inline-block lg:mt-0 text-white hover:opacity-75 mx-4"
            >
              Discover
            </a>
            <a
              href="/mygames"
              className="font-thin block mt-4 lg:inline-block lg:mt-0 text-white hover:opacity-75 mx-4"
            >
              My Games
            </a>
            <a
              href="/browse"
              className="font-thin block mt-4 lg:inline-block lg:mt-0 text-white hover:opacity-75 mx-4"
            >
              Browse
            </a>
          </div>
          <div className="lg:mt-0 mt-4">
            <a
              href="/login"
              className="font-thin px-4 py-2 bg-purple-700 leading-none border rounded text-white border-transparent hover:opacity-75 mt-4 lg:mt-0"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>

    {props.children}
    </>
  );
}
