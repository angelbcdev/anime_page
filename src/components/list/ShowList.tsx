import { animelist } from "../../const";
import useChanges from "../../hooks/useChanges";

const ShowList = () => {

  return (
    <section className="flex flex-col  ml-10 sm:flex-row   mt-20">
      <div className="other-options-added order-2">
        <div className="other-options-title">
          <h2>RECENTLY<br />ADDED</h2>
          <p>view all</p>
        </div>
        <div id="other-option-container" className="other-option-container">
          {animelist.map((anime) => (
            <NormalCard
              anime={anime}

            />
          ))}
        </div>
      </div>
      <div className="MOST-Views order-1 sm:order-2">
        <div className="MOST-Views-title">
          <h4>MOST VIEWED</h4>
          <ul>
            <li>Day</li>
            <li>Week</li>
            <li>Month</li>
          </ul>
        </div>
        <div className="MOST-Views-container" id="MOST-Views-container">
          {
            animelist.slice(0, 8).map((anime, index) => (index == 0 ?
              <MostViewedCard anime={anime} id={index + 1} /> :
              <MostViewedCard2 anime={anime} id={index + 1} />))
          }
        </div>
      </div>

      <div className="other-options-added order-3">
        <div className="other-options-title">
          <h2>RECENTLY<br />ADDED</h2>
          <p>view all</p>
        </div>
        <div id="other-option-container2" className="other-option-container">
          {animelist.map((anime) => (
            <NormalCard
              anime={anime}

            />
          ))}
        </div>
      </div>
    </section>
  )
};

export default ShowList;

const NormalCard = ({ anime }: { anime: any }) => {
  const { goTo } = useChanges()

  return (
    <div
      onClick={() => goTo(anime)}
      className="other-option-card">
      <img
        className=""
        src={anime.image}
        alt=""
      />
      <p className="other-tilte">{anime.title}</p>
    </div>
  )
}

const MostViewedCard = ({ anime, id }: { anime: any, id: number }) => {
  const { goTo } = useChanges()

  return (
    <div
      onClick={() => goTo(anime)}
      className="most-card-1">
      <div className="card-1-image-container">
        <div className="most-card-1-number"><p>0{id}</p></div>
        <img
          className="most-card-1-image"
          src={anime.image}
          alt=""
        />

      </div>
      <div className="most-card-1-title">
        <p>{anime.title}</p>
      </div>
    </div>
  )
}

const MostViewedCard2 = ({ anime, id }: { anime: any, id: number }) => {
  const { goTo } = useChanges()

  return (
    <div
      onClick={() => goTo(anime)}
      className={`most-card-2 ${id % 2 == 0 ? " cardPar" : "carInPar "}`} >

      <div className="catalog-card-type most-card-2-number">
        <p>0{id}</p>
      </div>
      <div className="most-card-2-title">
        <p>{anime.title}</p>
        <img
          src={anime.image}
          alt=""
        />
      </div>
    </div >
  )
}