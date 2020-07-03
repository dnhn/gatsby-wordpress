import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { stripHtml } from '../utils/helper';

import css from './post.module.css';

export default ({
  pageContext: { previousPost, nextPost },
  data: {
    wordpressPost: {
      title,
      content,
      date,
    },
  },
}) => (
  <div>
    <Helmet title={stripHtml(title)} />
    <h2
      className={css.Title}
      dangerouslySetInnerHTML={{ __html: title }}
    />
    <em className={css.Date}>{date}</em>
    <div
      className={css.Body}
      dangerouslySetInnerHTML={{ __html: content }}
    />
    <nav className={css.Nav}>
      <div className={css.NavItem}>
        {previousPost && (
          <Link
            className={css.NavLink}
            to={previousPost.path}
          >
            <span className={css.NavLinkArrow}>⟻</span>
            <span>{stripHtml(previousPost.title)}</span>
          </Link>
        )}
      </div>
      <div className={css.NavItem}>
        {nextPost && (
          <Link
            className={css.NavLink}
            to={nextPost.path}
          >
            <span>{stripHtml(nextPost.title)}</span>
            <span className={css.NavLinkArrow}>⟼</span>
          </Link>
        )}
      </div>
    </nav>
  </div>
);

export const query = graphql`
query($id: String!) {
  wordpressPost(id: { eq: $id }) {
    title
    content
    date(
      formatString: "D MMMM, YYYY"
    )
  }
}
`;
