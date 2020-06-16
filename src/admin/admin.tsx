
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Navbar, Nav, Form, FormControl, Alert } from 'react-bootstrap';
import CarList from "../components/car-list";
import Menu from "../menu/menu";
import { getCarsData } from "../services/data-service";
import CarInfo from "../components/models/car-info";

export interface AdminPageState {

    carList: CarInfo[],
    brand: string,
    model: string,
    km: number,
    color: string,
    isWarningVisibleForBrand: string;
    isWarningVisibleForModel: string;
    isWarningVisibleForColor: string;
    isWarningVisibleForKm: string;
}

export class AdminPage extends React.Component<{}, AdminPageState> {

    constructor(props) {
        super(props);

        this.state = {
            carList: [],
            brand: "",
            km: 0,
            model: "",
            color: "",
            isWarningVisibleForBrand: "none",
            isWarningVisibleForModel: "none",
            isWarningVisibleForColor: "none",
            isWarningVisibleForKm: "none",
        }

    }

    static defaultProps = {
    }
    onBrandChange = (e: any) => {

            this.setState({brand : e.target.value, isWarningVisibleForBrand: "none"});
    }

    onColorChange = (e: any) => {

        this.setState({color : e.target.value, isWarningVisibleForColor: "none"});
    }

    onModelChange = (e: any) => {

        this.setState({model : e.target.value, isWarningVisibleForModel: "none"});
    }

    onKmChange = (e: any) => {

        this.setState({km : e.target.value, isWarningVisibleForKm: "none"});
    }

    onAddValue = () => {

        if(!this.validateForm()){
           return;
        }

        let carList: any = this.state.carList;
        let object = {} as CarInfo;
        object.brand = this.state.brand;
        object.model = this.state.model;
        object.color = this.state.color;
        object.km = this.state.km;

        carList.push(object);

        this.setState({carList :carList });

        alert("New record added to list succesfully, please last item of list");

    }

    validateForm = () => {

        let errorStatus = true;

        if(this.state.brand === ""){
            this.setState({ isWarningVisibleForBrand: "block" });
            errorStatus = false;
        }

        if(this.state.model === ""){
            this.setState({ isWarningVisibleForModel: "block" });
            errorStatus = false;
        }

        if(this.state.color === ""){
            this.setState({ isWarningVisibleForColor: "block" });
            errorStatus = false;
        }

        if(this.state.km === 0 || this.state.km === null){
            this.setState({ isWarningVisibleForKm: "block" });
            errorStatus = false;
        }

        return errorStatus;

    }


    render() {
        let display = "none";

        return (
            <div>
                <Row>
                    <Col><h1 style={{ marginBottom: "20px" }}>Admin Panel</h1></Col>
                </Row>
                <Row style={{ marginTop: "20x", marginLeft: "-230px" }}>
                    <Col md="3">
                    </Col>
                    <Col md="6" >
                        <Form>
                            <Form.Group controlId="brand" >
                                <Row>
                                    <Col md="6">
                                        <Form.Label style={{ marginLeft: "220px", paddingTop: "5px", marginTop: "10x", textAlign: "right" }}>Select Brand</Form.Label>
                                    </Col>

                                    <Col  md="3">
                                        <Form.Control as="select" value={this.state.brand} onChange={this.onBrandChange}>
                                            <option>{""}</option>
                                            <option>{"BMW"}</option>
                                            <option>{"Audi"}</option>
                                            <option>{"Mercedes"}</option>
                                            <option>{"Honda"}</option>
                                            <option>{"Ford"}</option>
                                            <option>{"Volvo"}</option>
                                        </Form.Control>
                                    </Col>
                                    <Col  md="3">
                                    <Form.Label style={{ marginLeft: "-30px", color: "red", paddingTop: "5px", marginTop: "10x", display: this.state.isWarningVisibleForBrand }}>Please fill area!</Form.Label>
                                    </Col>
                                </Row>


                            </Form.Group>
                            <Form.Group controlId="color">

                                <Row>
                                    <Col md= "6">
                                        <Form.Label style={{ marginLeft: "220px", paddingTop: "5px", marginTop: "10x", textAlign: "right" }}>Select Color</Form.Label>
                                    </Col>

                                    <Col md= "3">
                                        <Form.Control as="select" value={this.state.color} onChange={this.onColorChange}>
                                            <option>{""}</option>
                                            <option>{"Blue"}</option>
                                            <option>{"Red"}</option>
                                            <option>{"Green"}</option>
                                            <option>{"White"}</option>
                                            <option>{"Black"}</option>
                                        </Form.Control>
                                    </Col>

                                    <Col  md="3">
                                    <Form.Label style={{ marginLeft: "-30px", color: "red", paddingTop: "5px", marginTop: "10x", display: this.state.isWarningVisibleForColor }}>Please fill area!</Form.Label>

                                    </Col>
                                </Row>


                            </Form.Group>

                            <Form.Group controlId="model">
                                <Row>
                                <Col md="6">
                                        <Form.Label style={{ marginLeft: "220px", paddingTop: "5px", marginTop: "10x", textAlign: "right" }}>Type Model</Form.Label>

                                    </Col>
                                    <Col md="3">
                                        <Form.Control type="number" placeholder="model year" value={this.state.model} onChange={this.onModelChange} />
                                    </Col>

                                    <Col md="3">
                                    <Form.Label style={{ marginLeft: "-30px", color: "red", paddingTop: "5px", marginTop: "10x", display: this.state.isWarningVisibleForModel }}>Please fill area!</Form.Label>
                                    </Col>
                                </Row>


                            </Form.Group>

                            <Form.Group controlId="km">
                                <Row>
                                <Col md="6">
                                <Form.Label style={{ marginLeft: "220px", paddingTop: "5px", marginTop: "10x", textAlign: "right" }}>Type KM</Form.Label>
                                </Col>
                                <Col md="3">
                                
                                <Form.Control  type="number" placeholder="kilometer" value={this.state.km} onChange={this.onKmChange} />
                                </Col>

                                <Col md="3">
                                <Form.Label style={{ marginLeft: "-30px", color: "red", paddingTop: "5px", marginTop: "10x", display: this.state.isWarningVisibleForKm }}>Please fill area!</Form.Label>
                                    </Col>
                                </Row>
                                
                            </Form.Group>

                            <Row><Col md="6"></Col><Col md="3"><Button variant="success" onClick={this.onAddValue} style= {{width: "120px", marginLeft:"-50px"}}>Add</Button></Col><Col md="3"></Col></Row>
                        </Form>
                    </Col>
                    <Col md="3">
                    </Col>
                </Row>
                <Row>
                    <Col><h1 style={{ marginBottom: "5px", marginTop: "40px" }}>Car List</h1></Col>
                </Row>
                <Row>
                    <Col md="4">
                    </Col>
                    <Col md="5">
                        <div style={{ marginLeft: "80px" }}>
                            <CarList carList={this.state.carList} />
                        </div>
                    </Col>
                    <Col md="3">
                    </Col>

                </Row></div>
        )

    }

    async componentDidMount() {

        debugger;
        let result = await getCarsData();
        this.setState({
            carList: result
        });
    }

}

export default AdminPage;