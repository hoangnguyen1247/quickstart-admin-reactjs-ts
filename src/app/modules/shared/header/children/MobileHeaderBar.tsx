import React from "react";
import { Button } from "reactstrap";
import HomeIcon from "mdi-react/HomeIcon";
import MagnifyIcon from "mdi-react/MagnifyIcon";

import { AppContext } from "src/app/AppContext";

export function MobileHeaderBar() {

    const {
        changeMobileSearchBar,
    } = React.useContext(AppContext);

    const _handleButtonMagnifyClick= () => {
        changeMobileSearchBar(true);
    };

    return (
        <div className="d-flex">
            <Button
            >
                <HomeIcon />
            </Button>
            <div className="flex-fill"></div>
            <Button
                onClick={_handleButtonMagnifyClick}
            >
                <MagnifyIcon />
            </Button>
        </div>
    )
}
