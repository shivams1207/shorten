import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
    return (
        <Row>
            <Col>
                <div className='logo text-center'>
                    <h1>SHORTEN</h1>
                </div>
            </Col>
        </Row>
    )
}

export default Header