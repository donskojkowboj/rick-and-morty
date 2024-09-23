import Link from 'next/link';

import styles from './page.module.scss';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePage__links}>
        <Link href="/characters">Characters</Link>
        <Link href="/episodes">Episodes</Link>
        <Link href="/locations">Locations</Link>
      </div>
    </div>
  );
};

export default Home;
