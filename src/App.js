import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Data from './Components/BackEnd/Data'
import Header from './Components/ForntEnd/Header'
import Routers from './Components/ForntEnd/SwitchingComponents/Routers'

const App = () => {
  const {dresses} = Data;
  const [cartitems , SetCartitems] = useState([]);
  
  const AddItemhandler=(productitems)=>{
    console.log('first' , productitems.id)
      const ItemExist = cartitems.find((item)=>item.id === productitems.id);
      if(ItemExist){
        console.log('first11' , productitems.id)
        SetCartitems(cartitems.map((item)=>item.id === productitems.id
        ?{...ItemExist,quantity:ItemExist.quantity+1} : item))

      }else{
       console.log('sagdh')
          SetCartitems([...cartitems,{...productitems,quantity:1}])
          console.log('items',cartitems)
      }  
  }
  const RemoveItemhandler=(removeitem)=>{
      const ItemExist=cartitems.find((item)=>item.id === removeitem.id);
      if(ItemExist.quantity===1){
        SetCartitems(cartitems.filter((item)=>item.id !== removeitem.id))
        }else{
          SetCartitems(cartitems.map((item)=>item.id === removeitem.id
          ?{...ItemExist,quantity:ItemExist.quantity-1} : item))
       
        }
  }
  const Clearcartitems=(clearitems)=>{
      SetCartitems([])
  }
  return (
    <div>
      <BrowserRouter>
      <Header cartitems={cartitems}/>
      <Routers dresses={dresses}
      AddItemhandler={AddItemhandler} cartitems={cartitems}
      RemoveItemhandler={RemoveItemhandler}
      Clearcartitems={Clearcartitems}/>
      </BrowserRouter>
    </div>
  )
}

export default App