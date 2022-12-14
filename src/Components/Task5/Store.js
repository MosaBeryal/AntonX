import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Store.module.css'
import fetchContext from './Context/fetchContext';
import {Link} from 'react-router-dom'
import {useState} from 'react'




function Store(props) {
  // const {fetchData , setData}= useState(fetchedData);
  const fetchedData=useContext(fetchContext)
  
  console.log(fetchedData)
  return (
    <div>
      <div className={styles.container}>

    {
      
      fetchedData.map((Data)=>
      

        <Card className={styles.item1} 
        style={{ width: '18rem' ,backgroundColor:"white" , borderRadius:"20px" ,textDecoration:"none"}}  
        key={Data.id} 
        >

          <Card.Img variant="top" 
      
          src={Data.image} 
          style={{width:"280px" ,height:"200px", borderRadius:"20px" }}
          />
          <Card.Body>

            <Card.Title 
            style={{fontSize:"18px" , fontWeight:"700" ,color:"black", textDecoration:"none"}} 
            as={Link} 
            to={`/store/productdetail/${Data.id}`}>
            {Data.title}
            </Card.Title>

            <Card.Text style={{fontSize:"35px" , color:" #6666ff" , fontWeight:"800"}}>

            {
              Data.price
            }
            $
            </Card.Text>
            <div className="d-grid gap-2">
          <Button 
          style={{backgroundColor:"#6666ff" , fontWeight:"700"}} 
          size="lg"
          onClick={()=>{props.addToCart(Data)}}  >
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