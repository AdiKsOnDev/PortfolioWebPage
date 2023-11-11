import './styles.css';

// React Components
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="h-full min-h-screen bg-primary">
      <Header />
      <Body />
    </div>
  );
}

export default App;