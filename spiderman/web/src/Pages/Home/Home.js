import React from 'react'
import ImageSlider from '../../components/slide/ImageSlider'
import { SliderData } from '../../components/slide/SliderData'
import '../Home/style.css'
import bgcity from '../../assets/images/bgcity.png'

export const Home = () => {

  return (
    <>
    <div className="img">
        <div className="opac">
          <img src={bgcity}/></div>
            <ImageSlider slides={SliderData} />
        
    </div>
    
    </>
  )
}


