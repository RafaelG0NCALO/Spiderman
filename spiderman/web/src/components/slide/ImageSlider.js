import React, { useState } from 'react';
import { SliderData } from './SliderData';
import '../slide/style.css'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (
      <>
        {SliderData.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <section>
                    <div className='content'>
                      
                        <div className='bg'>
                            <div className='imagem'>
                                <img src={slide.image} alt='travel image'/>
                            </div>
                        </div>

                        <div className='info'>
                            <div className='textinfo'>
                             
                              <h1>{slide.name}</h1>
                              
                              <p>{slide.info}</p>
                              
                              <div className='btns'>
                                  <button  onClick={prevSlide} ><i className="fa-solid fa-arrow-left"></i>ANTERIOR</button>
                                  <button  onClick={nextSlide} >PROXIMO<i className="fa-solid fa-arrow-right"></i></button>
                              </div>
                            </div>
                            <div className='scroll'> 
                              <span></span>
                              <p>SCROLLDOWN</p>
                            </div>
                        </div>
                    </div>
                </section>
                
              )}
            </div>
          );
        })}
      </>
    );
  };
  
  export default ImageSlider;