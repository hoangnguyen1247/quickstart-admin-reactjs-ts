import React from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, Button,
} from "reactstrap";

import { AnyObject } from "src/common";

type Props = {
    title: string,
};

type State = {
    isOpen: boolean,
    fields: AnyObject,
    message: string,
    isShowHeader: boolean,
    onOk?: Function,
    onCancel?: Function,
};

const defaultProps = {
    title: "Xác nhận",
};

const initialState = {
    isOpen: false,
    isShowHeader: false,
    message: "",
    fields: {},
    onOk: undefined,
    onCancel: undefined,
};

export class MessageDialog extends React.Component<Props, State> {

    static defaultProps = defaultProps;

    state: State = initialState;

    constructor(props) {
        super(props);

        this.handleBtnOkClick = this.handleBtnOkClick.bind(this);
    }

    show = (data: AnyObject, onOk: Function) => {
        this.setState({ 
            isOpen: true,
            fields: Object.assign({}, this.state.fields, (data || {})), 
            onOk: onOk,
        });
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    handleBtnOkClick() {
        this.toggle();

        const { onOk } = this.state;
        if (onOk) {
            onOk();
        }
    };

    render() {
        const { isOpen, isShowHeader, message } = this.state;
        const {
            title,
        } = this.props;

        return (
            <Modal
                isOpen={isOpen}
                toggle={this.toggle}
                className="confirm-dialog"
                backdrop={"static"}
            >
                {isShowHeader &&
                    <ModalHeader
                        toggle={this.toggle}
                    >
                        {title}
                    </ModalHeader>
                }
                <ModalBody>
                    <p className="message">{message}</p>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color={"primary"}
                        className=""
                        onClick={this.handleBtnOkClick}
                    >
                        Okie
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}
