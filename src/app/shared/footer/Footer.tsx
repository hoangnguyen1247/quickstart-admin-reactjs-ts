import React from "react";
import { Container, Nav, NavItem, Button } from "reactstrap";
import FacebookIcon from "mdi-react/FacebookIcon";

export function Footer() {

    return (
        <Container fluid className="px-0">
            <Container size="lg" className="py-2">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <h2>QuickStart</h2>
                        <p>QuickStart project for start your project quickly. For some steps, clone, rename and hack.</p>
                    </div>
                    <div className="col-12 col-lg-2">
                        <h5 className="mb-3">Product</h5>
                        <p>
                            <span>QuickStart app</span>
                        </p>
                    </div>
                    <div className="col-12 col-lg-2">
                        <h5 className="mb-3">Company</h5>
                        <p>
                            <span>About Us</span>
                        </p>
                        <p>
                            <span>Contact</span>
                        </p>
                    </div>
                    <div className="col-12 col-lg-2">
                        <h5 className="mb-3">Legal</h5>
                        <p>
                            <span>Terms of service</span>
                        </p>
                        <p>
                            <span>Privacy</span>
                        </p>
                        <p>
                            <span>DMCA policy</span>
                        </p>
                    </div>
                    <div className="col-12 col-lg-2">
                        <h5 className="mb-3">Get Started</h5>
                        <h5 className="mb-3">Connect with us</h5>
                        <Nav>
                            <NavItem>
                                <Button
                                    color="light"
                                    size="sm"
                                    className="p-0"
                                >
                                    <FacebookIcon />
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button
                                    color="light"
                                    size="sm"
                                    className="p-0"
                                >
                                    <FacebookIcon />
                                </Button>
                            </NavItem>
                        </Nav>
                    </div>
                </div>
            </Container>
            <Container size="lg" className="py-2">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <p className="mb-0 small">
                            <span className="text-muted">© Copyright 2020 QuickStart Technologies, Inc. All rights reserved.</span>
                        </p>
                    </div>
                </div>
            </Container>
        </Container>
    )
}
