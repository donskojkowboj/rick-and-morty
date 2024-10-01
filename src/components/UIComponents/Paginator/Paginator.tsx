import Link from 'next/link';

import { ResponseInfo } from '@/types/response-info';

import styles from './Paginator.module.scss';

interface PaginatorProps {
  source: string;
  urlPage: number;
  info: ResponseInfo;
}

export const Paginator = ({ source, urlPage, info }: PaginatorProps) => {
  const pagesCount = info.pages;
  const pagesToShow = 3;
  const halfPagesToShow = Math.floor(pagesToShow / 2);

  let startPage = Math.max(1, urlPage - halfPagesToShow);
  let endPage = Math.min(pagesCount, urlPage + halfPagesToShow);

  if (endPage - startPage < pagesToShow - 1) {
    endPage = Math.min(pagesCount, startPage + pagesToShow - 1);
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  const handleNextBtnStyles = () => {
    return urlPage === pagesCount
      ? `${styles.paginator__btn} ${styles.paginator__disabled}`
      : `${styles.paginator__btn}`;
  };

  const handlePrevBtnStyles = () => {
    return urlPage == 1 ? `${styles.paginator__btn} ${styles.paginator__disabled}` : `${styles.paginator__btn}`;
  };

  const displayPages = () => {
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className={styles.paginator}>
      <Link href={`${source}?page=${urlPage - 1}`} className={handlePrevBtnStyles()}>
        Prev
      </Link>

      {startPage > 1 && (
        <>
          <Link className={styles.paginator__pageLink} href={`${source}?page=${1}`}>
            {1}
          </Link>
          {startPage > 2 && <span>...</span>}
        </>
      )}

      {displayPages().map((page) => (
        <Link
          className={
            page == urlPage ? `${styles.paginator__pageLink} ${styles.paginator__active}` : styles.paginator__pageLink
          }
          key={page}
          href={`${source}?page=${page}`}
        >
          {page}
        </Link>
      ))}

      {endPage < pagesCount && (
        <>
          {endPage < pagesCount - 1 && <span>...</span>}
          <Link className={styles.paginator__pageLink} href={`${source}?page=${pagesCount}`}>
            {pagesCount}
          </Link>
        </>
      )}

      <Link href={`${source}?page=${urlPage + 1}`} className={handleNextBtnStyles()}>
        Next
      </Link>
    </div>
  );
};
