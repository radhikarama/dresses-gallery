import React from 'react'
import './Home.css'

const Home = ({dresses,AddItemhandler}) => {
  return (
    <div className='home'>
        {
            dresses.map((items)=>(
            <div key={items.id} className='card'>
                <div className='dress-image'>
                <img  src={items.image} alt={items.name}/>
                </div>
                <div className='dress-name'>
               Name :   {items.name}
                </div>
                <div className='dress-price'> Price :    $  {items.price}</div>
                <button className='addbutton' onClick={()=>AddItemhandler(items)}>Add to cart</button>

            </div>
            ))
        }
    </div>
  )
}

export default Home