import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { parseHtmlEntities } from '../utils/helper';

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
    <Helmet title={parseHtmlEntities(title)} />
    <h2 className={css.Title}>{parseHtmlEntities(title)}</h2>
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
            <span>{parseHtmlEntities(previousPost.title)}</span>
          </Link>
        )}
      </div>
      <div className={css.NavItem}>
        {nextPost && (
          <Link
            className={css.NavLink}
            to={nextPost.path}
          >
            <span>{parseHtmlEntities(nextPost.title)}</span>
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
      formatString: "D MMMM, YYYY",
      locale: "vi"
    )
  }
}
`;
