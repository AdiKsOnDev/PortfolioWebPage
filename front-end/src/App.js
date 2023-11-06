import './styles.css';

// Components
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="h-full min-h-screen w-screen bg-primary">
      <Header />
      <Body />
    </div>
  );
}

export default App;