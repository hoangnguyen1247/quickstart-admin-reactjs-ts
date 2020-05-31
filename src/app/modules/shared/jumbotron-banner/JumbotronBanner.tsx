import React from "react";

type Props = {
    children: React.ReactNode,
}

export function JumbotronBanner({
    children,
}: Props) {

    return (
        <div className="embed-responsive embed-responsive-sm-16by9 embed-responsive-lg-21by9 mb-3">
            {children}
        </div>
    )
}
