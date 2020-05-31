import React from "react";
import ArrowLeftIcon from "mdi-react/ArrowLeftIcon";
import { Container, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";

import { AnyObject } from "src/common";

type Props = {
    children: React.ReactNode,
    isShowLeftIcon?: boolean,
    breadcrumbItems: AnyObject[],
    breadcrumbActiveItemLabel: string,
};

const defaultProps = {
    isShowLeftIcon: false,
    breadcrumbItems: [],
    breadcrumbActiveItemLabel: "",
}

export function Toolbar({ 
    children,
    isShowLeftIcon,
    breadcrumbItems,
    breadcrumbActiveItemLabel,
}: Props) {

    return (
        <Container fluid className="px-0">
            <div className="d-flex align-items-center">
                {isShowLeftIcon &&
                    <Button className="">
                        <ArrowLeftIcon />
                    </Button>
                }
                <div className="mr-auto">
                    <Breadcrumb
                        listClassName="mb-0"
                    >
                        {Array.isArray(breadcrumbItems) && breadcrumbItems.length > 0 &&
                            breadcrumbItems
                                .map((item, index) => {
                                    return (
                                        <BreadcrumbItem 
                                            key={index}
                                        >
                                            <Link to={item.link}>{item.label}</Link>
                                        </BreadcrumbItem>
                                    )
                                })
                        }
                        <BreadcrumbItem active={true}>
                            {breadcrumbActiveItemLabel}
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                {children}
            </div>
        </Container>
    )
}

Toolbar.defaultProps = defaultProps;
