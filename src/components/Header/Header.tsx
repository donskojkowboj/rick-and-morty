import Link from 'next/link';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div>
      <Link href="/">
        <h1 className={styles.header__title}>Rick and Morty App</h1>
      </Link>

      <nav className={styles.header__nav}>
        <Link href="/characters">Characters</Link>
        <Link href="/episodes">Episodes</Link>
        <Link href="/locations">Locations</Link>
      </nav>
    </div>
  );
};
