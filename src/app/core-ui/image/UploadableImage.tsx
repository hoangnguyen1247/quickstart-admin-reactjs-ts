import React, { ChangeEventHandler, MouseEventHandler } from "react";
import classNames from 'classnames';
import { 
    Button,
    FormFeedback,
    Spinner,
} from 'reactstrap';
import ImageIcon from "mdi-react/ImageIcon";
import PlusIcon from "mdi-react/PlusIcon";
import CloseIcon from "mdi-react/CloseIcon";

import { 
    DEFAULT_UNLOADER_SRC,
} from 'src/app/utils/Constants';
import { Image } from './Image';

import { ImageLightBox } from './ImageLightBox';

const MODES = {
    CHANGE: "change",
    NEW: "new",
    TRIGGER: "trigger",
}

type Props = {
    mode?: "change" | "new" | "trigger",
    width: string,
    height?: string,
    circle?: boolean,
    inline?: boolean,
    stroke?: boolean,
    className?: string,
    imageClassName?: string,
    imageUrl: string,
    imageUrls?: string[],
    errorMessage?: string,
    onImageClick?: Function,
    onImageUpload?: Function,
    onDeleteClick?: any,
};

type State = {
    fields: Object,
    fieldErrors: {},
    image?: Object,
    isPending: boolean,
}

const defaultProps = {
    mode: MODES.CHANGE,
    width: "120px",
    circle: false,
};

export class UploadableImage extends React.Component<Props, State> {

    static defaultProps = defaultProps;

    state: State = {
        fields: {
            imageUrl: "",
        },
        fieldErrors: {},
        image: undefined,
        isPending: false,
    };

    imageLightBoxRef: { current: null | ImageLightBox };
    fileInputRef: { current: null | HTMLInputElement };

    constructor(props: Props) {
        super(props);

        this.imageLightBoxRef = React.createRef();
        this.fileInputRef = React.createRef();

        this.handleCameraIconClick = this.handleCameraIconClick.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);

        this.showImagePreview = this.showImagePreview.bind(this);
    }

    handleCameraIconClick() {
        const { current } = this.fileInputRef;

        if (current) {
            current.click();
        }
    }

    handleFileChange(event) {
        const target = event.currentTarget;
        const file = target.files.length > 0 ? target.files[0] : null;

        const { onImageUpload } = this.props;
        if (onImageUpload) {
            this.setState({ isPending: true });
            onImageUpload(file, (image) => {
                this.setState({ isPending: false, image: image }, () => {
                    // const { onChange } = this.props;
                    // if (onChange) {
                    //     onChange(file);
                    // }
                });

                //
                // clear file
                // event.target.value = null;
            });
        }
    }

    handleImageClick() {
        const { onImageClick } = this.props;

        if (onImageClick) {
            onImageClick();
        } else {
            this.showImagePreview();
        }
    }

    showImagePreview() {
        const { current } = this.imageLightBoxRef;

        if (current) {
            current.open({ defaultIndex: 0 });
        }
    }

    render() {
        const { image, isPending } = this.state;
        const {
            mode,
            width,
            height,
            circle,
            className,
            imageClassName,
            imageUrl,
            imageUrls,
            errorMessage,
            inline,
            stroke,
            onImageClick,
            onImageUpload,
            onDeleteClick,
        } = this.props;

        return (
            <React.Fragment>
                <div
                    className={classNames("uploadable-image position-relative", className, { 
                        "is-invalid": !!errorMessage,
                        "d-inline-flex": inline,
                    })}
                    style={{ width: width }}
                >
                    {mode === MODES.CHANGE &&
                        <Image
                            src={imageUrl}
                            alt=""
                            width={width}
                            height={height}
                            circle={circle}
                            inline={inline}
                            stroke={stroke}
                            className={classNames(imageClassName)}
                            onClick={this.handleImageClick}
                        />
                    }
                    {mode === MODES.NEW &&
                        <Button
                            color="light"
                            className="d-flex align-items-center justify-content-center"
                            style={{ borderStyle: "dashed !important", width: width, height: height }}
                            onClick={this.handleCameraIconClick}
                        >
                            <PlusIcon />
                        </Button>
                    }
                    {mode === MODES.TRIGGER &&
                        <Button
                            color="light"
                            className="d-flex align-items-center"
                            onClick={this.handleCameraIconClick}
                        >
                            <ImageIcon className="mr-2" />
                            <span>Photo</span>
                        </Button>
                    }
                    {mode === MODES.CHANGE && ((onImageClick || onImageUpload)) &&
                        <i
                            className="mdi mdi-camera mdi-24px position-absolute mx-2 pointer"
                            style={{ bottom: "0", right: "0", }}
                            onClick={this.handleCameraIconClick}
                        />
                    }
                    {(image && onDeleteClick) &&
                        <CloseIcon
                            className="mdi-24px position-absolute mx-2 pointer"
                            style={{
                                top: "0",
                                right: "0",
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                color: '#fff'
                            }}
                            onClick={onDeleteClick}
                        />
                    }
                    {isPending &&
                        <Spinner
                            className="position-absolute"
                            style={{
                                top: "calc(50% - 1rem - 0.125em)",
                                left: "calc(50% - 1rem - 0.125em)",
                            }}
                        />
                    }
                    <input
                        type={"file"}
                        ref={this.fileInputRef}
                        style={{ display: "none" }}
                        onChange={this.handleFileChange}
                    />
                    <ImageLightBox
                        images={imageUrls || [imageUrl || DEFAULT_UNLOADER_SRC]}
                        ref={this.imageLightBoxRef}
                    />
                </div>
                {!!errorMessage &&
                    <FormFeedback className="text-center">{errorMessage}</FormFeedback>
                }
            </React.Fragment>
        );
    }
}
