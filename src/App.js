import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col lg="3"></Col>
          <Col className="mb-5 mt-5" lg="6">
            <Header />
            <Body />
            <Footer />
          </Col>
          <Col lg="3"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
