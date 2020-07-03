import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import css from './index.module.css';

export default ({ children, location }) => {
  const {
    site: { siteMetadata: { title } },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const IndexPage = location.pathname === '/';

  return (
    <main>
      <Helmet titleTemplate={`%s — ${title}`} />
      <Link to="/">
        <h1
          className={`${css.Hero} ${IndexPage ? css.HeroLarge : ''}`}
          style={{
            backgroundImage: `url('https://unsplash.it/1280/720')`,
          }}
        >
          <div className={css.HeroOverlay}>
            <span>{title}</span>
          </div>
        </h1>
      </Link>
      <div className={css.MainContent}>
        {children}
      </div>
    </main>
  );
};
