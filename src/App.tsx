

import './App.css'
import CatalogoAnime from './components/catalogo/CatalogoAnime'
import FooterAnime from './components/footer/FooterAnime'

import Hero from './components/hero/hero'
import ShowList from './components/list/ShowList'
import Navbar from './components/navBar/Navbar'
import SearhBar from './components/search/SearhBar'

function App() {


  return (
    <section id='navbar' className=' bg-gradient-to-br to-[#212121b0]  from-[#212121] w-screen h-full '>
      <Navbar />
      <div className='bg-[#212121] w-screen  max-w-[1080px] h-full mx-auto pt-24 pb-8'>
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
