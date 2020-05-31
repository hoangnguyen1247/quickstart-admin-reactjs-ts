import React from "react";

import { Image } from "./Image";

type Props = {
    imageUrl: string,
    width: string,
    className?: string,
    onImageClick: () => void,
};

const defaultProps = {
    imageUrl: "",
    width: "24px",
}

export function Thumbnail({
    imageUrl,
    width,
    className,
    onImageClick,
}: Props) {

    return (
        <Image
            src={imageUrl}
            alt={""}
            width={width}
            height={width}
            circle={true}
            inline={true}
            thumbnail={true}
            className={className}
            onClick={onImageClick}
        />
    )
}

Thumbnail.defaultProps = defaultProps;
