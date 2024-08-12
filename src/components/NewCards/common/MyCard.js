import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard({data}) {
  console.log(Object.values(data)[5]);
 const defaultImage='noImage.png'
  return (
    <Card style={{ width: '20rem',margin:'10px', height:'550px' }}>
      <Card.Img variant="top" src={Object.values(data)[5]?Object.values(data)[5]:defaultImage} height="200" alt={Object.keys(data)[2]} />
      <Card.Body>
        <Card.Title>{Object.values(data)[1]}</Card.Title>
        <Card.Text>
        {Object.values(data)[2]}
        </Card.Text>
        <Card.Text>{Object.values(data)[3]}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;