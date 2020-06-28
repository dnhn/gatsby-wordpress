import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

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
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      {children}
    </main>
  );
};
