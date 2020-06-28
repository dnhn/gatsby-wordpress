import React from 'react';
import { graphql } from 'gatsby';
import { parseHtmlEntities } from '../utils/helper';

export default ({
  data: { wordpressPage: { title, content } },
}) => (
  <div>
    <h1>{parseHtmlEntities(title)}</h1>
    <div dangerouslySetInnerHTML={{ __html: content }} />
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
