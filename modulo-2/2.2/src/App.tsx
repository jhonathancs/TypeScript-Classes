import './App.css'
import Book from './components/books'
import CardList from './components/cardList';
import Title from './components/title';

const booksList = [
  {
    title: 'the godfather',
    pages: 433,
    isRead: true,
    isFavorite: true
  },
  {
    title: 'the godfather',
    pages: 433,
    isRead: true,
    isFavorite: true
  },
  {
    title: 'the murder',
    pages: 422,
    isRead: false,
    isFavorite: false
  },
  {
    title: 'the jhoncs',
    pages: 150,
    isRead: true,
    isFavorite: true
  }
]


function App() {
  return (
   <div>
    <h1>🎯Cidades e Livros</h1>
    <Title><s>Livros emprestados</s></Title >
  <>
  {booksList.map((book) => (
    <Book livros={book}
    key={book.title}
    />
  ))}
  </>
   <CardList />
   </div>
  )
}

export default App
