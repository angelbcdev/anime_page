import { useEffect, useState } from "react";
import { animelist } from "../../const";

import CataalogoCard from "../UI/CataalogoCard";



const filerOptions = ["All", "sub", "dub", "chinese", "trending"]



const CatalogoAnime = () => {


  const [animeToShow, setAnimeToShow] = useState(animelist)
  const [filter, setFilter] = useState('All')
  const [paginate, setPaginate] = useState(false)
  const [currentsPage, setCurrentsPage] = useState(0)

  const filterAnime = (category: string) => {
    setFilter(category)
    if (category == "All") {
      setAnimeToShow(animelist)
    } else {
      setAnimeToShow(animelist.filter(anime => anime.category.includes(category)))
    }
  }
  useEffect(() => {
    if (animelist.length > 14) {
      setPaginate(true)
    }

  }, [])


  const morePages = () => {

    if (animeToShow.length > currentsPage + 14) {
      setCurrentsPage(currentsPage + 14)
    }
  }
  const lestPages = () => {

    if (currentsPage - 14 >= 0) {
      setCurrentsPage(currentsPage - 14)
    }
  }

  return (
    <section id="UPDATED" className="anime-catalog">
      <div className="w-full max-w-[1080px] flex justify-between py-4">
        <div className="catalog-options-links ml-8 ">
          <h2 className="text-white" >RECENTLY<br />UPDATED</h2>
          <ul className="selection relative top-0  right-6 ">
            {
              filerOptions.map(option => (
                <li key={option}
                  onClick={() => filterAnime(option)}
                  className={`text-[#787878] hover:text-white cursor-pointer ${filter == option && "text-primary"} `}
                >{option}</li>
              ))
            }
          </ul>
        </div>

        <div className="catalog-options-arrows  mr-8 gap-4  hiddens sm:flex relative z-50">
          <BtnPaginate {...{ active: currentsPage >= 14, action: lestPages }} >
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>

          </BtnPaginate>
          <BtnPaginate {...{ active: paginate, action: morePages }} >
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </BtnPaginate>

        </div>

      </div>
      <div className="grid grid-flow-row grid-cols-3 sm:grid-cols-7  gap-1  justify-center  sm:h-[480px] px-4" id="card-container">
        {
          animeToShow.slice(currentsPage, currentsPage + 14).map((anime, index) => {
            return <CataalogoCard key={index} image={anime.image} title={anime.title} type={anime.type} category={anime.category} />
          })
        }
      </div>
    </section>
  )
};


export default CatalogoAnime;




const BtnPaginate = ({ active, action, children }) => {
  return (
    <div
      onClick={action}
      className={` ${active ? "text-white cursor-pointer" : " "} `}>
      {children}
    </div>

  )
}



