import React from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { I18n } from "react-redux-i18n";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import { PAGE_STATES } from "src/app/utils/Constants";
// import { 
//     apiPost_search, 
// } from 'app/service/PostService';
// import { 
//     apiOrderItem_search,
// } from "app/service/OrderItemService";

import { AppContext } from "../../../AppContext";

import { InputFormGroup } from "../../../core-ui/form-group/InputFormGroup";

type Props = {
};

const defaultProps = {

};

export class UniversalSearchBar extends React.Component<Props> {

    static defaultProps = defaultProps;
    static contextType = AppContext;

    state = {
        isShowUniversalSearch: false,
        searchKey: "",
    };

    constructor(props) {
        super(props);

        this.toggleUniversalSearch = this.toggleUniversalSearch.bind(this);
        this.showUniversalSearch = this.showUniversalSearch.bind(this);

        this.handleUniversalSearch = this.handleUniversalSearch.bind(this);

        this.handleRightIconClick = this.handleRightIconClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleOrderSelect = this.handleOrderSelect.bind(this);
        this.handleOrderItemSelect = this.handleOrderItemSelect.bind(this);
    }

    toggleUniversalSearch() {
        this.setState({ isShowUniversalSearch: !this.state.isShowUniversalSearch });
    }

    showUniversalSearch() {
        this.setState({ isShowUniversalSearch: true });
    }

    handleUniversalSearch(searchKey) {
        this.handleSearchOrders(searchKey, ["customerFullName", "customerPhoneNumber", "customerEmail", "tagCode"], {}, 0, 12);
        // this.handleSearchOrderItems(searchKey, ["customerFullName", "customerPhoneNumber", "customerEmail", "tagCode", "moreInfo"], {}, 0, 12);
    }

    handleSearchOrders(searchKey, searchFields, filters, page, size) {
        // this.props.universalSearchBar_changePageState(PAGE_STATES.PENDING);

        // apiPost_search(searchKey, searchFields, filters, page, size)
        //     .then(res => {
        //         this.props.universalSearchBar_changePageState(PAGE_STATES.DONE);
        //         this.props.universalSearchBar_findManyOrdersSuccess(res.orders);
        //     })
        //     .catch(error => {
        //         this.props.universalSearchBar_changePageState(PAGE_STATES.DONE);
        //         this.props.universalSearchBar_findManyOrdersFailure();
        //     });
    }

    // handleSearchOrderItems(searchKey, searchFields, filters, page, size) {
    //     this.props.universalSearchBar_changePageState(PAGE_STATES.PENDING);

    //     apiOrderItem_search(searchKey, searchFields, filters, page, size)
    //         .then(res => {
    //             this.props.universalSearchBar_changePageState(PAGE_STATES.DONE);
    //             this.props.universalSearchBar_findManyOrderItemsSuccess(res.orderItems);
    //         })
    //         .catch(error => {
    //             this.props.universalSearchBar_changePageState(PAGE_STATES.DONE);
    //             this.props.universalSearchBar_findManyOrderItemsFailure();
    //         });
    // }

    handleRightIconClick(event) {
        event.stopPropagation();

        const { searchKey } = this.state;
            
        this.handleUniversalSearch(searchKey);
        this.showUniversalSearch();
    }

    handleKeyPress(event) {
        if (event.key === "Enter") {
            const { searchKey } = this.state;
            this.handleUniversalSearch(searchKey);
            this.showUniversalSearch();
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === "searchKey") {
            this.setState({ searchKey: value });
        }
    }

    handleOrderSelect(order) {
        const { history } = this.context;
        if (history) {
            history.push(`/orders/${order.id}/details`);
        }
    }

    handleOrderItemSelect(orderItem) {
        const { history } = this.context;
        if (history) {
            history.push(`/orders/${orderItem.order.id}/items/${orderItem.id}/details`);
        }
    }

