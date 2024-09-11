
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Saleimage from "./components/Saleimage"
import Recommended from './components/Recommended';
import Topics from "./components/Topics"
import Popular from"./components/Popular"
import Footer from "./components/Footer"









function App(){
  return(
<div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Saleimage></Saleimage>
    <Recommended></Recommended>
    <Topics></Topics>
    <Popular></Popular>
    <Footer></Footer>
  </div>
  )
}

export default App;
