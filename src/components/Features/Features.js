import React from 'react'
import './features.scss'
import featuresImg from './../../assets/images/123.png'
import material1 from './../../assets/images/frosted-acrylic.png'
import material2 from './../../assets/images/SS-photo-template.png'
import material3 from './../../assets/images/black-acrylic.png'
import material4 from './../../assets/images/white-acrylic.png'
import printing1 from './../../assets/images/acrylic-standard-printing.png'
import printing2 from './../../assets/images/acrylic-double-sided-print.png'

import cutting1 from './../../assets/images/acrylic-standard-cut.png'
import cutting2 from './../../assets/images/acrylic-rounded-corner-cut.png'
import cutting3 from './../../assets/images/acrylic-outline-cut.png'
import cutting4 from './../../assets/images/acrylic-overline-cut.png'

import lamination1 from './../../assets/images/acrylic-glossy.png'
import lamination2 from './../../assets/images/acrylic-matte.png'




function Features(){
    return(
        <>
        <section className='features'>
            <div className='features__content'>
                <h2 className='title'>Features</h2>
                <ul>
                    <li>Transparent and translucent material</li>
                    <li>Rigid and all types of weather-resistant</li>
                    <li>Perfect optical clarity</li>
                    <li>Lightweight, durable and affordable glass substitute</li>
                </ul>
            </div>
            <img src={featuresImg} className='features__img' alt='material img'/>
        </section>
        <div className='features__container'>
            <h2 className='title'>Materials</h2>
            <p className='features__paragraph'>Acrylic is an ultra-durable plastic material that is often used for both indoor and outdoor signs. The sturdy material is perfect for making stunning decorations as well as attractive business signs.</p>
            <p className='features__paragraph'>Naturally, the material has a glossy finish but after printing the areas covered by ink turns matte. Acrylic comes in various thicknesses ranging from 1/8"/0.125" to 1/2"/0.5". As for the sizes, they highly vary between 4"x4" to 96"x48". We offer the following types of acrylic.</p>
            <h3 className='features__container__title'>Types</h3>
            <section className='features__item__container'>
                <article className='features__item'>
                    <img src={material1} alt='material img' className='features__item__img'/>
                    <div className='features__item__content'>
                        <h1 className='features__item__title'>Clear</h1>
                        <p className='features__item__text'>The material has an ideal optical clarity and transparency. Combined with backlit vinyl it can be used to make breathtaking illuminated signs. With clear acrylic signs, you can choose the inside glass printing that gives more depth to the graphics.</p>
                    </div>
                </article>
                <article className='features__item'>
                    <img src={material2} alt='material img' className='features__item__img'/>
                    <div className='features__item__content'>
                        <h1 className='features__item__title'>Frosted</h1>
                        <p className='features__item__text'>The material has a matt finish - perfect for providing privacy at the workplace. Although frosted acrylic signs are not see-through, these signs are translucent.</p>
                    </div>
                </article>
                <article className='features__item'>
                    <img src={material3} alt='material img' className='features__item__img'/>
                    <div className='features__item__content'>
                        <h1 className='features__item__title'>Black</h1>
                        <p className='features__item__text'>Standard black color that can be printed in any color you desire. </p>
                    </div>
                </article>
                <article className='features__item'>
                    <img src={material4} alt='material img' className='features__item__img'/>
                    <div className='features__item__content'>
                        <h1 className='features__item__title'>White</h1>
                        <p className='features__item__text'>Brand your office with your logo printed on an acrylic board. Whether displayed indoors or outdoors these signs are sure to catch the attention of your potential prospects. Acrylic office signs do not require much space, so these logo signs will work perfectly for smaller companies as well. Give a more professional look to your workspace with custom-printed logo signs.</p>
                    </div>
                </article>
            </section>
        </div>
        <div className='features__container'>
            <h2 className='title'>Printing</h2>
            <p className='features__paragraph'>You are open to order custom acrylic signs with custom designs printed on them. Use our free design tool to create your personalized graphics or choose one of our beautiful templates. For printing, we use sublime quality UV and digital printers. After the printing process, the inks are dried with ultraviolet rays. This makes the printing sun-resistant and guarantees a long lifespan to the sign.</p>
            <h3 className='features__container__title'>Printing options</h3>
            <section className='features__item__container'>
                <article className='features__item'>
                    <img src={printing1} alt='material img' className='features__item__img'/>
                    <div className='features__item__content'>
                        <h1 className='features__item__title'>Standard printing</h1>
                        <p className='features__item__text'>The graphics are directly printed on the face part of one of the acrylic sheets (black, white, clear, frosted). The printed areas on the sign have a matte finish.</p>
                    </div>
                </article>
                <article className='features__item'>
                    <img src={printing1} alt='material img' className='features__item__img'/>
                    <div className='features__item__content'>
                        <h1 className='features__item__title'>Second Surface Printing</h1>
                        <p className='features__item__text'>With this option, the graphics are mirror printed on the back of the acrylic. So, when you look at the sign it seems as if the printing is inside the material. This printing provides a glossy finish as the graphics are on the back, thus leaving the face part clean and shiny.</p>
                    </div>
                </article>
                <article className='features__item'>
                    <img src={printing2} alt='material img' className='features__item__img'/>
                    <div className='features__item__content'>
                        <h1 className='features__item__title'>Double-sided printing</h1>
                        <p className='features__item__text'>For better visibility, you can get acrylic signs with graphics on both sides. With this option, your chosen images will be printed on the front and the back of the plexiglass. The printed area has a matte finish.</p>
                    </div>
                </article>
            </section>
        </div>
        <div className='features__container'>
            <h2 className='title'>Cutting</h2>
            <p className='features__paragraph'>We offer the latest equipment in the industry for cutting your acrylic signs with high accuracy. Being controlled by computer, laser cutting and CNC machines provide perfectly cut edges. Hence, you can order acrylic signs in custom shapes and sizes. Due to the versatility of the material you can choose from the following cutting options.</p>
            <h3 className='features__container__title'>Cutting options</h3>
            <section className='cutting__item__container'>
                <article className='cutting__item'>
                    <img src={cutting1} alt='material img' className='cutting__item__img'/>
                    <div className='cutting__item__content'>
                        <h1 className='cutting__item__title'>Clear</h1>
                        <p className='cutting__item__text'>The square or rectangle-shaped signage will have standard sharp edges with pointed corners.</p>
                    </div>
                </article>
                <article className='cutting__item'>
                    <img src={cutting2} alt='material img' className='cutting__item__img'/>
                    <div className='cutting__item__content'>
                        <h1 className='cutting__item__title'>Frosted</h1>
                        <p className='cutting__item__text'>The sharp edges of the signs will be rounded. Signs with round cut edges have a cleaner and more elegant look.</p>
                    </div>
                </article>
                <article className='cutting__item'>
                    <img src={cutting3} alt='material img' className='cutting__item__img'/>
                    <div className='cutting__item__content'>
                        <h1 className='cutting__item__title'>Black</h1>
                        <p className='cutting__item__text'>This cutting option provides signs in the shape of your design without any extra edges.</p>
                    </div>
                </article>
                <article className='cutting__item'>
                    <img src={cutting4} alt='material img' className='cutting__item__img'/>
                    <div className='cutting__item__content'>
                        <h1 className='cutting__item__title'>White</h1>
                        <p className='cutting__item__text'>With this option, the sign is cut in the exact shape of the design with an extra border around it.</p>
                    </div>
                </article>
            </section>
        </div>
        <div className='features__container'>
            <h2 className='title'>Lamination</h2>
            <p className='features__paragraph'>To make every piece of sign more durable, we offer lamination services. The special coating protects the material and the printing from abrasion. During the process of lamination, the printed sign is covered with a protective layer to prevent the surface of the sign from scratching. With this film coating, your acrylic printing will retain its initial look for a long period. We offer two types of lamination: glossy and matte.</p>
            <h3 className='features__container__title'>Lamination options</h3>
            <section className='lamination__item__container'>
                <article className='lamination__item'>
                    <img src={lamination1} alt='material img' className='lamination__item__img'/>
                    <div className='lamination__item__content'>
                        <h1 className='lamination__item__title'>Clear</h1>
                        <p className='lamination__item__text'>The square or rectangle-shaped signage will have standard sharp edges with pointed corners.</p>
                    </div>
                </article>
                <article className='lamination__item'>
                    <img src={lamination2} alt='material img' className='lamination__item__img'/>
                    <div className='lamination__item__content'>
                        <h1 className='lamination__item__title'>Frosted</h1>
                        <p className='lamination__item__text'>The sharp edges of the signs will be rounded. Signs with round cut edges have a cleaner and more elegant look.</p>
                    </div>
                </article>
            </section>
        </div>
        </>
    )
}

export default Features