import React from 'react'
import './footer.scss'
import footerLogo from '../../assets/images/footerLogo.png'
import norton from '../../assets/images/norton.png'


const footer = [
    {id:1 , href: '#' , text: 'Acrylic Signs'},
    {id:2 , href: '#' , text: 'Aluminium Signs'},
    {id:3 , href: '#' , text: 'Backlit Decals'},
    {id:4 , href: '#' , text: 'Brushed Aluminium Signs'},
    {id:5 , href: '#' , text: 'Canvas Signs'},
    {id:6 , href: '#' , text: 'Car Decals'},
    {id:7 , href: '#' , text: 'Composite Aluminium Signs'},
    {id:8 , href: '#' , text: 'Fabric Banners'},
    {id:9 , href: '#' , text: 'Floor Decals'},
    {id:10 , href: '#' , text: 'Foamboard Signs'},
    {id:11 , href: '#' , text: 'Frosted Window Decals'},
    {id:12 , href: '#' , text: 'Gatorboard Signs'},
    {id:13 , href: '#' , text: 'Magnetic Signs'},
    {id:14 , href: '#' , text: 'Mesh Banners'},
    {id:15 , href: '#' , text: 'Perforated Window Decals'},
    {id:16 , href: '#' , text: 'Pop up Displays'},
    {id:17 , href: '#' , text: 'PVC Signs'},
    {id:18 , href: '#' , text: 'Reflective Aluminium Signs'},
    {id:19 , href: '#' , text: 'Roll Up Banners'},
    {id:20 , href: '#' , text: 'Reflective Aluminium Signs'},
    {id:21 , href: '#' , text: 'Roll Up Banners'},
]

const templates = [
    {id:1 , href: '#' , text: 'Business'},
    {id:2 , href: '#' , text: 'Decorations'},
    {id:3 , href: '#' , text: 'Events'},
    {id:4 , href: '#' , text: 'Government'},
    {id:5 , href: '#' , text: 'Holiday'},
    {id:6 , href: '#' , text: 'Political'},
    {id:7 , href: '#' , text: 'Safety/Notice'},
    {id:8 , href: '#' , text: 'Sport'},
    {id:9 , href: '#' , text: 'Traffic'}
]

function Footer(){
    let FooterLinks = footer.map((products, index) => <a href={products.href} target='blank' className='products_menu__item' key={index}>{products.text}</a>)
    let Template = templates.map((templates, index) => <a href={templates.href} target='blank' className='products_menu__item' key={index}>{templates.text}</a>)
    
    return(
        <footer className='footer'>
            <div className='footer__container wrapper'>
                <div className='footer_logo__container'>
                    <img src={footerLogo} className='footer_logo' alt='logo'/> 
                    <a href='https://www.facebook.com/STDev.company/' target='blank' className='footer_logo__link'>© 2019 Square Signs.<br/>All rights reserved</a>
                </div>
                <div className='products_menu__container'>
                    <div className='products_menu__block'>
                        <h3 className='products_menu__title'>Products</h3>
                        <div className='products_menu'>
                            {FooterLinks}
                        </div>
                    </div> 
                    <div className='products_menu__block'>
                        <h3 className='products_menu__title'>Templates</h3>
                        <div className='products_menu'>
                            {Template}
                        </div>
                    </div> 
                </div>
                <div className='footer__menu'>
                    <div className='company_menu__block'>
                        <h3 className='products_menu__title'>company</h3>
                        <a href='/' target='blank' className='products_menu__item'>Policies</a>
                        <a href='/' target='blank' className='products_menu__item'>About</a>
                    </div> 
                    <div className='company_menu__block'>
                        <h3 className='products_menu__title'>support</h3>
                        <a href='/' target='blank' className='products_menu__item'>Contact Us</a>
                    </div> 
                    <div className='company_menu__block'>
                        <h3 className='products_menu__title'>Resources</h3>
                        <a href='/' target='blank' className='products_menu__item'>FAQ</a>
                        <a href='/' target='blank' className='products_menu__item'>Blog</a>
                        <a href='/' target='blank' className='products_menu__item'>Sitemap</a>
                    </div> 
                    <div className='company_menu__block'>
                        <h3 className='products_menu__title'>We Are Social</h3>
                        <div className='company_socials'>
                            <a href='/' target='blank' className='products_menu__item'><span className='icon-facebook'/></a>
                            <a href='/' target='blank' className='products_menu__item'><span className='icon-instagram'/></a>
                            <a href='/' target='blank' className='products_menu__item'><span className='icon-twitter'/></a>
                            <a href='/' target='blank' className='products_menu__item'><span className='icon-youtube'/></a>
                            <a href='/' target='blank' className='products_menu__item'><span className='icon-linkedin'/></a>
                        </div>
                    </div>
                    <div className='footer__menu__contacts'>
                        <h3 className='products_menu__title'>We Are Social</h3>
                        <a href='/' type='address' className='footer__menu__contacts__item'>15101 Keswick Street Van Nuys, California, 91405, USA</a>
                        <a href='tel:+8448334455' className='footer__menu__contacts__item'>(844) 833-4455</a>
                        <a href='mailto:support@squaresigns.com' className='footer__menu__contacts__item'>support@squaresigns.com</a>
                        <a href='https://ru.norton.com/' target='blank'>
                            <img src={norton} className='norton_logo' alt='Norton logo'/>
                        </a>
                    </div>
                </div>          
            </div>
        </footer>
    )
}

export default Footer