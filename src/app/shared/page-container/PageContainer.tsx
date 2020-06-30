import React from "react";
import { Container } from "reactstrap";

import { AppContext } from "src/app/AppContext";

type Props = {
    children: React.ReactNode | React.ReactNode[],
    className?: string,
};

export function PageContainer({ 
    children,
}: Props) {

    const { minWidth992 } = React.useContext(AppContext);

    return (
        <Container fluid className="page-container d-flex px-0" style={{ marginTop: minWidth992 ? "56px" : "42px" }}>
            {children}
        </Container>
    )
}
