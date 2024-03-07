import Title from "./components/Title";
import { Subtitle } from "./components/Subtitle";

export default function App(){
	//variaveis:
	
	const status = true;

	return (
		<div>
			<Title/>
			<Subtitle/>
			
				<h2>Current status: {status ? 'ON' : 'OFF'}</h2>
		</div>
	)
}