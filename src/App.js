import './App.css'
import Header from './components/Header'; 
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <UserCard></UserCard>
        <p>
        I'm amazing 
        </p>
    
      </header>
    </div>
  );
}

export default App;
