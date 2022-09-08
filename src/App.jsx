import { useState } from 'react';
import './App.css';
import { ShowName } from './components/ShowName';

function App() {
	const [name, setName] = useState('');

	return (
		<main>
			<h1>Componente ShowName </h1>
			<label htmlFor="name">Insira seu nome no campo abaixo</label>
			<input
				type="text"
				name="name"
				onChange={(e) => setName(e.target.value)}
			/>
			<ShowName name={name} />
		</main>
	);
}

export default App;
