import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { replaceHellip } from '../utils/helper';
import PostDivider from '../components/post-divider';

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
            <h2 dangerouslySetInnerHTML={{ __html: p.title }} />
          </Link>
          <em className={css.PostDate}>{p.date}</em>
          <div
            className={css.PostBody}
            dangerouslySetInnerHTML={{ __html: replaceHellip(p.excerpt) }}
          />
          <div className={css.ReadMore}>
            <Link to={p.path}>Read more ⟶</Link>
          </div>
          {i + 1 < nodes.length && <PostDivider />}
        </li>
      ))}
    </ul>
  </div>
);

export const query = graphql`
query {
  allWordpressPost(
    limit: 100,
    sort: {
      fields: date,
      order: DESC
    }
  ) {
    nodes {
      id
      title
      excerpt
      date(formatString: "D MMMM YYYY")
      path
    }
  }
}
`;
