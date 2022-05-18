import './App.css';

import Navbar from './components/Navbar/Navbar';
import Search from './components/Search';
import Footer from './components/Footer/Footer';
import Pages from './pages/Pages';
import Category from "./components/Category"
import MealPlan from './components/MealPlan';

function App() {
  return (
    <>
      <nav><Navbar /></nav>
      <header className='app--header'>        
        <div className='category--div'>
            <Category />
        </div>
        <div className='app--search'>
          <Search />
          <MealPlan />
          
        </div>
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
