import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoOne from './components/InfoOne'
import Skills from './components/Skills'
import InfoTwo from './components/InfoTwo'
import Transcript from './components/Transcript'
import InfoThree from './components/InfoThree'
import Certificates from './components/Certificates'
import InfoFour from './components/InfoFour'
import MorePics from './components/MorePics'
import InfoFive from './components/InfoFive'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const {count, setCount} = useState(0)
  return (
    <>
      <Navbar />
      <Hero />
      <InfoOne />
      <Skills />
      <InfoTwo />
      <Transcript />
      <InfoThree />
      <Certificates />
      <InfoFour />
      <MorePics />
      <InfoFive />
      <Contact />
      <Footer />
    </>
  )
}

export default App
