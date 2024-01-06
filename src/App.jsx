import { useState } from 'react'
import './App.css'
import Video from './components/video/video'
import Conteo from './components/conteo/Conteo'
import photo1 from './assets/photo1.png'
import Inform from './components/Inform/Inform'
import Galeria from './components/galeria/Galeria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Video />
      <Conteo />
      <div className="imagen1">
        <img src={photo1} alt="" />
      </div>
      <Inform/>
      <Galeria/>
    </>
  )
}

export default App
