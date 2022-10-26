import Button from 'react-bootstrap/Button';
import './Task4.css'

function FetchDataButton(props) {
  return (
    <>
      <div className="mb">
        <Button variant="info" style={{
          backgroundColor:"#1C2C4F"
         ,color:"white" ,
         width:"300px", 
         fontSize:"30px",}} 
         onClick={props.fetchButton}>
          Fetch data
        </Button>{' '}
      </div>
    </>
  );
}

export default FetchDataButton;