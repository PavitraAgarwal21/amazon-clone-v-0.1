import React from 'react'
import './Header.css'
import amazon_logo from './img/amazon_logo.png';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
 import searchIcons from "./img/searchIcon.png";
function Header(props) {
    const [{basket} ,dispatch] = useStateValue();
    return (
        <div className='header'>
            {/* logog  */}
           <Link to = "/">
           <img alt = "logo" className='header__logo' src={amazon_logo} />
           </Link>
            
            {/* search area  */}
            <div className='header__search'>
                <input className='header__searchInput' type='text'/>
                <img alt= "search_logo" className='header__searchIcon' src={searchIcons} />
                {/* <SearchIcon className='header__searchIcon'/> */}
                {/* <SearchIcon ></SearchIcon> */}
                  {/* logo for search  */}
            </div>
            {/* other navtopics of the navbar */}
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Yours</span>
                    <span className='header__optionLineTwo'>Prime </span>
                </div>

<div className= 'header__optionBasket'>
    <Link to = "/checkout">
    <img className='header__cartIcon' alt = "cart" src="https://img.icons8.com/sf-regular-filled/48/FFFFFF/shopping-cart.png"/>
    </Link>
    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
{/* ? for the handling the error  */}
    {/* <ShoppingBasket/> */}
</div>
           
           
           
           
            </div>
        </div>)
}
export default Header
