import React from "react";
import Lightbox from 'react-image-lightbox';

type Props = {
    images: string[],
};

type State = {
    isOpen: boolean,
    photoIndex: number,
};

const defaultProps = {
    images: [],
};

export class ImageLightBox extends React.Component<Props, State> {

    static defaultProps = defaultProps;

    state: State = {
        photoIndex: 0,
        isOpen: false,
    };

    open = ({ defaultIndex }) => {
        this.setState({ isOpen: true, photoIndex: defaultIndex });
    };

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        const { photoIndex, isOpen } = this.state;
        const { images } = this.props;

        return (
            <div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images.length === 1 ? "" : images[(photoIndex + 1) % images.length]}
                        prevSrc={images.length === 1 ? "" : images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                        reactModalStyle={{ overlay: { zIndex: "2000" } }}
                    />
                )}
            </div>
        );
    }
}
