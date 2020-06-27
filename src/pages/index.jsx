import React from 'react';
import { Link, graphql } from 'gatsby';

export default ({
  data: {
    allWordpressPost: { nodes },
    site: { siteMetadata: { title } },
  },
}) => (
  <div>
    <h1>{title}</h1>
    <ul>
      {nodes.map(p => (
        <li>
          <Link to={p.path}>
            <h2
              dangerouslySetInnerHTML={{ __html: p.title }}
            />
          </Link>
          <span>{p.date}</span>
          <p
            dangerouslySetInnerHTML={{ __html: p.excerpt }}
          />
        </li>
      ))}
    </ul>
  </div>
);

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allWordpressPost(
    sort: {
      fields: date,
      order: DESC
    }
  ) {
    nodes {
      title
      excerpt
      date(fromNow: true, locale: "vi")
      path
    }
  }
}
`;
