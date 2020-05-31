import React from "react";

import { 
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormFeedback,
    FormGroup,
    FormText,
    Label,
} from "reactstrap";

type Props = {
    type: string,
    className: string,
    label: string,
    placeholder: string,
    id: string,
    name: string,
    value: string, // for select, file, checkbox
    checked: boolean, // for radio
    helpText: string,
    errorMessage: string,
    disabled: boolean,
    onChange: Function,
    onKeyPress: Function,
};

const defaultProps = {
    type: "",
    helpText: "",
    errorMessage: "",
    disabled: false,
};

export const InputGroupFormGroup = ({
    type,
    className,
    label,
    placeholder,
    id,
    name,
    value,
    checked,
    helpText,
    errorMessage,
    disabled,
    onChange,
    onKeyPress,
}: Props) => {

    return (
        <FormGroup>
            {!!label && type !== "checkbox" && type !== "radio" && <Label>{label}</Label>}
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <Input
                            addon
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                        />
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    label={placeholder}
                />
                <InputGroupAddon addonType="append">
                    <InputGroupText>
                        <Input
                            addon
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                        />
                    </InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            {!!errorMessage &&
                <FormFeedback
                    invalid={!!errorMessage}
                >
                    {errorMessage}
                </FormFeedback>
            }
            {!!helpText &&
                <FormText>
                    {helpText}
                </FormText>
            }
        </FormGroup>
    )
};

InputGroupFormGroup.defaultProps = defaultProps;
