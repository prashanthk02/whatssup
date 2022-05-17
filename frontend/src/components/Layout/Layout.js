import React from 'react';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/SearchForm';
import Footer from '../Footer/Footer';
import Cuisine from '../Cuisine/Cuisine';

export default function Layout() {

  return (
    <>
    <div>
      <Navbar />
    </div>
    <main>
      <Search />
      <Cuisine />
    </main>
    <footer>
        <Footer />
      </footer>
    </>
  )
}