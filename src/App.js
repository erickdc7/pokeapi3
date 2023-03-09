import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";
import PokeList from "./components/PokeList";
import './App.css';

function App() {
	return (
		<>
			<Topbar />
			<PokeList />
			<Bottombar />
		</>
	);
}

export default App;
