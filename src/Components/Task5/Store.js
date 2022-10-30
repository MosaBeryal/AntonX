import React,{useContext,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Store.module.css'
import fetchContext from './Context/fetchContext';
import { useSearchParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import ProductDetail from './ProductDetail';




function Store(props) {
  const fetchedData=useContext(fetchContext)

  return (
    <div>
      <div className={styles.container}>
    {
      
      fetchedData.map((productData)=>
      

        <Card className={styles.item1} style={{ width: '18rem' ,backgroundColor:"white" , borderRadius:"20px"}}  key={productData.id} 
        >
          <Card.Img variant="top" 
          
          src={productData.image} style={{width:"280px" ,height:"200px" }  }
          
          />
          <Card.Body  >
            <Card.Title style={{fontSize:"18px" , fontWeight:"700"}}>{productData.title}</Card.Title>
            <Card.Text style={{fontSize:"35px" , color:" #6666ff" , fontWeight:"800"}}>
            {
              productData.price
            }
            $
            </Card.Text>
            <div className="d-grid gap-2">
          <Button style={{backgroundColor:"#6666ff" , fontWeight:"700"}} size="lg" onClick={()=>{props.addToCart(productData)}} as={Link} to='/cart'>
            Add to Cart
          </Button>
          </div>
          </Card.Body>
          
        </Card>
        
        

        
      )
    }
    </div>
    </div>
  );
}

export default Store;