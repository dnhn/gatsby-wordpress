import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { parseHtmlEntities, replaceHellip } from '../utils/helper';

import css from './index.module.css';

export default ({
  data: { allWordpressPost: { nodes } },
}) => (
  <div>
    <Helmet title='Home' />
    <ul>
      {nodes.map((p, i) => (
        <li
          key={p.id}
          className={css.PostItem}
        >
          <Link to={p.path}>
            <h2>{parseHtmlEntities(p.title)}</h2>
          </Link>
          <em className={css.PostDate}>{p.date}</em>
          <div
            className={css.PostBody}
            dangerouslySetInnerHTML={{ __html: replaceHellip(p.excerpt) }}
          />
          <div className={css.ReadMore}>
            <Link to={p.path}>Đọc tiếp ⟶</Link>
          </div>
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
