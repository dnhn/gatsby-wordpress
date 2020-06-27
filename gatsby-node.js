const Page = require.resolve('./src/templates/page.jsx');
const Post = require.resolve('./src/templates/post.jsx');

exports.createPages = async ({
  graphql,
  actions: { createPage },
}) => {
  const {
    data: {
      allWordpressPage: { nodes: pages },
      allWordpressPost: { edges: posts },
    },
  } = await graphql(`
    query {
      allWordpressPage(
        sort: {
          fields: menu_order,
          order: ASC
        }
      ) {
        nodes {
          id
          path
        }
      }
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

  pages.forEach(({
    id,
    path,
  }) => {
    createPage({
      path,
      component: Page,
      context: { id },
    });
  });

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
