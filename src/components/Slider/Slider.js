import React from 'react'
import './slider.scss'
import OWLcorusel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

import slider1 from './../../assets/images/slider1.png'
import slider2 from './../../assets/images/slider2.png'
import slider3 from './../../assets/images/slider3.png'
import slider4 from './../../assets/images/slider4.png'

    // const productsItems = [
    //     {id:1 , Cardimg: slider1, title: 'ALUMINUM SIGNS', description: 'Promote your company both outdoors and indoors with durable rust-proof business logo signs. Print signs online with one and double-sided options in various shapes and sizes.'},
    //     {id:2 , Cardimg: slider2, title: 'FOAMBOARD SIGNS', description: 'Create corporate branding in your office or at various events with indoor business signs. Portable, lightweight and easy-to-set-up signs, perfect for one-time use.'},
    //     {id:3 , Cardimg: slider3, title: 'STYRENE SIGNS', description: 'Display the name and logo of your company both outdoors and indoors with personalized wall signs. Lightweight signs perfect for business and personal purposes.'},
    //     {id:4 , Cardimg: slider4, title: 'GATORBOARD SIGNS', description: 'Promote your company both outdoors and indoors with durable rust-proof business logo signs. Print signs online with one and double-sided options in various shapesDisplay your brand logo or create beautiful decorations with interior office signs. Lightweight yet durable material with a foam core sandwiched between wooden veneers.'}
    // ]
    const options = {
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            850: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        },
    };


    function Slider() {
        
      return (
          <>
            <div className='slider wrapper'>
                <h2 className='title'>Related products</h2>
                <section className='productsSlider'>
                  <OWLcorusel  items='4' autoplay autoplayHoverPause mergeFit loop responsive={options.responsive} nav={true} dots={false}>
                    <div className='slider_item'>
                        <img src={slider1} alt='news images'/>
                        <div className='slider_item__content'>
                            <h2  className='slider_item__title'>ALUMINUM SIGNS</h2>
                            <p  className='slider_item__description'>Promote your company both outdoors and indoors with durable rust-proof business logo signs. Print signs online with one and double-sided options in various shapes and sizes.</p>
                        </div>
                    </div>
                    <div className='slider_item'>
                        <img src={slider2} alt='t'/>
                        <div className='slider_item__content'>
                            <h2 className='slider_item__title'>FOAMBOARD SIGNS</h2>
                            <p  className='slider_item__description'>Promote your company both outdoors and indoors with durable rust-proof business logo signs. Print signs online with one and double-sided options in various shapes and sizes.</p>
                        </div>
                    </div>
                    <div className='slider_item'>
                        <img src={slider3} alt='t'/>
                        <div className='slider_item__content'>
                            <h2 className='slider_item__title'>STYRENE SIGNS</h2>
                            <p  className='slider_item__description'>Promote your company both outdoors and indoors with durable rust-proof business logo signs. Print signs online with one and double-sided options in various shapes and sizes.</p>
                        </div>
                    </div>
                    <div className='slider_item'>
                        <img src={slider4} alt='t'/>
                        <div className='slider_item__content'>
                            <h2 className='slider_item__title'>GATORBOARD SIGNS</h2>
                            <p  className='slider_item__description'>Promote your company both outdoors and indoors with durable rust-proof business logo signs. Print signs online with one and double-sided options in various shapes and sizes.</p>
                        </div>
                    </div>
                  </OWLcorusel>
                </section>
            </div>
        </>
      );
    }
    
    export default Slider;
    