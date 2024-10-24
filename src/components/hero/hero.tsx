import { useEffect, useState } from "react";
import "./herostyle.css"

const dummyData = [{
  name: "Dan da Dam",
  img: "https://assets-prd.ignimgs.com/2024/09/12/ddd-blogroll-1726165218086.jpg?width=828",
  details: "lorem ipsum is a dummy text used in laying out print, graphic design, typography, UI design, and UX design. Lorem Ipsum is used in laying out print, graphic design, typography, UI design, and UX design."
},
{
  name: "Blue Box",
  img: "https://external-preview.redd.it/blue-box-anime-announced-teaser-visual-v0-x4gJPE0ZEjqVgYDxdvDj0nllb6RckcDeEGrJxGoAFGU.jpg?width=1080&crop=smart&auto=webp&s=526ae69b737de3209fab055ecb32b7ed4c7369f2",
  details: "lorem ipsum is a dummy text used in laying out print, graphic design, typography, UI design, and UX design. Lorem Ipsum is used in laying out print, graphic design, typography, UI design, and UX design."
},
{
  name: "fireforce company 8 season 2",
  img: "https://cdn.oneesports.gg/cdn-data/2024/07/Anime_FireForce_Company8_Season2-1024x576.jpg",
  details: "lorem ipsum is a dummy text used in laying out print, graphic design, typography, UI design, and UX design. Lorem Ipsum is used in laying out print, graphic design, typography, UI design, and UX design."
},
{
  name: "bleach final season",
  img: "https://imgs.search.brave.com/1eJp3OC1j1_2CjVfKhPwFv6D7gSv2cMBPB7V2Tiqfaw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbHBo/YW5ld3NjYWxscy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTAvQmxlYWNo/LU5ldy1TZWFzb24t/Mi5qcGc",
  details: "lorem ipsum is a dummy text used in laying out print, graphic design, typography, UI design, and UX design. Lorem Ipsum is used in laying out print, graphic design, typography, UI design, and UX design."
},

{
  name: "Solo Leveling",
  img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/sung-jinwoo-holding-up-a-weapon-with-his-past-weak-self-to-his-left-surrounded-in-orange-flames-and-his-new-strong-self-to-his-right-surrounded-in-blue-flames-in-solo-leveling.jpg",
  details: "lorem ipsum is a dummy text used in laying out print, graphic design, typography, UI design, and UX design. Lorem Ipsum is used in laying out print, graphic design, typography, UI design, and UX design."
},



]



const Hero = () => {
  const [indexBaner, setIndexBaner] = useState(0)
  const [classToMove, setClassToMove] = useState('')


  useEffect(() => {
    const intervalId = setInterval(() => {
      addIndexBaner();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const addIndexBaner = () => {
    setClassToMove('moveLeft');

    setTimeout(() => {
      setClassToMove('');

      setIndexBaner((prevIndex) => {
        if (prevIndex + 1 > dummyData.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 1000);
  };

  const removeIndexBaner = () => {
    setClassToMove('moveRight')

    setTimeout(() => {
      setClassToMove('')
      if (indexBaner - 1 < 0) {
        setIndexBaner(dummyData.length - 1)
      } else {
        setIndexBaner(indexBaner - 1)
      }

    }, 1000)

  }



  return (
    <section className="flex flex-col pt-2 relative">
      <div className="flex flex-row">
        <HeroCard >

          {/* {[1, 2, 3,].map((e) => (
            <div
              key={e}
              className={`relative min-w-[430px] w-screen max-w-[1080px] bg-slate-400  h-full ${classToMove} px-2   `}
            >

            </div>
          )
          )
          } */}


          <ShowInfoHero classToMove={classToMove} data={dummyData[indexBaner - 1 < 0 ? dummyData.length - 1 : indexBaner - 1]} />
          <ShowInfoHero classToMove={classToMove} data={dummyData[indexBaner]} />
          <ShowInfoHero classToMove={classToMove} data={dummyData[indexBaner + 1 > dummyData.length - 1 ? 0 : indexBaner + 1]} />



        </HeroCard>
        <div className=" relative z-50 right-24 bottom-  flex-col gap-2 justify-end font-bold hidden sm:flex ">

          <BotonHero title={'<'} action={removeIndexBaner} />
          <BotonHero title={'>'} action={addIndexBaner} />
        </div>
      </div>
      <DotsHero indexBaner={indexBaner} setIndexBaner={setIndexBaner} />


    </section>

  )
};

export default Hero;

const HeroCard = ({ children }: { children: any }) => {


  return (
    <section className="relative w-screen max-w-[1080px] h-[320px] flex     ">


      <div className=" relative w-[1060px] h-[360px] flex flex-row rounded-lg overflow-hidden    ">
        <div className={`flex  gap-12 justify-end font-bold sm:translate-x-[-1118px]  `} >

          {children}


        </div>

      </div>






    </section>
  )

}


const ShowInfoHero = ({ data, classToMove }: { data: any, classToMove: any }) => {
  return (

    <section className={`relative min-w-[430px] w-screen max-w-[1080px]  h-full ${classToMove} px-2   `} >
      <img className=" relative z-0 w-full  h-full rounded-lg" src={data.img} alt="ha" />
      <div className="absolute top-0 z-10 w-full h-full flex flex-col justify-center p-4 rounded-lg bg-gradient-to-r from-black to-transparent pr-16">
        <p className="text-3xl font-bold text-yellow-600 pb-6">rank</p>
        <p className="text-white text-4xl font-bold mb-4" >{data.name}</p>
        <p className="w-[600px] text-slate-100 hidden sm:block" >{data.details}</p>

      </div>
    </section>

  )
}


const BotonHero = ({ title, action }: { title: any, action: any }) => {
  return (
    <div
      className="bg-primary text-white w-12 h-12 rounded-md  border-2 hover:border-white border-transparent active:bg-blue-600 active:border-slate-200 active:translate-y-[2px] flex justify-center items-center cursor-pointer"
      onClick={action} >{title}</div>
  )
}

const DotsHero = ({ indexBaner, setIndexBaner }: { indexBaner: any, setIndexBaner: any }) => {
  return (
    <div className="text-red-500  h-16  flex flex-col sm:flex-row gap-5 justify-center items-center mt-2 absolute top-32 sm:top-[290px]  right-4 sm:left-0 sm: z-20">
      {
        dummyData.map((_, index) => {
          return (
            <div
              onClick={() => setIndexBaner(index)}
              key={index}
              className="size-3  cursor-pointer flex justify-center items-center"
            >
              <p
                className={` ${index === indexBaner ? 'bg-primary size-3' : 'bg-red-300   '} hover:bg-indigo-400 size-2 transition-all ease-in timeout-300  rounded-full cursor-pointer `}

              ></p>

            </div>
          )
        })
      }
    </div>
  )
}