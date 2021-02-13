import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
	background-color: #fff;
	padding: 3rem;
`;

function App() {
	const [resumen, guardarResumen] = useState({
		cotizacion: 0,
		datos: {
			marca: '',
			year: '',
			plan: ''
		}
	});

	const [cargando, guardarCargando] = useState(false);

	const { datos, cotizacion } = resumen;

	return (
		<Contenedor>
			<Header titulo='Cotizador de Seguros' />
			<ContenedorFormulario>
				<Formulario
					guardarResumen={guardarResumen}
					guardarCargando={guardarCargando}
				/>
				{cargando ? <Spinner /> : null}

				{!cargando ? (
					<Fragment>
						<Resultado cotizacion={cotizacion} />
						<Resumen datos={datos} />
					</Fragment>
				) : null}
			</ContenedorFormulario>
		</Contenedor>
	);
}

export default App;
