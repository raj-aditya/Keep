import React from "react"

function Pagination(props){
    const pageNumbers = []
    for (let i = 1; i<= Math.ceil(props.length/props.postPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div className='pagination'>
            {
                pageNumbers.map((pageNumber) => (<button key={pageNumber} className = {props.currentPage == pageNumber ? "active" : ""} onClick={()=>{props.handlePagination(pageNumber)}}>{pageNumber}</button>))
            }
        </div>
    )
}
export default Pagination;