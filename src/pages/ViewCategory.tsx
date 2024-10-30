import CataalogoCard from "../components/UI/CataalogoCard";
import { animelist } from "../const";


const ViewCategory = () => {

  return (
    <section className="min-h-screen h-[300vh] overflow-hidden sm:h-[1080px] pt-28 max-w-[1080px] mx-auto min-w-[430px]">
      <p className="text-center mb-8 text-3xl text-primary ">TV Series Anime</p>
      <div className="grid grid-flow-row grid-cols-3 sm:grid-cols-7  gap-1  justify-center  sm:h-[480px] px-4" id="card-container">
        {
          animelist.map((anime, index) => {
            return <CataalogoCard key={index} image={anime.image} title={anime.title} type={anime.type} category={anime.category} />
          })
        }
      </div>
    </section>
  )
};

export default ViewCategory; 