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
    console.log('Hello inside handleClick');
    e.preventDefault();
    setResult('no-content');
    setLoading(true);
    let data = document.getElementById('text').value;

    console.log('data', data);

    // TODO: send this data to elastic search
    fetch('/check-fact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        q: data
      })
    }).then(res => (
      res.json()
    )).then(results => {
      console.log('results', results);
      setLoading(false);
      if (results) {
        setResult(results.result);
      }
    }).catch(err => {
      console.log(err);
    })
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
            { 
              loading ? (
                  <LoadingResult/>
              ): (
                  result ? ( result === 'no-content'? (
                    "Submit text to check the facts"
                    ): (
                        <Result results={result} />
                    )
                  ): "Sorry we didn't find any supportive document for this statement"
              )
            }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
