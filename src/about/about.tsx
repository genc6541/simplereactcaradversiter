
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import CarList from "../components/car-list";
import Menu from "../menu/menu";
export class AboutPage extends React.Component {

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
                        <div style={{width: "auto", marginLeft: "-100px"}}>
                        <h1>H1 Header</h1>
<h2>Lorem ipsum</h2>
<h3>Lorem ipsum</h3>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
<blockquote>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
<p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
<p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p></blockquote>
<p><strong>Phasellus ultrices</strong> nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</p>
<ul>
<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
<li>Aliquam tincidunt mauris eu risus.</li>
<li>Vestibulum auctor dapibus neque.</li>
<li>Nunc dignissim risus id metus.</li>
<li>Cras ornare tristique elit.</li>
</ul>
<hr />
<p><em>Phasellus ultrices</em> nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</p>

                        </div>
                    </Col>
                    <Col md="3">
                    </Col>

                </Row></div>
        )

    }


}

export default AboutPage;