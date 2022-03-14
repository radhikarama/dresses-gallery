import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartItems from '../CartComponent/CartItems'
import Home from '../Home.js/Home'
import Signup from '../Signupcomponent/Signup'

const Routers = ({dresses,cartitems,AddItemhandler,RemoveItemhandler,Clearcartitems}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home dresses={dresses}
            AddItemhandler={AddItemhandler}/>}></Route>
            <Route path='/cart' element={<CartItems cartitems={cartitems}
            AddItemhandler={AddItemhandler} 
            RemoveItemhandler={RemoveItemhandler}
            Clearcartitems={Clearcartitems}/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
    </div>
  )
}

export default Routers