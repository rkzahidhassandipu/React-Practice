import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Bootstrap = () => {
  return (
    <Card style={{width: "20rem"}} className='mt-5 p-3'>
        <Card.Body>
        <Card.Title className='text-center'>Card Title</Card.Title>

        
        <p>ext commonly used in publishing and web design to simulate the appearance of real text without actually having meaningful content. It helps designers and developers focus on layout and design elements without being distracted by readable text.</p>
        <Button>Learn more</Button>
        </Card.Body>
    </Card>
  )
}

export default Bootstrap