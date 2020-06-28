import React from 'react';
import { Link, graphql } from 'gatsby';

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
    {previousPost && (
      <Link
        to={previousPost.path}
        dangerouslySetInnerHTML={{ __html: previousPost.title }}
      />
    )}
    {nextPost && (
      <Link
        to={nextPost.path}
        dangerouslySetInnerHTML={{ __html: nextPost.title }}
      />
    )}
    <h2 dangerouslySetInnerHTML={{ __html: title }} />
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
