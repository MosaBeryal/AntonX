import React,{useState} from 'react'
import styles from './Navigation.module.css'
import logo from './Images/logo .svg'
import { Button } from 'react-bootstrap'
import {HiOutlineMenu} from "react-icons/hi";
import { style } from '@mui/system';

function NavigationBar() {
    const[showMedia,setShowMedia]=useState(false);
  return (
    <div>
        <nav className={styles.nav}>
            <div className={styles.nav_logo}>
                <a href='#'>

                <img src={logo} width="60px">
                </img>
                </a>
                <div className={styles.burgerMenu}>
                <a href='#'>
                <HiOutlineMenu color='white' onClick={()=>{setShowMedia(!showMedia)}}/>
                </a>

            </div>

            </div>
            <div className={styles.nav_menu}>
                <ul> 
                     <li>
                        <a href="#">Products</a>
                    </li>
                    <hr className={styles.hr_line}/>
                    
                    <li>
                    <a href="#">Company</a>

                  </li>
                  <hr className={styles.hr_line}/>
                 

                    <li>
                    <a href="#">Pricing</a>

                    </li>
                    <hr className={styles.hr_line}/>
                   
                    <li>
                    <a href="#">Rewards</a>

                    </li>
                    <hr className={styles.hr_line}/>
                    
                    <li>
                    <a href="#">Resources</a>

                    </li>
                </ul>

            </div>
            <div className={styles.nav_signin}>
                <div className={styles.signIn}>

                       <a>
                        Sign in
                        </a>  
                </div>

                <div className={styles.businessBtn}>

                    <Button size='sm' className={styles.btn}>
                        Start my business
                    </Button>
                </div>


            {/* <div className={styles.burgerMenu}>
                <a href='#'>
                <HiOutlineMenu color='white' onClick={()=>{setShowMedia(!showMedia)}}/>
                </a>

            </div> */}
                
            </div>
        </nav>
      
    </div>
  )
}

export default NavigationBar
