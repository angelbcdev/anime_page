import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div id="navbar" className="navbar relative">

      <img className="h-20 mr-20" src="/logo.png" alt="" />

      <ul className="navbar-link-container hidden sm:flex">
        <li>GENRES</li>
        <li>TYPES</li>
        <li>UPDATED</li>
        <li>ONGOING</li>
        <li>SCHEDULE</li>
        <li>RANDOM</li>
        <li>
          <div className="ml-4">
            <div className="navbar-option-section">
              <div className="button-container">
                <button className="navbar-button navbar-button--active">EN</button>
                <button className="navbar-button">SP</button>
              </div>
              <div className="flex justify-center items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path
                    d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"
                  />
                </svg>
                <p className="w-[100px]">Sign in</p>
              </div>
            </div>
          </div>
        </li>


      </ul>

      <div onClick={() => setShowMenu(!showMenu)} className="text-white mr-4 sm:hidden">
        <svg className="size-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
      {showMenu ? <div className="absolute top-20 right-0 bg-slate-500 z-50 w-[430px] h-screen sm:hidden">

        <MovileMenu />

      </div> : null}


    </div>

  )
};

export default Navbar;


const MovileMenu = () => {
  return (
    <div className="flex flex-col justify-end  gap-5 ">
      <ul className="text-slate-400 text-2xl gap-4 flex flex-col justify-center items-end py-16 pr-10 ">
        <li>GENRES</li>
        <li>TYPES</li>
        <li>UPDATED</li>
        <li>ONGOING</li>
        <li>SCHEDULE</li>
        <li>RANDOM</li>

      </ul>
      <div className="ml-4 flex justify-center">
        <div className="navbar-option-section">
          <div className="button-container">
            <button className="navbar-button navbar-button--active">EN</button>
            <button className="navbar-button">SP</button>
          </div>
          <div className="flex justify-center items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path
                d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"
              />
            </svg>
            <p className="w-[100px]">Sign in</p>
          </div>
        </div>
      </div>
    </div>
  )
}