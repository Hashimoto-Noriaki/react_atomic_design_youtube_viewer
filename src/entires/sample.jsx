import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <h1>Hello react.</h1>,
  rootEl,
);

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
//上記の記述はブラウザで動くようにするために必要なパッケージを読み込むための記述