import React from 'react';
import ReactDOM from 'react-dom';
import LightSwitch from './components/LightSwitch';
import ClickityClick from './components/ClickityClick';
import ButtonCounter from './components/ButtonCounter';

ReactDOM.render(
  <div>
    <ClickityClick />
    <ButtonCounter />
    <LightSwitch />
  </div>,
  document.getElementById('root')
);