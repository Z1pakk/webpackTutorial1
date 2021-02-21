// import * as $ from 'jquery';
// import Post from '@models/Post';
import '@/styles/styles.css';
import '@/styles/less.less';
import '@/styles/sass.scss';

import '@/babel';

import React from 'react';
import { render } from 'react-dom';

// import json from './assets/json.json';
// import WebpackLogo from './assets/webpack-logo.png';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';

// const post = new Post('Webpack Post Title2', WebpackLogo);

// $('pre').html(post.toString())

// console.log(json);
//
// console.log('XML: ', xml);
//
// console.log('CSV: ', csv);

// const a = 1;

// function foo(name) {
//   const lastname = name;
// }
//
// const x = 100;

// console.log(x);

const App = () => (
  <div className="container">

    <h1>Webpack Course</h1>

    <hr />

    <div className="logo" />

    <hr />

    <pre />

    <hr />

    <div className="box">
      <h2>Less</h2>
    </div>

    <div className="card">
      <h2>Sass</h2>
    </div>

  </div>
);

render(<App />, document.getElementById('app'));
