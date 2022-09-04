import React from 'react';

import ReactPaginate from 'react-paginate';

import "../assets/styles/Pagination.css"

const Pagination = (props) => {
    const clickHandler = async (data) => {
        const limit = data.selected + 1
        props.getLimitCoin(limit)
    }

    return (
        <div>
            <ReactPaginate
                pageCount={8}
                pageRangeDisplayed={3}
                previousLabel="prev"
                breakLabel="..."
                nextLabel="next"
                onPageChange={clickHandler}
                containerClassName="pagination"
                pageLinkClassName="page-link"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                activeLinkClassName="active"
            />
        </div>
    );
};

export default Pagination;