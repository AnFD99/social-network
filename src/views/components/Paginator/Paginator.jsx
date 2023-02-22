/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames'
import React from 'react'
import styles from './Paginator.module.css'
import { usePagination, DOTS } from 'views/hook/usePagination'
import { connect } from 'react-redux'
import { paginationSelectors } from 'store/ducks/pagination'

const Paginator = ({
   onPageChange,
   totalCount,
   siblingCount = 1,
   currentPage,
   pageSize,
   ...props
}) => {
   const paginationRange = usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
   })

   if (currentPage === 0 || paginationRange.length < 1) {
      return null
   }

   const onNext = () => {
      onPageChange(currentPage + 1)
   }

   const onPrevious = () => {
      onPageChange(currentPage - 1)
   }

   let lastPage = paginationRange[paginationRange.length - 1]
   return (
      <ul className={classNames(styles.paginationContainer)}>
         {currentPage === 1 ? (
            <button className={styles.btn} disabled>
               <div className={`${styles.arrow} ${styles.left}`} />
            </button>
         ) : (
            <button className={styles.btn} onClick={onPrevious}>
               <div className={`${styles.arrow} ${styles.left}`} />
            </button>
         )}

         {paginationRange.map((pageNumber) => {
            if (pageNumber === DOTS) {
               return (
                  <li
                     key={pageNumber}
                     className={`${styles.paginationItem} ${styles.dots}`}
                  >
                     &#8230;
                  </li>
               )
            }

            return (
               <li
                  key={pageNumber}
                  className={
                     currentPage === pageNumber
                        ? `${styles.selectedPage} ${styles.paginationItem}`
                        : styles.paginationItem
                  }
                  onClick={() => onPageChange(pageNumber)}
               >
                  {pageNumber}
               </li>
            )
         })}

         {currentPage === lastPage ? (
            <button className={styles.btn} disabled>
               <div className={`${styles.arrow} ${styles.right}`} />
            </button>
         ) : (
            <button className={styles.btn} onClick={onNext}>
               <div className={`${styles.arrow} ${styles.right}`} />
            </button>
         )}
      </ul>
   )
}

let mapStateToProps = (state) => {
   return {
      pageSize: paginationSelectors.getPageSize(state),
      currentPage: paginationSelectors.getPageNumber(state),
      totalCount: paginationSelectors.getUsersCount(state),
   }
}

export default connect(mapStateToProps)(Paginator)

