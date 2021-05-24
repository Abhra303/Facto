import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './App.scss';
import {Container, Col, Row} from 'react-bootstrap';
import Result from './components/Result/Result';
import { useState } from 'react';

function App() {

  const [result, setResult] = useState('');

  function handleClick(e) {
    e.preventDefault();
    let data = document.getElementById('text').innerHTML;

    // TODO: send this data to elastic search

    // TODO: grab the result from elastic
    let result = fromElastic();
    if (result) {
      setResult(result);
    }

  }
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="ControlTextarea">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={15} id="text" />
            </Form.Group>
            <Button variant="primary" type="submit" className='mx-auto' onClick={handleClick}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      { result? (
        <Row>
          <Col>
            <Result results={result} />
          </Col>
      </Row>
      ): '' }
      
    </Container>
  );
}

export default App;