    render() {
        const { isShowUniversalSearch, searchKey } = this.state;
        const orderStatusesI18n = I18n.t("common.order_status"); 

        return (
            <Dropdown
                isOpen={isShowUniversalSearch}
                toggle={this.toggleUniversalSearch}
                style={{ width: "500px" }}
            >
                <DropdownToggle
                    tag="div"
                    className=""
                    onClick={this.toggleUniversalSearch}
                >
                    <InputFormGroup
                        placeholder="Nhập Mã đơn hàng hoặc Tên, SĐT, Email khách"
                        className="mb-0"
                        name="searchKey"
                        value={searchKey}
                        rightIcon="mdi-magnify"
                        autoComplete="off"
                        onKeyPress={this.handleKeyPress}
                        onChange={this.handleInputChange}
                        onRightIconClick={this.handleRightIconClick}
                    />
                </DropdownToggle>
                <DropdownMenu className="w-100 py-0" style={{ maxHeight: "400px", overflowY: "scroll" }}>
                    {/* {pageState === PAGE_STATES.PENDING &&
                        <UniversalSearchItem>
                            <Spinner />
                        </UniversalSearchItem>
                    } */}
                    {/* {Array.isArray(orders) && orders.length > 0 &&
                        orders.map((item, index) => {
                            return (
                                <UniversalSearchItem
                                    key={index}
                                    className="list-group-item"
                                    onClick={() => this.handleOrderSelect(item)}
                                >
                                    <p className="mb-0">
                                        <span className="font-weight-bold">{"Mã đơn hàng:"}&nbsp;</span>
                                        <span>{item.tagCode}</span>
                                    </p>
                                    <p className="mb-0">
                                        <span className="font-weight-bold">{"Tên khách:"}&nbsp;</span>
                                        <span>{item.customerFullName}</span>
                                    </p>
                                    <p className="mb-0">
                                        <span className="font-weight-bold">{"SĐT khách:"}&nbsp;</span>
                                        <span>{item.customerPhoneNumber}</span>
                                    </p>
                                    <p className="mb-0">
                                        <span className="font-weight-bold">{"Trạng thái:"}&nbsp;</span>
                                        <span className="text-warning">{item && Array.isArray(item.statuses) ? item.statuses.map(item => orderStatusesI18n[item]).join(", ") : ""}</span>
                                    </p>
                                </UniversalSearchItem>
                            );
                        })
                    }
                    {Array.isArray(orderItems) && orderItems.length > 0 &&
                        orderItems.map((item, index) => {
                            return (
                                <UniversalSearchItem
                                    key={index}
                                    className="list-group-item"
                                    onClick={() => this.handleOrderItemSelect(item)}
                                >
                                    <p className="mb-0">
                                        <span className="font-weight-bold">{"Mã món đồ:"}&nbsp;</span>
                                        <span>{item.tagCode || ""}</span>
                                    </p>
                                    <p className="mb-0">
                                        <span className="font-weight-bold">{"Tên khách:"}&nbsp;</span>
                                        <span>{item && item.order ? item.order.customerFullName : ""}</span>
                                    </p>
                                    <p className="mb-0">
                                        <span className="font-weight-bold">{"SĐT khách:"}&nbsp;</span>
                                        <span>{item && item.order ? item.order.customerPhoneNumber : ""}</span>
                                    </p>
                                    <p className="mb-0">
                                        <span className="font-weight-bold">{"Trạng thái:"}&nbsp;</span>
                                        <span className="text-primary">{item && item.status ? orderStatusesI18n[item.status] : ""}</span>
                                    </p>
                                </UniversalSearchItem>
                            );
                        })
                    } */}
                    {/* {pageState === PAGE_STATES.PRISTINE && 
                        <UniversalSearchItem>
                            <p>Nhập nội dung tìm kiếm để tiếp tục</p>
                        </UniversalSearchItem>
                    }
                    {pageState === PAGE_STATES.DONE && (!Array.isArray(orders) || orders.length === 0) && 
                        (!Array.isArray(orderItems) || orderItems.length === 0) &&
                        <UniversalSearchItem
                        >
                            {"Không tìm thấy kết quả nào. Vui lòng thử lại."}
                        </UniversalSearchItem>
                    } */}
                    {/* {((Array.isArray(orders) && orders.length > 0) ||
                        (Array.isArray(orderItems) && orderItems.length > 0)) && */}
                    {searchKey &&
                        <DropdownItem
                            className="text-center"
                        >
                            <Link
                                to={`/search/results?query=${searchKey}&${queryString.stringify({ searchFields: ["customerFullName", "customerPhoneNumber", "customerEmail", "tagCode"] })}`}
                                className=""
                            >
                                {"Xem thêm kết quả."}
                            </Link>
                        </DropdownItem>
                    }
                </DropdownMenu>
            </Dropdown>
        );
    }
}
