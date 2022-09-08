export const ShowName = ({ name }) => {
	if (!name) {
		return null;
	}
	return (
		<h2>
			Olá {name}
			<br />
			Seu nome tem {name.replaceAll(' ', '').length} letras <br />
			Seu nome de trás para frente é {name.split('').reverse().join('')}
			<br />
			Seu nome em letras maiusculas é {name.toUpperCase()}
		</h2>
	);
};
