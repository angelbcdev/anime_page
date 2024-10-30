import { useState } from "react";
import { animelist } from "../../const";



const filerOptions = ["All", "sub", "dub", "chinese", "trending"]



const CatalogoAnime = () => {

  const [animeToShow, setAnimeToShow] = useState(animelist)
  const [filter, setFilter] = useState('All')

  const filterAnime = (category: string) => {
    setFilter(category)
    if (category == "All") {
      setAnimeToShow(animelist)
    } else {
      setAnimeToShow(animelist.filter(anime => anime.category.includes(category)))
    }
  }



  return (
    <section id="UPDATED" className="anime-catalog">
      <div className="w-full max-w-[1080px] flex justify-between py-4">
        <div className="catalog-options-links ml-8 ">
          <h2 className="text-white" >RECENTLY<br />UPDATED</h2>
          <ul className="selection ">
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
        <div className="catalog-options-arrows  mr-8 gap-4 opacity-40 hidden sm:flex">
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
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-3 sm:grid-cols-7  gap-1  justify-center  sm:h-[480px] px-4" id="card-container">
        {
          animeToShow.map((anime, index) => {
            return <CataalogoCard key={index} image={anime.image} title={anime.title} type={anime.type} category={anime.category} />
          })
        }
      </div>
    </section>
  )
};

export default CatalogoAnime;



const CataalogoCard = ({ image, title, type, category }: { image: string, title: string, type: string, category: string[] }) => {


  return (
    <div className="w-full  max-w-[140px] relative group cursor-pointer ">
      <p className="catalog-card-type relativ z-30">{type}</p>

      <div
        className={`h-[200px] sm:h-[220px] w-full rounded-lg  relative z-10  group-hover:bg-black/45 transition-all 3000 ease-linear flex justify-center items-center `}
      // src={image}

      >
        <svg className="hidden group-hover:block " width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#e70751" stroke-width="1.5"></circle> <path d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z" stroke="#e70751" stroke-width="1.5"></path> </g></svg>
      </div>
      <img className="h-[200px] absolute top-0 z-0 sm:h-[220px] w-full rounded-lg " src={image} alt="" />
      <p className="catalog-card-title">{title}</p>
      <div className="bg-bgPrimaryd data-catalogo hidden group-hover:flex" >
        <p className="text-center  text-xl"> {title}</p>
        <div className="flex flex-col justify-center items-center ">
          {
            category.map(cat => (
              <p key={cat} >{cat}</p>
            ))
          }
        </div>

        <button className="bg-primary mx-auto px-4 py-1 rounded-md">Play</button>
      </div>
    </div>
  )
}