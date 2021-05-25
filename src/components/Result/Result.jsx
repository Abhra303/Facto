import { Row , Col, Container} from "react-bootstrap";
import './Result.scss';

const Result = props => {
    let results = null ;

    if (props.results) {
        results = props.results;
        console.log('results', results);
    }
    return (
        <Container className='result-wrapper'>
            { 
                results ? results.map( result => (
                    <Row>
                        <Col>
                            {console.log('img src =', result.url_to_image.raw)}
                            <img src={result.url_to_image.raw} alt='images' className='result-image'/>
                        </Col>
                        <Col>
                            <Row>
                                {}
                                <a href={result.url.raw} ><h5>{result.title.raw}</h5></a>
                                <p>{result.published_at.raw}  by {result.author.raw}</p>
                            </Row>
                            <Row>
                                <div>
                                    {result.description.raw}
                                </div>
                            </Row>
                        </Col>
                    </Row>
                )): (
                    <Row>
                        <Col>
                            Sorry, we didn't find any document supporting this statement...
                        </Col>
                    </Row>
                )
            }
        </Container>
    )
}

export default Result;