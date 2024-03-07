import './styles/App.css'
function App() {
  return (<>
            <div class="container">
				<img src="../public/images/react.png" alt="Logo do React.js" id="react-logo" />
				<h1>React.js</h1>

					<button>Aprenda React</button>	<button>Referência de API</button>
					<br />
					<br />
			</div>

			<div className="container">
				<h2>Crie interfaces de usuário de componentes</h2>
				<p>O React permite que você construa interfaces de usuário a partir de pedaços inidividuais chamados de componentes.</p>
			</div>

			<div className="container">
				<h2>Escreva componentes com código e marcação</h2>
				<p>Componentes React são funções JavaScript. A sintase de marcação é chamada de JSX. Que, por sua vez, é uma extensão de sintaxe do JavaScript que foi popularizada pelo React.</p>
			</div>

			<div className='container'>
				<h2>Próximos passos: </h2>
				<ul>
					<li>Uso de dados dinâmicos no JSX</li>
					<li>Criação de novos componentes.</li>
					<li>Estilização de componente.</li>
					<li>Reutilização de componentes.</li>
					<li>Usos de props e children.</li>
					<li>Uso de eventos do JavaScript.</li>
				</ul>
			</div>
</>
  )
}

export default App
