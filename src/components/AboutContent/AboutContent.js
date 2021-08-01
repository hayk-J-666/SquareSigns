import React from 'react'
import TopTemplates from '../TopTemplates/TopTemplates'
import Card1 from './../../assets/images/namplate.png'
import Card2 from './../../assets/images/Acrylicpicturesign.png'
import Card3 from './../../assets/images/Storedecorativeacrylicprintings.png'
import Card4 from './../../assets/images/standoffindoorAcrylicsign.png'
import Card5 from './../../assets/images/shutterstock_3.png'
import Card6 from './../../assets/images/beautysalonacrylicsign.png'

function AboutContent({selectMenu}){
    return(
        <>
            <div className='aboutContent wrapper'>
                <div className={selectMenu === 1 ? 'aboutContent__container' : 'displayNone'}>
                    <h2 className='aboutContent__container__title'>Acrylic Signs</h2>
                    <p className='aboutContent__container__paragraph'>Custom acrylic signs can be the perfect asset to your company’s branding efforts. Also known as plexiglass, acrylic is an ideal material for signs of all purposes - thus it can be used to make both business and decorative signs. As a matter of fact, photos printed on acrylic can be found in some of the finest galleries in the world.</p>
                    <p className='aboutContent__container__paragraph'>At Square Signs, we offer cutting-edge acrylic printings with your custom design. Just order your sign today and get it shipped the next day to any destination in the USA and Canada.</p>
                    <p className='aboutContent__container__paragraph'>Want to save some cash on glass prints? Acrylic signs are the best glass substitute. Not only does this material look identical to glass but it is also more lightweight and durable. Being a versatile material, plexiglass can be used both indoors and outdoors… and can withstand harsh weather conditions.</p>
                    <p className='aboutContent__container__paragraph'>In terms of effectiveness and durability, custom acrylic prints are the best option for business and personal needs. Plexiglass is the perfect material if you want a refined and eye-grabbing look for your signage.The vivid color density of the printing and the attractive graphics won’t leave anyone indifferent.</p>
                    <p className='aboutContent__container__paragraph'>Custom printed acrylic signs will give off an ideal impression to your potential clients. Send us your personal images or use one of our free designs that fit any category and print them on your acrylic sign.</p>
                </div>
                <div className={selectMenu === 2 ? 'aboutContent__container' : 'displayNone'}>
                    <h2 className='aboutContent__container__title'>Specification And Usage</h2>
                    <p className='aboutContent__container__paragraph'>Custom acrylic signs can be the perfect asset to your company’s branding efforts. Also known as plexiglass, acrylic is an ideal material for signs of all purposes - thus it can be used to make both business and decorative signs. As a matter of fact, photos printed on acrylic can be found in some of the finest galleries in the world.</p>
                    <p className='aboutContent__container__paragraph'>Custom printed acrylic signs will give off an ideal impression to your potential clients. Send us your personal images or use one of our free designs that fit any category and print them on your acrylic sign.</p>
                </div>
                <div className={selectMenu === 3 ? 'aboutContent__container' : 'displayNone'}>
                    <h2 className='aboutContent__container__title'>Installation</h2>
                    <p className='aboutContent__container__paragraph'>Custom acrylic signs can be the perfect asset to your company’s branding efforts. Also known as plexiglass, acrylic is an ideal material for signs of all purposes - thus it can be used to make both business and decorative signs. As a matter of fact, photos printed on acrylic can be found in some of the finest galleries in the world.</p>
                    <p className='aboutContent__container__paragraph'>Want to save some cash on glass prints? Acrylic signs are the best glass substitute. Not only does this material look identical to glass but it is also more lightweight and durable. Being a versatile material, plexiglass can be used both indoors and outdoors… and can withstand harsh weather conditions.</p>
                    <p className='aboutContent__container__paragraph'>In terms of effectiveness and durability, custom acrylic prints are the best option for business and personal needs. Plexiglass is the perfect material if you want a refined and eye-grabbing look for your signage.The vivid color density of the printing and the attractive graphics won’t leave anyone indifferent.</p>
                    <p className='aboutContent__container__paragraph'>Custom printed acrylic signs will give off an ideal impression to your potential clients. Send us your personal images or use one of our free designs that fit any category and print them on your acrylic sign.</p>
                </div>
                <div className={selectMenu === 4 ? 'aboutContent__container' : 'displayNone'}>
                    <h2 className='aboutContent__container__title'>FAQ</h2>
                    <p className='aboutContent__container__paragraph'>Custom acrylic signs can be the perfect asset to your company’s branding efforts. Also known as plexiglass, acrylic is an ideal material for signs of all purposes - thus it can be used to make both business and decorative signs. As a matter of fact, photos printed on acrylic can be found in some of the finest galleries in the world.</p>
                    <p className='aboutContent__container__paragraph'>At Square Signs, we offer cutting-edge acrylic printings with your custom design. Just order your sign today and get it shipped the next day to any destination in the USA and Canada.</p>
                    <p className='aboutContent__container__paragraph'>Custom acrylic signs can be the perfect asset to your company’s branding efforts. Also known as plexiglass, acrylic is an ideal material for signs of all purposes - thus it can be used to make both business and decorative signs. As a matter of fact, photos printed on acrylic can be found in some of the finest galleries in the world.</p>
                    <p className='aboutContent__container__paragraph'>At Square Signs, we offer cutting-edge acrylic printings with your custom design. Just order your sign today and get it shipped the next day to any destination in the USA and Canada.</p>
                    <p className='aboutContent__container__paragraph'>Want to save some cash on glass prints? Acrylic signs are the best glass substitute. Not only does this material look identical to glass but it is also more lightweight and durable. Being a versatile material, plexiglass can be used both indoors and outdoors… and can withstand harsh weather conditions.</p>
                    <p className='aboutContent__container__paragraph'>In terms of effectiveness and durability, custom acrylic prints are the best option for business and personal needs. Plexiglass is the perfect material if you want a refined and eye-grabbing look for your signage.The vivid color density of the printing and the attractive graphics won’t leave anyone indifferent.</p>
                    <p className='aboutContent__container__paragraph'>Custom printed acrylic signs will give off an ideal impression to your potential clients. Send us your personal images or use one of our free designs that fit any category and print them on your acrylic sign.</p>
                </div>
                <TopTemplates/>
            </div>
            <section className='aboutContent__cards wrapper'>
                <article className='aboutContent__cards_item'>
                    <img src={Card1} alt='card1' className='aboutContent__cards_item__img'/>
                    <h1 className='aboutContent__cards_item_title'>Acrylic Nameplates</h1>
                    <p className='aboutContent__cards_item_text'>Number one signage essential at business centers and offices. Display the names of your employees on the door with elegant acrylic glass prints. Put up acrylic plaques with standoffs that provide a more professional look and feel.</p>
                </article>
                <article className='aboutContent__cards_item'>
                    <img src={Card2} alt='card1' className='aboutContent__cards_item__img'/>
                    <h1 className='aboutContent__cards_item_title'>Acrylic Nameplates</h1>
                    <p className='aboutContent__cards_item_text'>Number one signage essential at business centers and offices. Display the names of your employees on the door with elegant acrylic glass prints. Put up acrylic plaques with standoffs that provide a more professional look and feel.</p>
                </article>
                <article className='aboutContent__cards_item'>
                    <img src={Card3} alt='card1' className='aboutContent__cards_item__img'/>
                    <h1 className='aboutContent__cards_item_title'>Acrylic Nameplates</h1>
                    <p className='aboutContent__cards_item_text'>Number one signage essential at business centers and offices. Display the names of your employees on the door with elegant acrylic glass prints. Put up acrylic plaques with standoffs that provide a more professional look and feel.</p>
                </article>
                <article className='aboutContent__cards_item'>
                    <img src={Card4} alt='card1' className='aboutContent__cards_item__img'/>
                    <h1 className='aboutContent__cards_item_title'>Acrylic Nameplates</h1>
                    <p className='aboutContent__cards_item_text'>Number one signage essential at business centers and offices. Display the names of your employees on the door with elegant acrylic glass prints. Put up acrylic plaques with standoffs that provide a more professional look and feel.</p>
                </article>
                <article className='aboutContent__cards_item'>
                    <img src={Card5} alt='card1' className='aboutContent__cards_item__img'/>
                    <h1 className='aboutContent__cards_item_title'>Acrylic Nameplates</h1>
                    <p className='aboutContent__cards_item_text'>Number one signage essential at business centers and offices. Display the names of your employees on the door with elegant acrylic glass prints. Put up acrylic plaques with standoffs that provide a more professional look and feel.</p>
                </article>
                <article className='aboutContent__cards_item'>
                    <img src={Card6} alt='card1' className='aboutContent__cards_item__img'/>
                    <h1 className='aboutContent__cards_item_title'>Acrylic Nameplates</h1>
                    <p className='aboutContent__cards_item_text'>Number one signage essential at business centers and offices. Display the names of your employees on the door with elegant acrylic glass prints. Put up acrylic plaques with standoffs that provide a more professional look and feel.</p>
                </article>
            </section>
        </>
    )
}

export default AboutContent