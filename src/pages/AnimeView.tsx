import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimeDetails } from "../const";

const AnimeView = () => {
  const location = useLocation()
  const [dataAnime, setDataAnime] = useState<null | AnimeDetails>(null)



  useEffect(() => {
    setDataAnime(location.state)
    if (location.state == null) {

      window.location.replace("/")
    }

  }, [])



  return (
    <section className="relative">
      <section style={{
        backgroundImage: `url(${dataAnime?.image})`,
        backgroundSize: 'cover',
        filter: 'blur(20px)',
        // height: '600px', // O el tamaño que desees
        // width: '1080px', // O el tamaño que desees
        position: 'relative'
      }} className={`h-[1200px] sm:h-screen w-screen max-w-[1040px] z-0  mx-auto  flex justify-center items-center`}>

      </section>
      <div className="z-10 w-full  bg-black/40 h-[1200px] sm:h-screen  absolute top-0 flex justify-center">
        <div className=" max-w-[1080px] mt-40"  >
          <div className="sm:w-[800px] w-[430px]  flex flex-col sm:flex-row ju items-center h-[400px] sm:h-[400px]   gap-6">
            <img className="w-[320px] hidden sm:block rounded-md relative bottom-4" src={dataAnime?.image} alt="fe" />
            <section className="flex flex-col gap-6 justify-center items-center ">
              <div className="w-full flex gap-3 text-white ">
                <Link to={"/"}>Home</Link>
                <p>-</p>
                <Link to={"/ver-category/:" + dataAnime?.type}>{dataAnime?.type.toUpperCase()}</Link>
                <p>-</p>
                <p className="font-light text-slate-300">{dataAnime?.title}</p>
              </div>
              <img className="w-[320px]  sm:hidden" src={dataAnime?.image} alt="fe" />
              <p className="font-bold text-3xl text-slate-300">{dataAnime?.title}</p>
              <div className="flex font-extralight gap-6 text-slate-300">
                <p>{dataAnime?.type.toUpperCase()}</p>
                <p>-</p>
                <p>24m</p>
              </div>

              <div className="flex gap-4">
                <button className="py-2 px-4 bg-primaryHover rounded-full">Watch now</button>
                <button className="py-2 px-4 bg-slate-100 rounded-full">Add to List</button>
              </div>

              <div className="text-slate-300 font-light w-[330px] h-auto">
                <p>
                  AnimePAge is the best site to watch {dataAnime?.title} SUB online, or you can even watch {dataAnime?.title} DUB in HD quality.<br /> You can also find more anime in this website.</p>
              </div>


            </section>

          </div>
        </div>
      </div>
    </section>
  )
};

export default AnimeView; 