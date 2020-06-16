
import { Row, Col, Button, Card, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import React, { useState, useEffect } from "react";

function Menu(props) {

    const [searchValue, setState] = useState("");

    useEffect(() => {
        console.log('useEffect!');

    }
    )

    const onSearchValue = () => {
        if(props !== undefined && props.data){

           let result =  props.data.filter((obj) => obj.brand.includes(searchValue));
           if(result !== undefined){
            props.onPostSearch(result);
           }
        }

    }

    const onChange = (e: any) =>{
        setState(e.target.value);
    }

    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="../homepage">SimpleCar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="../homepage">Home</Nav.Link>
                    <Nav.Link href="../about">About</Nav.Link>
                    <Nav.Link href="../setting">Setting</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" value={searchValue} onChange={onChange} placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info" onClick={onSearchValue}>Search</Button>
                </Form>
            </Navbar>

        </>);


}

export default Menu;