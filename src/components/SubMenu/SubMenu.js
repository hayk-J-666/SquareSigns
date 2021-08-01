import React from 'react'

function SubMenu({setSelectMenu , selectMenu}){
    return(
        <div className='subMenu wrapper'>
            <button onClick={() => setSelectMenu(1)} tabIndex='1' className={selectMenu !== 1 ? 'subMenu__item' : 'subMenu__item subMenu__item--active'}>About Product</button>
            <button onClick={() => setSelectMenu(2)} tabIndex='2' className={selectMenu !== 2 ? 'subMenu__item' : 'subMenu__item subMenu__item--active'}>Specification And Usage</button>
            <button onClick={() => setSelectMenu(3)} tabIndex='3' className={selectMenu !== 3 ? 'subMenu__item' : 'subMenu__item subMenu__item--active'}>Installation</button>
            <button onClick={() => setSelectMenu(4)} tabIndex='4' className={selectMenu !== 4 ? 'subMenu__item' : 'subMenu__item subMenu__item--active'}>FAQ</button>
        </div>
    )
}

export default SubMenu