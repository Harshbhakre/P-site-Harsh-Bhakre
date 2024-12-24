import React from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Header from './Components/Header'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/page7'
import Pageend from './pages/Pageend'
import Page8 from './pages/Page8'
import Page9 from './pages/Page9'
import Page11 from './pages/Page11'
import Page10 from './pages/Page10'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  useGSAP(()=>{
    gsap.to(".rotate img",{
      rotate:360,
      duration:5,
      repeat:-1,
      ease:"linear"
    })
  })
  return (
    <>
    <div id='main'>
    <div className='rotate z-[20]'>
        <img className='my-4 fixed top-[65%] right-[5%] z-10' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
        <img className='my-4 fixed top-[80%] right-[5%] z-10' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt="" />
      </div>
    <Header />
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
    <Page6 />
    <Page7 />
    <Page8 />
    <Page9 />
    <Page10 />
    <Page11 />
    <Pageend />
    </div>
      
    </>
  )
}

export default App
