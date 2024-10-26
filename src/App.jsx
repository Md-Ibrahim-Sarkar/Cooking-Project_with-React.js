import { Outlet } from "react-router-dom"
import Header from "./assets/Components/Home/Header/Header"
import Footer from "./assets/Components/Footer/Footer"





function App() {
  return (
    <div>
      <Header ></Header>
      <Outlet></Outlet>
      <div className="container mx-auto">
        <Footer ></Footer>
      </div>

    </div>
  )
}

export default App