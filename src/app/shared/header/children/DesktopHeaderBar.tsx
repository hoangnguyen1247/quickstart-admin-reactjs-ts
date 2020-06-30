import React from "react";
import { Container, Nav, NavItem, Button } from "reactstrap";
import BellIcon from "mdi-react/BellIcon";
import PlusIcon from "mdi-react/PlusIcon";

import { MoreActionsDropdown } from "./MoreActionsDropdown";
import { UniversalSearchBar } from "../../universal-search-bar/UniversalSearchBar";
import { Thumbnail } from "src/app/core-ui/image/Thumbnail";

type Props = {
    children: React.ReactNode,
};

export function DesktopHeaderBar({
    children,
}: Props) {

    return (
        <React.Fragment>
            <Container fluid className="header px-0">
                <Container size="lg" className="py-2">
                    <div className="d-flex">
                        <div className="d-flex justify-content-start" style={{ width: "360px" }}>
                            <div style={{ }} className="d-flex align-items-center mr-3">
                                <Thumbnail
                                    imageUrl=""
                                    width="24px"
                                    className="mr-2"
                                    onImageClick={() => {}}
                                />
                                QuickStart
                            </div>
                            <Nav>
                                <NavItem className="d-flex align-items-center">
                                    <Button
                                        className="rounded-0"
                                    >
                                        Menu 1
                                    </Button>
                                </NavItem>
                                <NavItem className="d-flex align-items-center">
                                    <Button
                                        className="rounded-0"
                                    >
                                        Menu 2
                                    </Button>
                                </NavItem>
                            </Nav>
                        </div>
                        <div className="d-flex align-items-center flex-fill">
                            <UniversalSearchBar />
                            {children}
                        </div>
                        <div className="d-flex justify-content-end" style={{ width: "360px" }}>
                            <Nav>
                                <NavItem className="d-flex align-items-center">
                                    <Button
                                        className="rounded-0"
                                    >
                                        <PlusIcon />
                                    </Button>
                                </NavItem>
                                <NavItem className="d-flex align-items-center">
                                    <Button
                                        className="rounded-0"
                                    >
                                        <BellIcon />
                                    </Button>
                                </NavItem>
                                <MoreActionsDropdown
                                    className="nav-item"
                                />
                                <NavItem className="d-flex align-items-center">
                                    <Button
                                        className="rounded-0"
                                    >
                                        Hello
                                    </Button>
                                </NavItem>
                                <NavItem className="d-flex align-items-center">
                                    <Button
                                        outline
                                        className="rounded-0"
                                    >
                                        Hello
                                    </Button>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                </Container>
            </Container>
        </React.Fragment>
    )
}
