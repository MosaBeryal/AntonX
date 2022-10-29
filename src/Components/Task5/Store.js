import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import nike from './images/nike2.png'

function Store() {
  return (
    <Card style={{ width: '18rem' ,backgroundColor:"#F2F1FE" , borderRadius:"20px"}} >
      <Card.Img variant="top" src={nike}  />
      <Card.Body  >
        <Card.Title style={{fontSize:"35px" , fontWeight:"700"}}>Nike-Fold Sack Backpack Fit</Card.Title>
        <Card.Text style={{fontSize:"50px" , color:" #6666ff" , fontWeight:"800"}}>
        999$
        </Card.Text>
        <div className="d-grid gap-2">
      <Button style={{backgroundColor:"#6666ff" , fontWeight:"700"}} size="lg">
        Add to Cart
      </Button>
      </div>
      </Card.Body>
    </Card>
  );
}

export default Store;