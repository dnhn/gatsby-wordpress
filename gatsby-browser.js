import './src/styles/global.css';

import React from 'react';
import Layout from './src/layouts/index';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>
    {element}
  </Layout>
);
