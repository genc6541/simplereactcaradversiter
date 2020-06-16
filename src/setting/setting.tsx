
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import CarList from "../components/car-list";
import Menu from "../menu/menu";
export class SettingPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }   // Set default props
    static defaultProps = {
        theme: "secondary",
        label: "Button Text"
    }

    render() {

        return (
            <div>
                <Row>
                    <Col md="3">
                    </Col>
                    <Col md="6">
                        <Menu/>
                    </Col>
                    <Col md="3">
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                    </Col>
                    <Col md="5">
                        <div style={{ marginLeft: "-200px"}}>
                           <img src="uc.png" alt="Under Construction" width="600"  height="600"/>
                        </div>
                    </Col>
                    <Col md="3">
                    </Col>

                </Row></div>
        )

    }


}

export default SettingPage;