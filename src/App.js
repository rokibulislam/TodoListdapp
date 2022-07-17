import './App.css';
import AppRoutes from './approutes'
import Navigation from './components/navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
          <AppRoutes />
      </div>
    </div>
  );
}

export default App;
