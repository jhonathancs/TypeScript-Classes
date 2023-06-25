import './App.css'
import Book from './components/books'
import CardList from './components/cardList';
import Footer from './components/footer';
import Header from './components/header';
import Title from './components/title';
import booksList from './data';

function App() {
  return (
   <div>
    <Header />
    <br />
    <br />
    <h1>🎯Cidades e Livros</h1>
    <Title>
    <s>Livros emprestados</s>
    <h3>Meus Livros</h3>
    </Title >
  <>
  {booksList.map((book) => (
    <Book livros={book}
    key={book.title}
    />
  ))}
  </>
   <CardList />
   <Footer />
   </div>
  )
}

export default App
