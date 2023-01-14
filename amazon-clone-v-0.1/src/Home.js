import React from 'react'
import './Home';
import './Home.css'
import Product from "./Product"
function Home(props) {
  return (
    <div className="home">
    <div className="home__container">
{/* banner  */}
    <img className="home__image" alt = "HomeBanner" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81Fz0O50z0L._SX3000_.jpg"/>
    
{/* product rows */}
{/* row1 */}
<div className='home__row'>
<Product 
id = {12345}
title = "the lean startup "
price={29.99}
image="http://cdn.shopify.com/s/files/1/0068/4526/8019/collections/rajyog-mrugnayani-silk-sarees-banner-2020_1200x1200.jpg?v=1610111749"
rating = {5}
/>
<Product 
id = {12345}
title = "the lean startup"
price={29.99}
image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7I503HeZx6o69SYS5UW7QGgxP3FcHN0JEwpB4x7YFy_MbqAH3jJqSIH6XHc2wqJh12zw&usqp=CAU"
rating = {5}
/>

</div>
{/* row2 */}
<div className='home__row'>
<Product 
id = {12345}
title = "the lean startup"
price={29.99}
image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51vfWs6cwyL._AC_UL640_FMwebp_QL65_.jpg"
rating = {5}
/>
<Product 
id = {12345}
title = "the lean startup"
price={29.99}
image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/617WFTDcUVL._AC_UL640_FMwebp_QL65_.jpg"
rating = {5}
/>
<Product 
id = {12345}
title = "the lean startup"
price={29.99}
image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61sI2aeorlL._AC_UL640_FMwebp_QL65_.jpg"
rating = {5}
/>
</div>
<Product 
id = {12345}
title = "the lean startup"
price={29.99}
image="http://cdn.shopify.com/s/files/1/0068/4526/8019/collections/rajyog-mrugnayani-silk-sarees-banner-2020_1200x1200.jpg?v=1610111749"
rating = {5}
/>
{/* row3 */}
<div className='home__row'>

</div>


    </div>
    </div>
  )
}
export default Home
