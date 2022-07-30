import { list } from 'postcss';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component, useLayoutEffect } from 'react';

const Pagination = (props) => {
    const { itemCount, pageSize, onPageChange, currentPage } = props;
    const pagesCount = Math.ceil(itemCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    console.log(currentPage);
   
    return ( 
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                {pages.map(page =>(
                    <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                     <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}
                </ul>
            </nav>
    );
}

Pagination.propTypes= {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination;