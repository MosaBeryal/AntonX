import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import styles from './Cart.module.css'
import fetchContext from './Context/fetchContext';
import { Button, Container , Alert } from 'react-bootstrap';
function Cart(props) {
  
const [totalprice,setTotalPrice]=useState(0);
  const cartData = props.data
  const alert=()=>{
    
    

  }

  return (
    
    
    <div>
    
      {cartData.map((data) =>
      <div className={styles.container}>
      
        <div className={styles.item1}>
           <img src={data.image} width="171px" height="139px">
          

           </img>
        </div>
        <div className={styles.item2}>
            <h3 >
              {
                data.title
              }
            </h3>
          </div>
<div className={styles.item3}>
            <h1>
              {
                data.price
              }
            </h1>
  </div>



        
            </div>
            
      )}
      <div>
        


          <h1 className={styles.amount}>
 
            Total amount:{cartData.map(item=>item.price).reduce((total,value)=>total+value,0)}
             
             

            
          </h1>
        </div>
        <div className={styles.checkout}>
          <Button BackGroundColor="#7E74F1" size='lg' style={{width:"300px"}} onClick={
            alert(` Total Price of items ${cartData.map(item=>item.price).reduce((total,value)=>total+value,0)}`)
          }
           >
            Checkout
          </Button>

        </div>

          </div>



          );
}

export default Cart;
