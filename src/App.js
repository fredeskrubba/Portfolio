import './styles/output.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-main-dark font-lato">
      <Navbar/>
      <Header/>
      <div className='p-96'></div>
    </div>
  );
}

export default App;
