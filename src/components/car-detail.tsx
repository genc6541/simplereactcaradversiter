import { Row, Col, Button, Card } from 'react-bootstrap';
import React from 'react';
import CarInfo from './models/car-info';

export interface CarDetailProps{
    carDetail: CarInfo    
}

export class CarDetail extends React.Component<CarDetailProps> {

    constructor(props) {
        super(props);

        this.state = {}

    } 

    static defaultProps={
        carDetail : { brand: "", model: "", km : 0, color: ""}
    }

    render() {
        return (
            <div>
                <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="caricon.jpg" />
                        <Card.Body>
                            <Row>
                                <Col><Card.Title>Brand</Card.Title></Col>
                                <Col><Card.Text>{this.props.carDetail.brand}</Card.Text></Col>
                            </Row>
                            <Row>
                                <Col><Card.Title>Model</Card.Title></Col>
                                <Col><Card.Text>{this.props.carDetail.model}</Card.Text></Col>
                            </Row>
                              <Row>
                                <Col><Card.Title>Km</Card.Title></Col>
                                <Col><Card.Text>{this.props.carDetail.km}</Card.Text></Col>
                            </Row>
                             <Row>
                                <Col><Card.Title>Color</Card.Title></Col>
                                <Col><Card.Text>{this.props.carDetail.color}</Card.Text></Col>
                            </Row>
                        
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
        );

    }


}

export default CarDetail;