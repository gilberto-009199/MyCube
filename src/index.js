import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Window  from './janela';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <Window>
      <BrowserRouter>
          <Main/>
      </BrowserRouter>
    </Window>
    ,
  document.getElementById('root')
);
