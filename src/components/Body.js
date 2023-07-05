import React from 'react';
import Form from './Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Body = () => {
  return (
    <div className='main-body'>
      <Row>
        <Col>
          <div className='form_heading text-center'>
            <h2>The <span>privacy-friendly</span> URL Shortener</h2>
          </div>
        </Col>
      </Row>
      <Form />
    </div>
  )
}

export default Body