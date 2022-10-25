import Spinner from 'react-bootstrap/Spinner';
import styles from'./loading.module.css'

function Loading() {
  return (
    <>
    <div className={styles.center}>
    <Spinner animation="grow" variant="danger" size="lg"/>

    </div>
    </>
  );
}

export default Loading