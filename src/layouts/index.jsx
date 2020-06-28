import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

export default ({ children }) => {
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

  return (
    <main>
      <Helmet titleTemplate={`%s — ${title}`} />
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      {children}
    </main>
  );
};
