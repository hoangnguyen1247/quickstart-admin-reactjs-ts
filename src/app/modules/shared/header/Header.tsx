import React from "react";

import { AppContext } from "../../../AppContext";

import { DesktopHeaderBar } from "./children/DesktopHeaderBar";
import { MobileHeaderBar } from "./children/MobileHeaderBar";
import { MobileSearchBar } from "./children/MobileSearchBar";
import { MobileActionBar } from "./children/MobileActionBar";

export function Header() {

    const { minWidth992, isShowMobileHomeBar, isShowMobileSearchBar, isShowMobileActionBar } = React.useContext(AppContext);

    if (!minWidth992) {
        if (isShowMobileActionBar) {
            return (
                <MobileActionBar
                />
            )
        }
        
        if (!isShowMobileActionBar && isShowMobileSearchBar) {
            return (
                <MobileSearchBar
                />
            )
        }

        return (
            <MobileHeaderBar
            />
        )
    } else {
        return (
            <DesktopHeaderBar>
            </DesktopHeaderBar>
        )
    }
}
