import React from 'react';
import logo from '../../assets/logo.svg';
import Bb from 'pages/Bb/Bb';
import './Aa.scss';

function Aa() {
	const a = 12;
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React 123
				</a>
				<Bb />
			</header>
		</div>
	);
}

export default Aa;
