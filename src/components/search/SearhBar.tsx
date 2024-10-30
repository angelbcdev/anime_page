import { useState } from "react";
import { animelist } from "../../const";


import useChanges from "../../hooks/useChanges";

const SearhBar = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [allData, setAllData] = useState([])
  const [msj, setMsj] = useState('')
  const { goTo } = useChanges()

  const searchForName = (title: string) => {


    if (title.length > 2) {
      setAllData(animelist.filter(anime => anime.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())))
    } else {
      setAllData([])
    }

    setMsj(" - no fount -")

  }

  return (
    <section id="header">
      {/* <div className="header-img"></div> */}
      <div className="flex bg-white justify-between items-center w-[80%] h-12 px-4  relative bottom-6 rounded-xl z-50 ">
        <div className="header-src-bar-img">
          <label htmlFor="search">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-search text-primary"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>

            <input
              id="search"
              onChange={(e) => searchForName(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-[80%] min-w-[240px] absolute left-16 h-[90%] flex border-4 border-transparent items-center  focus:border-primaryd  top-1" type="text" placeholder="Search anime" />
          </label>

        </div>
        <div className={`bg-white relative top-1/2 translate-y-1/2 min-w-[260px] w-[83%] left-6 sm:left-0 transition-all  ease-linear  flex flex-col gap-2  overflow-scroll px-2  rounded-b-lg  ${!isFocused ? "h-0" : " h-[300px] "}`}>
          {
            allData.length > 0 ?
              allData.map(data => (
                <div key={data.tilte} onClick={() => goTo(data)} className="hover:bg-slate-300 px-2 cursor-pointer mt-3  rounded-md" >{data.title}</div>
              ))
              : <p className="text-slate-300"> {msj} </p>
          }




        </div>
        <div>
          <button
            className="navbar-button--active navbar-button header-src-bar-button z-40 relative right-10 sm:right-0"
          >
            Filter
          </button>
        </div>
      </div>
      <p style={{ color: "var(--text-gray)" }}>
        if you enjoy the the website, please consider sharing it with your
        friends. Thank you!
      </p>
    </section>
  )
};

export default SearhBar; 