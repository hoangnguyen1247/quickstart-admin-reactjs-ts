import React from "react";
import { Button } from "reactstrap";
import { I18n } from "react-redux-i18n";

import { AppContext } from "src/app/AppContext";

import { Thumbnail } from "src/app/core-ui/image/Thumbnail";

type Props = {
    withText?: boolean,
}

const defaultProps = {
    withText: true,
}

export function BrandLogo({
    withText,
}: Props) {
    const { history } = React.useContext(AppContext);
    const applicationI18n = I18n.t("application");

    const _handleClick = () => {
        if (history) {
            history.push(`/home`);
        }
    }

    return (
        <Button
            className="d-flex align-items-center p-0"
            onClick={() => _handleClick()}
        >
            <Thumbnail
                imageUrl={"assets/images/logo.png"}
                width="32px"
                className="mr-2"
                onImageClick={() => {}}
            />
            {withText &&
                <span>{applicationI18n.meta.name}</span>
            }
        </Button>
    )
}

BrandLogo.defaultProps = defaultProps;
