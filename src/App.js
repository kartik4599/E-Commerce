import Header from './components/Layout/Header';
import './App.css';
import Footer from './components/Layout/Footer';
import Music from './components/Layout/Center/Music';

function App() {
  return (
    <div className="App">
      <Header/>
      <Music/>
      <Footer/>
    </div>
  );
}

export default App;
