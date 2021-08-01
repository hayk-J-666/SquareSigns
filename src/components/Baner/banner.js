import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import SwiperCore, { Thumbs, } from 'swiper/core';
import Card1 from './../../assets/images/namplate.png'
import Card2 from './../../assets/images/Acrylicpicturesign.png'
import Card3 from './../../assets/images/Storedecorativeacrylicprintings.png'
import Card4 from './../../assets/images/standoffindoorAcrylicsign.png'
import './banner.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Thumbs,Navigation]);

function Banner(){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return(
        <div className='bannerContainer'>
            <div className='banner wrapper'>
                <div className='banner__slider'>
                    <Swiper thumbs={{ swiper: thumbsSwiper }} slidesPerView={1}>
                        <SwiperSlide className='sliderItem'>
                            <img src={Card1} alt='t'/>
                        </SwiperSlide>
                        <SwiperSlide className='sliderItem'>
                            <img src={Card2} alt='t'/>
                        </SwiperSlide>
                        <SwiperSlide className='sliderItem'>
                            <img src={Card3} alt='t'/>
                        </SwiperSlide>
                        <SwiperSlide className='sliderItem'>
                            <img src={Card4} alt='t'/>
                        </SwiperSlide>
                    </Swiper>

                    <div className='navigation_slider'>
                    <Swiper onSwiper={setThumbsSwiper} watchSlidesVisibility watchSlidesProgress spaceBetween={9}  slidesPerView={5}
                    loop  navigation>
                        <SwiperSlide className='navigation_slider__item'>
                            <img src={Card1} alt='t'/>
                        </SwiperSlide>
                        <SwiperSlide className='navigation_slider__item'>
                            <img src={Card2} alt='t'/>
                        </SwiperSlide>
                        <SwiperSlide className='navigation_slider__item'>
                            <img src={Card3} alt='t'/>
                        </SwiperSlide>
                        <SwiperSlide className='navigation_slider__item'>
                            <img src={Card4} alt='t'/>
                        </SwiperSlide>
                        <SwiperSlide className='navigation_slider__item'>
                            <img src={Card4} alt='t'/>
                        </SwiperSlide>
                    </Swiper>
                    </div>  
                </div>
                <div className='banner__decals'>
                    <div className='banner__decals_text'>
                        <h2 className='banner__decals_title'>Custom Backlit Decals</h2>
                        <p className='banner__decals_subTitle'>Create Incredible looking graphics with our semi-translucent, backlit film that’s great.</p>
                    </div>
                    <div className='banner__decals_sizes'>
                        {/* <div className='select_imitation'>
                            <input type='hidden'/>
                            <p tabIndex='0'>fdfd</p>
                            <div>
                                <ul>
                                    <li>sdfd</li>
                                    <li>sdfd</li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                    <div className='banner__decals_total'>
                        <p className='banner__decals_total__title'>Price Total</p>
                        <p className='banner__decals_total__price'>$ 53.26</p>
                    </div>
                    <button className='banner__decals_signNow'>Create your sign now</button>
                </div>
            </div>
        </div>
    )
}

export default Banner