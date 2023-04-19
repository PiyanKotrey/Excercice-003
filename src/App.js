import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import React, { useEffect, useState } from 'react';
import axios from 'axios';	

function App() {
  const [productsList,setProductsList] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() =>{
    setTimeout(() =>{
    axios.get('https://api.escuelajs.co/api/v1/products')
    .then(res=>setProductsList(res.data))
    setLoading(false)
  },2000)
  },[])
  return (
    <div>
    {
      loading?
      
      <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
      </div>
:
    productsList.map(product =>(
      <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={product.images} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          {product.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={product.images} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          {product.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={product.images} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          {product.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
    ))
  }
    </div>
  );
}

export default App;

