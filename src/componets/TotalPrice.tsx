import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function TotalPrice(){
    return (
        <Row className ="row mx-auto m-5">

            <Col className ="col-6 col-md-2 offset-md-8">
                <h3>Total price: 598 $</h3>
            </Col>
            <Col  className ="col-6 col-md-2">
                <button type="submit" className ="btn btn-primary">Submit</button>
            </Col>
        </Row>

    )
}