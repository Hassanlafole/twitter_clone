import React from "react";
import {
    Navbar,
    Nav,
} from "react-bootstrap";
function Navigation() {

    return (
        <Navbar bg="light" expand="lg" style={{ padding: '30px' }}>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar" activeKey="/home">
                <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter logo" />

                <div className="sidebar-sticky"></div>
               
                <Nav.Item> <Nav.Link href="/">Home</Nav.Link> </Nav.Item>
                <Nav.Item> <Nav.Link href="/explore">Explore</Nav.Link> </Nav.Item>
                <Nav.Item> <Nav.Link href="/notifications">Notifications</Nav.Link> </Nav.Item>
                <Nav.Item> <Nav.Link href="/messages">Messages</Nav.Link> </Nav.Item>
                <Nav.Item> <Nav.Link href="/bookmarks">Bookmarks</Nav.Link> </Nav.Item>
                <Nav.Item> <Nav.Link href="/profile">Profile</Nav.Link> </Nav.Item>

            </Nav>
        </Navbar>
    );
}

export default Navigation;
