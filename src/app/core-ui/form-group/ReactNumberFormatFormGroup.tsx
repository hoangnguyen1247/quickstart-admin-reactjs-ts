import * as React from "react";
import classNames from "classnames";
import NumberFormat from "react-number-format";
import { FormFeedback, FormGroup, FormText, Label } from "reactstrap";

type Props = {
    className?: string,
    label?: string,
    placeholder?: string,
    id?: number,
    name?: string,
    value?: number,
    errorMessage?: string,
    helpText?: string,
    disabled?: boolean,
    displayType?: any,
    decimalScale?: number,
    prefix?: string,
    suffix?: string,
    onChange?: (values) => void,
};

const defaultProps = {
    value: 0,
    name: "",
    label: "",
    placeholder: "",
    errorMessage: "",
    helpText: "",
    disabled: false,
    displayType: "input",
    decimalScale: 0,
    suffix: " VNĐ",
};

export function ReactNumberFormatFormGroup({
    id,
    name,
    value,
    label,
    placeholder,
    errorMessage,
    disabled,
    helpText,
    onChange,
    className,
    displayType,
    decimalScale,
    prefix,
    suffix,
}: Props) {

    return (
        <FormGroup className={classNames("number-format-input", className)}>
            {label && <Label>{label}</Label>}
            <NumberFormat
                className={classNames("", {
                    "form-control": displayType === "input",
                    "is-invalid": !!errorMessage
                })}
                placeholder={placeholder}
                id={name}
                name={name}
                value={value}
                onValueChange={onChange} // ({formattedValue, value)
                thousandSeparator={true}
                prefix={prefix}
                suffix={suffix}
                displayType={displayType}
                decimalScale={decimalScale}
                decimalSeparator={"."}
                disabled={disabled}
            />
            {!!errorMessage &&
                <FormFeedback>{errorMessage}</FormFeedback>
            }
            {!!helpText &&
                <FormText>{helpText}</FormText>
            }
        </FormGroup>
    );
};

ReactNumberFormatFormGroup.defaultProps = defaultProps;
