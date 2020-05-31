import React from "react";
import classNames from "classnames";
import Slider from "react-slick";

import { AnyObject } from "src/common";

import { Image } from 'src/app/core-ui/image/Image';
import { getAliasImage } from "src/app/utils/ImageUtils";

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={classNames(className, "d-flex flex-column align-items-center justify-content-center")}
            onClick={onClick}
        >
            <i className="mdi mdi-chevron-left mdi-36px text-white"></i>
        </div>
    );
}

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={classNames(className, "d-flex flex-column align-items-center justify-content-center")}
            onClick={onClick}
        >
            <i className="mdi mdi-chevron-right mdi-36px text-white"></i>
        </div>
    );
}

type Props = {
    className?: string,
    itemClassName?: string,
    items?: AnyObject[],
    isShowMask?: boolean,
};

const defaultProps = {
    isShowMask: true,
};

export class ReactSlickCarousel extends React.Component<Props> {

    static defaultProps = defaultProps;

    constructor(props) {
        super(props);

        this.handleBannerClick = this.handleBannerClick.bind(this);
    }

    handleBannerClick(targetLink: string) {
        if (targetLink) {
            const { history } = this.context;
            if (history) {
                history.push(targetLink);
            }
        }
    }

    render() {
        const {
            className,
            itemClassName,
            items,
            isShowMask,
        } = this.props;

        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className={classNames("carousel-banner-2", itemClassName)}>
                <Slider
                    {...settings}
                    className=""
                >
                    {items &&
                        items.map((item, index) => {
                            return (
                                <div 
                                    key={index} 
                                    className="w-100 h-100 slide-item"
                                >
                                    <Image
                                        src={getAliasImage(item.desktopSrc)}
                                        alt={item.altText}
                                        width="100%"
                                        inline={false}
                                        className={classNames("for-desktop", {"pointer": !!item.link})}
                                        onClick={() => this.handleBannerClick(item.link)}
                                    />
                                    <Image
                                        src={getAliasImage(item.mobileSrc)}
                                        alt={item.altText}
                                        width="100%"
                                        inline={false}
                                        className={classNames("for-mobile", {"pointer": !!item.link})}
                                        onClick={() => this.handleBannerClick(item.link)}
                                    />
                                    {!item.isShowMask && isShowMask && 
                                        <div 
                                            className="overlay mask none-pointer-events"
                                        ></div>
                                    }
                                    <div className="overlay d-flex flex-column align-items-center justify-content-center none-pointer-events">
                                        <h3 className="headline text-center">{item.headline}</h3>
                                        <p className="caption text-center">{item.caption}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Slider>
            </div>
        );
    }
}
