import Link from 'next/link';

import { ResponseInfo } from '@/types/response-info';

import styles from './Paginator.module.scss';

interface PaginatorProps {
  urlPage: number;
  info: ResponseInfo;
}

export const Paginator = ({ urlPage, info }: PaginatorProps) => {
  const nextPage = info.next?.slice(48);
  const prevPage = info.prev?.slice(48);
  const pagesCount = info.pages;

  const pagesToShow = 10;
  const halfPagesToShow = Math.floor(pagesToShow / 2);

  let startPage = Math.max(1, urlPage - halfPagesToShow);
  let endPage = Math.min(pagesCount, urlPage + halfPagesToShow);

  if (endPage - startPage < pagesToShow - 1) {
    endPage = Math.min(pagesCount, startPage + pagesToShow - 1);
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  const handleNextBtnStyles = () => {
    return nextPage == undefined
      ? `${styles.paginator__btn} ${styles.paginator__disabled}`
      : `${styles.paginator__btn}`;
  };

  const handlePrevBtnStyles = () => {
    return prevPage == undefined
      ? `${styles.paginator__btn} ${styles.paginator__disabled}`
      : `${styles.paginator__btn}`;
  };

  return (
    <div className={styles.paginator}>
      <Link href={`/characters?page=${prevPage}`} className={handlePrevBtnStyles()}>
        Prev
      </Link>

      {startPage > 1 && (
        <>
          <Link href={`/characters?page=${1}`}>{1}</Link>
          {startPage > 2 && <span>...</span>}
        </>
      )}

      {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
        <Link className={page == urlPage ? styles.paginator__active : ''} key={page} href={`/characters?page=${page}`}>
          {page}
        </Link>
      ))}

      {endPage < pagesCount && (
        <>
          {endPage < pagesCount - 1 && <span>...</span>}
          <Link href={`/characters?page=${pagesCount}`}>{pagesCount}</Link>
        </>
      )}
      <Link href={`/characters?page=${nextPage}`} className={handleNextBtnStyles()}>
        Next
      </Link>
    </div>
  );
};
