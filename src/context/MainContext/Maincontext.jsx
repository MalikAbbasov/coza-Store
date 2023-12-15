import React, {  createContext } from 'react'
import WishlistProvider from '../WishlistContext/WishlistContext'
import BasketProvider from '../BasketContext/BasketContext'


export const MainContext =createContext()

function MainProvider({children}) {

  return (
    <div>
      <WishlistProvider>
        <BasketProvider>{children}</BasketProvider>
      </WishlistProvider>
    </div>
  )
}

export default MainProvider