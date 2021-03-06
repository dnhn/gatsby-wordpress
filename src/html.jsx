import React from 'react';
import PropTypes from 'prop-types';
import { siteMetadata } from '../gatsby-config';
import { googleFonts } from './utils/constant';

const HTML = props => (
  <html
    lang="en"
    {...props.htmlAttributes}
  >
    <head>
      <meta charSet="utf-8" />
      <meta
        httpEquiv="x-ua-compatible"
        content="ie=edge"
      />
      <meta
        name="description"
        content={siteMetadata.description}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no"
      />
      <title>{siteMetadata.title}</title>

      {/**
        * Google fonts loading optimisation
        * https://csswizardry.com/2020/05/the-fastest-google-fonts
        * */}
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        rel="preload"
        as="style"
        href={googleFonts}
      />
      <noscript>
        <link
          rel="stylesheet"
          type="text/css"
          href={googleFonts}
        />
      </noscript>
      {/* End Google fonts */}

      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
      {props.preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
    </body>
  </html>
);

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

export default HTML;
