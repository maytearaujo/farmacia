import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar '
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias'
import 'react-toastify/dist/ReactToastify.css';
import FormularioCategorias from './components/categoria/formularioCategorias/FormularioCategorias'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'

function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormularioCategorias />} />
            <Route path="/editarcategoria/:id" element={<FormularioCategorias />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
  
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
