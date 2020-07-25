import PropTypes from 'prop-types';
import Head from 'next/head';
import Nav from '../Nav';

import style from './layout.module.scss';

/**
 * App layout
 */
const Layout = ({ title, children, ...rest }) => (
  <div {...rest}>
    <Head><title>Hacker news - {title}</title></Head>
    <Nav title={title} />
    <main className={style.appContainer}>
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: 'Hacker News',
};

export default Layout;
