import React from 'react';
import { graphql } from 'gatsby';

export default ({
  data: { wordpressPage: { title, content } },
}) => (
  <div>
    <h1 dangerouslySetInnerHTML={{ __html: title }} />
    <p dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

export const query = graphql`
query($id: String!) {
  wordpressPage(id: { eq: $id }) {
    title
    content
  }
}
`;
