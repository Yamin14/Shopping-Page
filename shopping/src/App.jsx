import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {SearchBar} from './components/SearchBar';
import {Categories} from './components/Categories';
import {ContactInfo} from './components/ContactInfo';
import {Items} from './components/Items';
import {CartButton} from './components/CartButton';
import {Loading} from './components/Loading';
import {CartPage} from "./components/CartPage";

const url = 'https://www.googleapis.com/books/v1/volumes?q=%22computer+programming%22';

function App() {

  //declarations
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openCart, setOpenCart] = useState(false);
  const [searchText, setSearchText] = useState("");

  //fetch
  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      let booksTemp = await response.json();
      setBooks(booksTemp);
      
      setIsLoading(false);

    } catch (e) {
      setIsLoading(false);
      console.log("error" + e);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  //reducer
  const initialState = [];
  const reducer = (state=initialState, action) => {
    switch (action.type) {
      case "Action1":
        return;

      default:
        return state;
    }
  }

  //search text changed
  const handleChange = (t) => {
    setSearchText(t);
  }

  //open the cart
  const handleOpenCart = () => {
    setOpenCart(true);
  }

  //close the cart
  const handleCloseCart = () => {
    setOpenCart(false);
  }

  //loading page
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  //cart page
  if (openCart) {
    return (
      <main>
        <CartPage backButton={handleCloseCart} />
      </main>
    );
  }

  //main page
  return (

      <main>

        <header className='border-bottom border-3 border-dark py-2'>

          <h1 className='mainHeading px-3'>Kazmi Books</h1>

          <div className='search'>
            <SearchBar onChange={handleChange}/>
          </div>

          <CartButton openTheCart={handleOpenCart}/>

        </header>

        <section className='mt-2'>

          <nav className='bg-secondary text-light p-3'>
            <h2 className='heading text-light text-center pb-1 border-bottom'>Categories</h2>
            <Categories books={books} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          </nav>

          <article className='p-3'>
            <Items books={books} selectedCategory={selectedCategory} searchText={searchText}/>
          </article>

        </section>

        <footer className='bg-dark text-light'>
          <h3 className='heading text-center mb-1 pt-3'>Kazmi Developers</h3>
          <ContactInfo />
        </footer>

      </main>
  );

}

export default App
