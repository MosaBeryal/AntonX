import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "./images/star.svg";
import { BsCart} from "react-icons/bs";
import { SiArlo } from "react-icons/si";
import {useSelector} from 'react-redux'
function Navb() {
  //Now here in selector we will give and subscriber to get what get changes frequently
  //Redux is a subscriber model , we can subscribe any data 

  const items = useSelector(state=>state.cart);
  return (
    <div>
      <Navbar variant="light">
        <Container style={{ marginTop: "20px" }}>
        <Nav.Link
          as={Link}
          to='/'>
           <h1>
           {<SiArlo></SiArlo>}
            </h1> 
          </Nav.Link>

          <Nav>
            <Nav.Link as={Link} to="/" style={{ color: "black" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/store" style={{ color: "black" }}>
              Stores
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" style={{ color: "black" }}>
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: "black" }}>
              Contact
            </Nav.Link>
            
          </Nav>
        <Nav.Link>
          <p style={{backgroundColor:" #D9D9D9" , borderRadius:"2px" ,width:"150px" , textAlign:"center"}}>
           {<BsCart fontSize="20px"/>} Cart {items.length}
          </p>
        </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navb;
