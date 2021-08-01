import React, { useState }from 'react'
import './about.scss'
import SubMenu from '../SubMenu/SubMenu'
import AboutContent from '../AboutContent/AboutContent'
import Features from '../Features/Features'



function About(){

    const [selectMenu , setSelectMenu] = useState(1);

    return(
        <div className='about'>
            <SubMenu setSelectMenu={setSelectMenu} selectMenu={selectMenu}/>
            <AboutContent selectMenu={selectMenu}/>
            <Features/>
        </div>
    )
}

export default About