import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Form = (props) => {
    return (
        <div>
            <Container>
                <Row className="Row">
                    <Col className="col-1">Picture </Col>
                    <Col className="col-2">
                        <form onSubmit = {props.getWeather}>
                        <input type='text'
                        placeholder='city'
                        name='city'/>
                        <input type='text'
                        placeholder='country'
                        name='country' />
                        <button>Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Form;