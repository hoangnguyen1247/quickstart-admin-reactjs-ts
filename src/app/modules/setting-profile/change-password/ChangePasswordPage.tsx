import React from "react";
import { Link } from "react-router-dom";
import {
    Button, Card, Container, CardHeader, CardBody,
} from "reactstrap";

class ChangePasswordPage extends React.Component {

    render() {
        return (
            <div>
                <Link
                    to={`/login`}
                >
                    Login
                </Link>
                <Button
                >
                    Button
                </Button>
                <Container>
                    <Card>
                        <CardHeader>
                            Title
                        </CardHeader>
                        <CardBody>
                            ChangePasswordPage
                        </CardBody>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default ChangePasswordPage;
