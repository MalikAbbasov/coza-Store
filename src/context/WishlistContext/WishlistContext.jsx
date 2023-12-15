import React from 'react'
import { createContext } from 'react'
import useLocalStorage from '../../hook/useLocalStorage'

export const WishlistContext = createContext();

function WishlistProvider({children}) {

const [wishlist, setWishlist] = useLocalStorage("wishlist", [])

const addWish=(item)=>{
let elementIndex= wishlist.findIndex((x)=>x.id===item.id)
if (elementIndex === -1) {
  setWishlist([...wishlist,item])
}

}

const removeWish = (id) => {
  setWishlist(wishlist.filter((x) => x.id !== id));
};

const data ={
  wishlist,addWish,removeWish
}

  return (
    <div>
        <WishlistContext.Provider value={data}>
          {children}
        </WishlistContext.Provider>
    </div>
  )
}

export default WishlistProvider