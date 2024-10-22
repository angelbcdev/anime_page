

import './App.css'
import CatalogoAnime from './components/catalogo/CatalogoAnime'
import FooterAnime from './components/footer/FooterAnime'

import Hero from './components/hero/hero'
import ShowList from './components/list/ShowList'
import Navbar from './components/navBar/Navbar'
import SearhBar from './components/search/SearhBar'

function App() {


  return (
    <section className='bg-[#212121d6] w-screen h-full'>
      <div className='bg-[#212121] w-screen  max-w-[1080px] h-full mx-auto'>
        <Navbar />
        <Hero />
        <SearhBar />
        <CatalogoAnime />
        <ShowList />
        <FooterAnime />

      </div>
    </section>
  )
}

export default App
