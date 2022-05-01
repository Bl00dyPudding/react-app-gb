import './App.css';
import Message from "./Message";

const messages = ['❤️ Vue ❤️', '💩 React 💩'];

function App() {
	return (
		<div className="App">
			{messages.map(message => (
				<Message message={message}/>
			))}
		</div>
	);
}

export default App;
