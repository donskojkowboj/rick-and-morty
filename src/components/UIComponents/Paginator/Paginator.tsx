import Link from 'next/link';

import { buildQueryString } from '@/api/helpers/buildQueryString';

import styles from './Paginator.module.scss';

interface PaginatorProps {
  sourceUrl: string;
  pagesCount: number;
  pagesToShow?: number;
  searchParams?: Record<string, string>;
}

export const Paginator = ({ sourceUrl, pagesCount, pagesToShow = 3, searchParams }: PaginatorProps) => {
  const pageNumber = Number(searchParams?.page || '1');

  if (pagesCount < 2) {
    return null;
  }

  const halfPagesToShow = Math.floor(pagesToShow / 2);
  let startPage = Math.max(1, pageNumber - halfPagesToShow);
  let endPage = Math.min(pagesCount, pageNumber + halfPagesToShow);

  if (endPage - startPage < pagesToShow - 1) {
    endPage = Math.min(pagesCount, startPage + pagesToShow - 1);
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  const createNextBtnStyles = () => {
    if (pageNumber === pagesCount) {
      return `${styles.paginator__btn} ${styles.paginator__disabled}`;
    }
    return `${styles.paginator__btn}`;
  };

  const createPrevBtnStyles = () => {
    if (pageNumber == 1) {
      return `${styles.paginator__btn} ${styles.paginator__disabled}`;
    }
    return `${styles.paginator__btn}`;
  };

  const displayPages = () => {
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const createLinkClassname = (page: number) => {
    return page == pageNumber
      ? `${styles.paginator__pageLink} ${styles.paginator__active}`
      : styles.paginator__pageLink;
  };

  const buildPageUrl = (pageNumber: number) => {
    const queryString = buildQueryString({
      ...searchParams,
      page: pageNumber !== 1 ? String(pageNumber) : undefined,
    });

    return `${sourceUrl}?${queryString}`;
  };

  return (
    <div className={styles.paginator}>
      <Link href={buildPageUrl(pageNumber - 1)} className={createPrevBtnStyles()}>
        Prev
      </Link>

      {startPage > 1 && (
        <>
          <Link className={styles.paginator__pageLink} href={buildPageUrl(1)}>
            {1}
          </Link>
          {startPage > 2 && <span>...</span>}
        </>
      )}

      {displayPages().map((page) => (
        <Link className={createLinkClassname(page)} key={page} href={buildPageUrl(page)}>
          {page}
        </Link>
      ))}

      {endPage < pagesCount && (
        <>
          {endPage < pagesCount - 1 && <span>...</span>}
          <Link className={styles.paginator__pageLink} href={buildPageUrl(pagesCount)}>
            {pagesCount}
          </Link>
        </>
      )}

      <Link href={buildPageUrl(pageNumber + 1)} className={createNextBtnStyles()}>
        Next
      </Link>
    </div>
  );
};
