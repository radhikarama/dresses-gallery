import React from 'react'
import './Cart.css'

const CartItems = ({cartitems,AddItemhandler,RemoveItemhandler,Clearcartitems}) => {
    const Total_price=cartitems.reduce((price,items)=>price+items.quantity * items.price ,0)
    
  return (
    <div className='cart'>
        <div className='header'> cart items</div>
        <div>
    {
    cartitems.length > 1 &&(
     <button className='clear-cartitems ' onClick={()=>Clearcartitems(cartitems)}>clearitems</button>
     )}
            </div>
    <div>
     {
         cartitems.length===0 && (
             <div className='empty-cart'>cart is empty</div>
         )
     }</div>{/*End clear button */}

     {/* cart-list */}
    
     <div>

{
cartitems.map((item)=>

<div key={item.id}  className='cart-list'>
    <div className='cart-image'> <img src={item.image} alt={item.name}/> </div>
    
    <div className='cart-name'>{item.name}</div>
   
    <div className='cart-quantityitems'>
        <button className='add-cart' onClick={()=>AddItemhandler(item)}>+</button>
        <button className='remove-cart' onClick={()=>RemoveItemhandler(item)}>-</button>
           </div>
    <div className='price-ofitems'>{item.quantity}*{item.price}</div>
</div>
)

}</div>
     {/* end-cart-list */}
           
<div className='total-cartitems'>Total Price : $ {Total_price}</div>
  
     {/* cart-End */}</div>
  )
}

export default CartItems
