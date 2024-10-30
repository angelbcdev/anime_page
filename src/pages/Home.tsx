import CatalogoAnime from "../components/catalogo/CatalogoAnime";
import Hero from "../components/hero/hero";
import ShowList from "../components/list/ShowList";
import SearhBar from "../components/search/SearhBar";

const Home = () => {

  return (
    <div className='bg-[#212121] w-screen  max-w-[1080px] h-full mx-auto pt-24 pb-8'>
      <Hero />
      <SearhBar />
      <CatalogoAnime />
      <ShowList />

    </div>
  )
};

export default Home; 