import './App.css';

import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/SearchForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <nav><Navbar /></nav>
      <header className='app--header'>
        <Search />

        <div className='header--options'>
        <h2>What I have</h2>
        <h2>What I can make</h2>
        <h2>How I can make</h2>
        <h2>Random Recipe</h2>
        </div>

      </header>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
