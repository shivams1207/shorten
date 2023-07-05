import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <Row>
            <Col>
                <div className='copyright text-center'>
                    <p>© 2023 <b>shorten</b> - all right reserved</p>
                </div>
            </Col>
        </Row>
    )
}

export default Footer