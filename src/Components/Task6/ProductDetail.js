import React,{useEffect,useState} from 'react'
import { Button } from 'react-bootstrap'
import styles from './ProductDetail.module.css'
import {  useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import Star from './Star';
import axios from 'axios'
import Loading from './Loading';
import './loading.module.css'


 const ProductDetail = (props) => {

const {id}=useParams()

  const[detail,setProductDetail]=useState([]);
  const[rating,setrating]=useState([]);
  // console.log('Obj=>', detail.id)
  // const[loading,setLoading]=useState();

  
  useEffect(() => {

    // setLoading(true)

    const fetchProductData = async () => {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProductDetail(data);
      // setLoading(false)
    };
    fetchProductData()
  
  },[]);
  useEffect(()=>{

     const detaiData=async()=>
    {
      const ratingData=await detail.rating
      setrating(ratingData)
  
    }
    detaiData();

  },[])
  
  
  

  return (
    <div>
      {/* {loading&&<Loading/>} */}
      
      <div className={styles.container}>

        <div className={styles.item1}>

          <h5 className={styles.category}>

            {detail.category}

          </h5>

          <h4 className={styles.title}>

            {detail.title}

          </h4>

          <p className={styles.description}>

            {detail.description}

          </p>

          <div className={styles.display}>

            <div className={styles.displayprice}>

              <h5 className={styles.price}>

                Rs:
                {detail.price}

              </h5>

            </div>

            <div className={styles.displayquantity}>

              <p >

                Qty{ 
                // rating.rating.count
                

                }
        </p>
              </div>


          </div>
          <div>

          <h2>

            Rating{
              
            }
            
              
              
            

          </h2>
          </div>
        <Button 
        style={{ backgroundColor: "#6666ff", fontWeight: "700", width: "300px" }} size="lg" 
        onClick={()=>{props.addToCart(detail)}}>
          Add to Cart
        </Button>

      </div>

      <div className={styles.item2}>

        <img src={detail.image} width="500px" height="400px" alt="product">

        </img>

      </div>
      
    </div>

      </div>
      
    
  )
}

export default ProductDetail
