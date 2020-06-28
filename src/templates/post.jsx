import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { parseHtmlEntities } from '../utils/helper';

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
    {previousPost && (
      <Link to={previousPost.path}>
        {parseHtmlEntities(previousPost.title)}
      </Link>
    )}
    {nextPost && (
      <Link to={nextPost.path}>
        {parseHtmlEntities(nextPost.title)}
      </Link>
    )}
    <h2>{parseHtmlEntities(title)}</h2>
    <span>{date}</span>
    <div dangerouslySetInnerHTML={{ __html: content }} />
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
