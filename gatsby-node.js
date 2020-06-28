const Post = require.resolve('./src/templates/post.jsx');

exports.createPages = async ({
  graphql,
  actions: { createPage },
}) => {
  const {
    data: { allWordpressPost: { edges: posts } },
  } = await graphql(`
    query {
      allWordpressPost(
        sort: {
          fields: date,
          order: DESC
        }
      ) {
        edges {
          next {
            title
            path
          }
          node {
            id
            title
            content
            date(fromNow: true, locale: "vi")
            path
          }
          previous {
            title
            path
          }
        }
      }
    }
  `);

  posts.forEach(({
    next: nextPost,
    node: { id, path },
    previous: previousPost,
  }) => {
    createPage({
      path,
      component: Post,
      context: {
        id,
        nextPost,
        previousPost,
      },
    });
  });
};
