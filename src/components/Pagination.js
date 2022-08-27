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
                pageCount={38}
                pageRangeDisplayed={3}
                previousLabel="previous"
                breakLabel="..."
                nextLabel="next"
                onPageChange={clickHandler}
                containerClassName="pagination container"
                pageClassName="page-number"
                pageLinkClassName="page-link"
                breakClassName="breakPage"
                previousClassName="previous-item"
                nextClassName="next-item"
            />
        </div>
    );
};

export default Pagination;