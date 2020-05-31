import React from "react";
import classNames from "classnames";
import { Container, Button } from "reactstrap";
import ArrowRightIcon from "mdi-react/ArrowRightIcon";
import ArrowLeftIcon from "mdi-react/ArrowLeftIcon";

import { AppContext } from "../../../AppContext";

// type Props = {
// };

export function NavigationBar() {
    const {
        navigationInRight,
        changeNavigationInRight,
    } = React.useContext(AppContext);

    const _handleButtonRightClick = (match: boolean) => {
        if (typeof changeNavigationInRight === "function") {
            changeNavigationInRight(match);
        }
    };

    return (
        <Container fluid style={{ width: "240px" }} className={classNames(`px-0 ${navigationInRight ? "border-left" : "border-right"}`, { 
            "order-1": navigationInRight,
        })}>
            <div className="d-flex align-items-center">
                <div className="flex-fill">
                </div>
                {!navigationInRight && 
                    <Button
                        onClick={() => _handleButtonRightClick(true)}
                    >
                        <ArrowRightIcon />
                    </Button>
                }
                {navigationInRight &&
                    <Button
                        onClick={() => _handleButtonRightClick(false)}
                    >
                        <ArrowLeftIcon />
                    </Button>
                }
            </div>
        </Container>
    )
}
