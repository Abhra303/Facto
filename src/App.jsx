import { Form, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './App.scss';
import {Container, Col, Row} from 'react-bootstrap';
import Result from './components/Result/Result';
import { useState } from 'react';
import LoadingResult from './components/Loading/LoadingResult';

function App() {

  const [result, setResult] = useState('no-content');
  const [loading, setLoading] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setLoading(true);
    let data = document.getElementById('text').innerHTML;

    // TODO: send this data to elastic search

    // TODO: grab the result from elastic
    let results = null;
    if (results) {
      setLoading(false);
      setResult(results);
    }
    else {
      setLoading(false);
    }

  }
  return (
    <div className='wrapper'>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home" className='brand'>
          {/* <img
            alt=""
            src="#"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '} */}
          FACTO
        </Navbar.Brand>
      </Navbar>
      <h3 className='heading'>It is a engine that checks facts . Enter the text in the below text area and check if that has any supportive background or not..</h3>
      <Container>
        <Row>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
            <Form id='form'>
              <Form.Group controlId="ControlTextarea">
                <Form.Label>Write text that needs to be checked ...</Form.Label>
                <Form.Control as="textarea" rows={15} id="text" />
              </Form.Group>
              <Button variant="primary" type="submit" className='mx-auto' onClick={handleClick}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
            <h5>See the results</h5>
            <div className='result-container'>
            { loading ? (
              <LoadingResult/>
            ): (result ? ( result === 'no-content'? (
              "Submit text to check the facts"
            ):
              <Row>
                <Col>
                  <Result results={result} />
                </Col>
             </Row>
            ): "Sorry we didn't find any supportive document for this statement"
            )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
