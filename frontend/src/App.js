import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Pages from './pages/Pages';

function App() {
  return (
    <>
      <nav><Navbar /></nav>
      <header className='app--header'>

        <div className='pages--div'>
          <Pages />
        </div>
        
      </header>
      <footer>
        <Footer />
      </footer>
    </>
    
  );
}

export default App;