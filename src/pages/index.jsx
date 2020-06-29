import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { parseHtmlEntities, replaceHellip } from '../utils/helper';

export default ({
  data: { allWordpressPost: { nodes } },
}) => (
  <div>
    <Helmet title='Home' />
    <ul>
      {nodes.map(p => (
        <li key={p.id}>
          <Link to={p.path}>
            <h2>{parseHtmlEntities(p.title)}</h2>
          </Link>
          <span>{p.date}</span>
          <div
            dangerouslySetInnerHTML={{ __html: replaceHellip(p.excerpt) }}
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
