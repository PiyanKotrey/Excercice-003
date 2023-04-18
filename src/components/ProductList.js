import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
        <th>UpdatedDate</th>
        <th>Images</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.updatedAt}</td>
            <td><img src='api.escuelajs.co/api/v1/products'/></td>
            <Button variant="outline-primary">Buy Now</Button>{' '}
            <Button variant="outline-primary">AddToCard</Button>{' '}
          </tr>
        ))}
      </tbody>
  </Table>
  );
};

export default ProductList;

 
