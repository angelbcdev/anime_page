

import './App.css'

import FooterAnime from './components/footer/FooterAnime'

import Navbar from './components/navBar/Navbar'
import MyRoutes from './router'



function App() {


  return (
    <section id='navbar' className=' bg-gradient-to-br to-[#212121b0]  from-[#212121] w-screen h-full '>
      <Navbar />
      <MyRoutes />
      <FooterAnime />
    </section>
  )
}

export default App
