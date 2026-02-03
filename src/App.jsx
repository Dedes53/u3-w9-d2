import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav"
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from "./components/MyFooter"

function App() {

  return (
    <>
      {/* navbar */}
      <MyNav brand="EpiBook!" />

      {/* main */}
      <Welcome />
      <AllTheBooks />

      {/* footer */}
      <MyFooter />
    </>
  )
}

export default App
