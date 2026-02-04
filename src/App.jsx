import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav"
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';
import MyFooter from "./components/MyFooter"

//BooksData
import fantasy from './books/fantasy.json'

function App() {

  return (
    <>
      {/* navbar */}
      <MyNav brand="EpiBook!" />

      {/* main */}
      <Welcome />

      <BookList books={fantasy} />
      {/* <AllTheBooks /> */}

      {/* footer */}
      <MyFooter />
    </>
  )
}

export default App

