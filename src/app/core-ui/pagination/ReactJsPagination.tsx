import React from 'react';

import Pagination from "react-js-pagination";

type Props = {
    totalItems: number,
    itemPerPage?: number,
    activePage?: number,
    handlePageChange?: Function,
};

const defaultProps = {
    itemPerPage: 12,
};

export function ReactJsPagination({
    totalItems, 
    itemPerPage, 
    activePage, 
    handlePageChange,
}: Props) {

    return(
        <div className="paginate mt-2 d-flex justify-content-end">
            <Pagination
                activePage={activePage}
                itemsCountPerPage={itemPerPage}
                totalItemsCount={totalItems}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                activeClass={"active"}
                itemClass={"page-item"}
                linkClass={"page-link"}
                firstPageText={"Đầu"}
                prevPageText={"Trước"}
                nextPageText={"Tiếp"}
                lastPageText={"Cuối"}
            />
        </div>
    );
}

ReactJsPagination.defaultProps = defaultProps;
