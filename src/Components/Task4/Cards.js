import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  const fetchedData=props.fetchedData
  return (
    <Card style={{ width: '18rem', height:'34rem' }}>
      <Card.Img variant="top" src={fetchedData.url} />
      <Card.Body>
        <Card.Title>{fetchedData.title}</Card.Title>
        <Card.Text>
          {
            fetchedData.title
          }
        </Card.Text>
        <Button variant="primary" >Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;