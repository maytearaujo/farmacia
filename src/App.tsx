import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar '
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <div className="w-full">

        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
