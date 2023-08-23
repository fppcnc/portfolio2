import React from 'react';
import ReactDOM from 'react-dom';
import Paragraphs from './Paragraphs';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Paragraphs />, div);
  ReactDOM.unmountComponentAtNode(div);
});