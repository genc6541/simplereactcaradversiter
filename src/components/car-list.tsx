
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Spinner } from 'react-bootstrap';
import CarDetail from "./car-detail";
import CarInfo from "./models/car-info";
import PulseLoader from "react-spinners/PulseLoader";

export interface CarListProps{
    carList: CarInfo[]    
}

export interface CarListState{
    loading: boolean   
}

export class CarList extends React.Component<CarListProps, CarListState> {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }

    }   // Set default props
    static defaultProps = {
        carList : []
    }

    

    render() {


       if(this.props.carList !== undefined && this.props.carList.length >0) {
        return (
            <div>
                
                <Row style={{height: "50px"}}></Row>
                <Row>
                <Col md="6">
                </Col>
                <Col md="8">
                { this.props.carList.map(carItem => {
                            return(<div style={{ marginTop: "10px", marginRight: "10px"}}><CarDetail carDetail={carItem}/></div>);
                        } )}
                </Col>
                <Col md="12">
                </Col>
               </Row>
            </div>
        )
       }else{
           return(<div className="sweet-loading" style={{marginTop:'300px', marginLeft:"-120px"}}>
           {/* <PulseLoader
             size={25}
             color={"#123abc"}
             loading={this.state.loading}
           /> */}
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
         </div>);
       }

       

    }


}

export default CarList;