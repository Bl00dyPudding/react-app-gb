import './App.css';
import {useEffect, useState} from "react";

function App() {
	const [messages, setMessages] = useState([])

	return (
		<div className="App">
			<Input setMessages={setMessages} messages={messages}/>

			{messages.map((message, i) => (
				<div key={i}>
					<b>{message.author}</b>: <span>{message.value}</span>
				</div>
			))}
		</div>
	);
}

export function Input({setMessages, messages}) {
	const [value, setValue] = useState('');

	const createAnswer = t => {
		setTimeout(() => {
			setMessages((m) => [...m, {author: 'bot', value: 'React'}])
		}, t);
	};

	useEffect(() => {
		if (messages.length && messages[messages.length - 1].author !== 'bot') {
			createAnswer(500)
		}
	}, [messages]);

	const updateMessages = () => {
		setMessages((m) => [...m, {author: 'user', value}]);
		setValue('');
	}

	return (
		<div className="Input">
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={updateMessages}>Send message!</button>
		</div>
	);
}

export default App;
