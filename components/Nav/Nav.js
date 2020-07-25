import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './nav.module.scss';

/**
 * App navigation
 */
const Nav = ({ title }) => (
  <header className={styles.appNav}>
    <h1 className={styles.appTitle}>Hacker News: <span>{title}</span></h1>
    <nav>
      <ul>
        <li>
          <Link href="/"><a>Top stories</a></Link>
        </li>
        <li>
          <Link href="/beststories"><a>Best Stories</a></Link>
        </li>
      </ul>
    </nav>
  </header>
);

Nav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Nav;
