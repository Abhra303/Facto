import { Row , Col} from "react-bootstrap";

const Result = props => {
    let results = null ;

    if (props.results) {
        results = props.results;
    }
    return (
        <Row>
            { results ? results.map( result => (
                <Col>
                    Hello how are you?
                </Col>
            )): (
                    <Col>
                        Sorry, we didn't find any document supporting this statement...
                    </Col>
            )}
        </Row>
    )
}

export default Result;