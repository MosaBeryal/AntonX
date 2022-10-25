import Button from 'react-bootstrap/Button';
import './Task4.css'

function FetchDataButton(props) {
  return (
    <>
      <div className="mb-2">
        <Button variant="info" size="lg" className='center' onClick={props.fetchButton}>
          FetchData
        </Button>{' '}
      </div>
    </>
  );
}

export default FetchDataButton;