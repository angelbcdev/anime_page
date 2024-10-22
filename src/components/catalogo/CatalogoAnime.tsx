import { animelist } from "../../const";





const CatalogoAnime = () => {

  return (
    <section className="anime-catalog">
      <div className="w-full max-w-[1080px] flex justify-between pt-8">
        <div className="catalog-options-links ml-8 ">
          <h2 className="text-white" >RECENTLY<br />UPDATED</h2>
          <ul className="selection hidden sm:flex">
            <li >All</li>
            <li>Sub</li>
            <li>Dub</li>
            <li>Chinese</li>
            <li>Trending</li>
          </ul>
        </div>
        <div className="catalog-options-arrows flex mr-8 gap-4">
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
      <div className="flex flex-wrap gap-2 justify-center" id="card-container">
        {
          animelist.map((anime, index) => {
            return <CataalogoCard key={index} image={anime.image} title={anime.title} type={anime.type} />
          })
        }
      </div>
    </section>
  )
};

export default CatalogoAnime;



const CataalogoCard = ({ image, title, type }) => {

  return (
    <div className="w-1/4  max-w-[140px]">
      <p className="catalog-card-type">{type}</p>
      <img
        className="h-[200px] sm:h-[220px] w-full rounded-lg"
        src={image}
        alt=""
      />
      <p className="catalog-card-title">{title}</p>
    </div>
  )
}