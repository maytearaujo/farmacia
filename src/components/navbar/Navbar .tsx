import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>

        <div className="container flex justify-between text-lg">
          <p>Projeto FarmaGen</p>

          <div className='flex gap-4'>
            <p></p>
            <p></p>
            <Link to='/categorias' className='hover:underline'>Lista Categorias</Link>
            <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar 
