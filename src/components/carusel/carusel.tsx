import { useEffect, useState } from "react";
import "./carusel.css";

const Carusel = () => {
  const [claseStopCarusel, setClaseStopCarusel] = useState('');
  const [addDegree, setAddDegree] = useState(0);
  const [direction, setDirection] = useState(0.3); // Controla la dirección del movimiento

  const stopCarusel = () => setClaseStopCarusel('stopAnimation');
  const reanudarCarusel = () => setClaseStopCarusel('');

  const atrasarCarusel = () => {
    reanudarCarusel();
    setDirection(0.3); // Cambia la dirección a negativa

    setTimeout(() => {
      stopCarusel();
    }, 1500);
  };

  const adelantarCarusel = () => {
    reanudarCarusel();
    setDirection(-0.3); // Cambia la dirección a positiva

    setTimeout(() => {
      stopCarusel();
    }, 1500)

  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (claseStopCarusel !== 'stopAnimation') {
        setAddDegree(deg => (deg + direction) % 360);
      }
    }, 1000 / 60); // 60 FPS

    return () => clearInterval(intervalId);
  }, [claseStopCarusel, direction]); // Dependencias para reiniciar el intervalo

  return (
    <section className='min-w-[430px] w-screen max-w-[1080px] h-[480px] bg-white mt-5 flex items-center relative overflow-hidden'>
      <section className='w-[85%] h-[85%] bg-red-500 absolute'>
        <div className="w-[200px] gap-4 h-20 flex justify-center items-center">
          <ButtonCarusel action={atrasarCarusel}>Atras</ButtonCarusel>
          <ButtonCarusel action={() => {
            if (claseStopCarusel === 'stopAnimation') {
              reanudarCarusel();
            } else {
              stopCarusel();
            }
          }}>Play / Pause</ButtonCarusel>
          <ButtonCarusel action={adelantarCarusel}>Adelante</ButtonCarusel>
        </div>
      </section>

      <BaseCentralCarusel claseStopCarusel={claseStopCarusel} addDegree={addDegree} />
    </section>
  );
};



export default Carusel;

const BaseCentralCarusel = ({ claseStopCarusel, addDegree }) => {

  useEffect(() => {
    // alert('Carrusel iniciado');
  }, [claseStopCarusel]);
  return (

    <section
      style={{ transform: `rotate(-${addDegree}deg)` }}
      className={`rodarBase ${claseStopCarusel} bg-blue-600 w-[470px] h-[470px] -tosp-[50px] -right-1 rounded-full border-white flex flex-col justify-center items-centers absolute`}
    >
      {/* Elementos del carrusel */}
      <ElementOFCarusel addDegree={addDegree} top={0} left={200} claseStopCarusel={claseStopCarusel}>Top</ElementOFCarusel>
      <ElementOFCarusel addDegree={addDegree} bottom={0} left={200} claseStopCarusel={claseStopCarusel}>Bottom</ElementOFCarusel>
      <ElementOFCarusel addDegree={addDegree} bottom={50} left={325} claseStopCarusel={claseStopCarusel}>B-Right</ElementOFCarusel>
      <ElementOFCarusel addDegree={addDegree} bottom={190} left={388} claseStopCarusel={claseStopCarusel}>C-Right</ElementOFCarusel>
      <ElementOFCarusel addDegree={addDegree} top={50} left={325} claseStopCarusel={claseStopCarusel}>T-Right</ElementOFCarusel>
      <ElementOFCarusel addDegree={addDegree} bottom={50} left={65} claseStopCarusel={claseStopCarusel}>B-Left</ElementOFCarusel>
      <ElementOFCarusel addDegree={addDegree} bottom={190} left={0} claseStopCarusel={claseStopCarusel}>C-Left</ElementOFCarusel>
      <ElementOFCarusel addDegree={addDegree} top={50} left={65} claseStopCarusel={claseStopCarusel}>T-Left</ElementOFCarusel>
    </section>
  )

}

const ButtonCarusel = ({ children, action }) => {
  return (
    <button onClick={action}>{children}</button>
  );
};

const ElementOFCarusel = ({ top = NaN, bottom = NaN, left = NaN, right = NaN, claseStopCarusel, children, addDegree }) => {
  return (
    <div style={{ top, bottom, left, right, transform: `rotate(${addDegree}deg)` }}
      className={`${claseStopCarusel} rotarElement border-2 border-transparent hover:border-white text-white size-20 bg-slate-500/90 absolute rounded-full flex justify-center items-center`}>
      {children}
    </div>
  );
};
