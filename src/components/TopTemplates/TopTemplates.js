import React from 'react'
import './TopTemlpates.scss'
import MaskGroup102 from '../../assets/images/MaskGroup102.png'
import MaskGroup107 from '../../assets/images/MaskGroup107.png'
import MaskGroup101 from '../../assets/images/MaskGroup101.png'
import MaskGroup108 from '../../assets/images/MaskGroup108.png'
import MaskGroup104 from '../../assets/images/MaskGroup104.png'
import MaskGroup103 from '../../assets/images/MaskGroup103.png'
import MaskGroup109 from '../../assets/images/MaskGroup109.png'
import MaskGroup100 from '../../assets/images/MaskGroup100.png'

function TopTemlpates(){
    return(
        <div className='aboutTemplates'>
            <h2 className='aboutTemplates__title'>Top Templates</h2>
            <form>
                <label className='search_container'>
                    <span className='visually-hidden'>serch input</span>
                    <input type='text' className='aboutTemplates__input'/>
                    <span className='searchIcon icon-search'/>
                </label>
            </form>
            <div className='aboutTemplates__container'>
                <img src={MaskGroup107} className='aboutTemplates__img aboutTemplates__img1'  alt='MaskGroup 107'/>
                <img src={MaskGroup102} className='aboutTemplates__img aboutTemplates__img2' alt='MaskGroup 102'/>
                <img src={MaskGroup101} className='aboutTemplates__img aboutTemplates__img3' alt='Mask Group 101'/>
                <img src={MaskGroup108} className='aboutTemplates__img aboutTemplates__img4' alt='Mask Group 108'/>
                <img src={MaskGroup104} className='aboutTemplates__img aboutTemplates__img5' alt='Mask Group 104'/>
                <img src={MaskGroup100} className='aboutTemplates__img aboutTemplates__img6' alt='MaskGroup 100'/>
                <img src={MaskGroup109} className='aboutTemplates__img aboutTemplates__img7' alt='MaskGroup 109'/>
                <img src={MaskGroup103} className='aboutTemplates__img aboutTemplates__img8' alt='MaskGroup 103'/>

            </div>
        </div>
    )
}

export default TopTemlpates