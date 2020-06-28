import React from 'react';
import { Link, graphql } from 'gatsby';
import { hellipReplacer } from '../utils/helper';

export default ({
  data: { allWordpressPost: { nodes } },
}) => (
  <div>
    <ul>
      {nodes.map(p => (
        <li key={p.id}>
          <Link to={p.path}>
            <h2 dangerouslySetInnerHTML={{ __html: p.title }} />
          </Link>
          <span>{p.date}</span>
          <div
            dangerouslySetInnerHTML={{ __html: hellipReplacer(p.excerpt) }}
          />
        </li>
      ))}
    </ul>
  </div>
);

export const query = graphql`
query {
  allWordpressPost(
    sort: {
      fields: date,
      order: DESC
    }
  ) {
    nodes {
      id
      title
      excerpt
      date(fromNow: true, locale: "vi")
      path
    }
  }
}
`;
