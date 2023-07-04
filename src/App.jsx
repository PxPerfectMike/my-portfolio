import { useState } from 'react';
import './App.css';
import CoverPage from './components/CoverPage';
import TableOfContents from './components/TableOfContents';
import Biography from './components/Biography';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
	const [started, setStarted] = useState(false);

	const start = () => {
		setStarted(true);
	};

	return (
		<div className='App'>
			{!started && <CoverPage start={start} />}
			{started && (
				<>
					<TableOfContents />
					<Biography />
					<Skills />
					<Experience />
					<Projects />
					<Education />
				</>
			)}
		</div>
	);
}

export default App;
