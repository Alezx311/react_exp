import { Block, Container, Message } from "react-bulma-components"
import "./App.css"
import { Character } from "./components/Character"
import { ExamplesComponent } from "./components/Examples"
import { HelpersConstants, HelpersResults } from "./components/Helpers"
import logo from "./logo.svg"

export const Header = () => (
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<p>
			Edit <code>src/App.js</code> and save to reload.
		</p>
		<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
			Learn React
		</a>
	</header>
)

function App() {
	return (
		<Container className="App">
			<Block>
				<Message color="success">Character</Message>
				<Character />
			</Block>

			<Block>
				<Message color="success">HelpersConstants</Message>
				<HelpersConstants />
			</Block>

			<Block>
				<Message color="success">HelpersResults</Message>
				<HelpersResults />
			</Block>

			<Block>
				<Message color="success">ExamplesComponent</Message>
				<ExamplesComponent />
			</Block>
		</Container>
	)
}

export default App
