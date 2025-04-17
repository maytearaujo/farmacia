import { data } from "react-router-dom"

const Footer = () => {
    const data = new Date().getFullYear()
    return (

        <footer>

            <div className="flex justify-center bg-orange-500 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Projeto FarmaGen - {data}
                    </p>
                    <p className='text-lg'>Feito com Amor e Carinho, SQNs</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
