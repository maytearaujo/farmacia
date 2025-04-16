import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>

        <div className="container flex justify-between text-lg">
          <p>Projeto FarmaGen</p>

          <div className='flex gap-4'>
            <p>Lista Categorias</p>
            <p>Cadastrar Categoria</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar 
