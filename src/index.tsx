import React from 'react';
import ReactDOM from 'react-dom';
import Aa from './pages/Aa/Aa';
import reportWebVitals from './reportWebVitals';
import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<Aa />
	</React.StrictMode>,
	document.getElementById('root')
);
console.log();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
