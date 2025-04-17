import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='w-full bg-orange-500 text-white
                flex justify-center py-4'>

        <div className="container flex justify-between text-lg">
          <Link to='/home' className='hover:underline'>Projeto FarmaGen</Link>
          
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
