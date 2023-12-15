import React, { useContext } from 'react'
import "./navbar.scss"
import { BasketContext } from '../../context/BasketContext/BasketContext'
import { WishlistContext } from '../../context/WishlistContext/WishlistContext'
import { Link } from 'react-router-dom'

function Navbar() {
    const {basket} = useContext(BasketContext)
    const {wishlist} = useContext(WishlistContext)

    const handleBasket = () => {
        document.querySelector(".basket").classList.toggle("activ")
    }

    const handleWishlist = () => {
        document.querySelector(".wishlist").classList.toggle("activ")
    }

  return (
    <div>
        <nav id='navbar'>
            <div className="container">
                <div className="left">
                    <div className="left_image">
                        <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp" alt="" />
                    </div>
                    <div className="left_pages">
                        <ul>
                            <Link to="/" >Home</Link>
                            <Link to="/shop">Shop</Link>
                            <Link to="/feature">Features <sup className='sup'>Hot</sup></Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="blog">Blog</Link>
                        </ul>
                    </div>
                </div>
                <div className="right">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i onClick={handleBasket} className="fa-solid fa-cart-shopping"><span>{basket.length}</span></i>
                <i onClick={handleWishlist} className="fa-solid fa-heart"><span>{wishlist.length}</span></i>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar