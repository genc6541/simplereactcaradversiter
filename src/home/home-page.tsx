
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import CarList from "../components/car-list";
import Menu from "../menu/menu";
import { getCarsData } from "../services/data-service";
import CarInfo from "../components/models/car-info";

export interface HomePageState {

    carList: CarInfo[]
}

export class HomePage extends React.Component<{}, HomePageState> {

    constructor(props) {
        super(props);

        this.state = {
            carList: [],
        }

    }   

    static defaultProps = {
    }

    onPostSearch = (foundValue) => {

        if(foundValue !== undefined && foundValue.length > 0){

            this.setState({
                carList : foundValue
            })

        }

    }
    render() {

        return (
            <div>
                <Row>
                    <Col md="3">
                    </Col>
                    <Col md="6">
                        <Menu data={this.state.carList} onPostSearch={this.onPostSearch}/>
                    </Col>
                    <Col md="3">
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                    </Col>
                    <Col md="5">
                        <div style={{ marginLeft: "80px" }}>
                            <CarList carList={this.state.carList}/>
                        </div>
                    </Col>
                    <Col md="3">
                    </Col>

                </Row></div>
        )

    }

    async componentDidMount(){

        debugger;
        let result = await getCarsData();
        this.setState({
            carList: result
        });
    }

}

export default HomePage;