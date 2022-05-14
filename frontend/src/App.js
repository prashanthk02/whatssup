import './App.css';

import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/SearchForm';
import Footer from './components/Footer/Footer';
import Cuisine from './components/Cuisine/Cuisine';

function App() {
  return (
    <>
      <nav><Navbar /></nav>
      <header className='app--header'>
        <Search />
        <Cuisine />

      </header>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
