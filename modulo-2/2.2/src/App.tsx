import './App.css'
import Book from './components/books'
import CardList from './components/cardList';

const book1 = {
  title: 'the godfather',
  pages: 433,
  isRead: true,
  isFavorite: true
};
const book2 = {
  title: 'the murder',
  pages: 422,
  isRead: false,
  isFavorite: false
};
const book3 = {
  title: 'the jhoncs',
  pages: 150,
  isRead: true,
  isFavorite: true
}

function App() {
  return (
   <div>
    <h1>🎯Cidades e Livros</h1>
    <Book 
      livros={book1}
    />
    <Book 
      livros={book2}
    />
    <Book 
      livros={book3}
    />
   <CardList />
   </div>
  )
}

export default App
