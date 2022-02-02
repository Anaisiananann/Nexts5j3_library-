import React from 'react';
import ReactDom from 'react-dom';

import Books from 'components/Books';

import 'bootstrap/dist/css/bootstrap.min.css';

import data from 'data/data';

const App = () => (
  <Books data={data}/>
)

ReactDom.render(<App/>, document.getElementById('root'));
