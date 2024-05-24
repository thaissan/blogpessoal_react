import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function Navbar() {

  const navigate = useNavigate()

  const { handleLogout } = useContext(AuthContext)

  function logout(){
    handleLogout()
    alert('O usuário foi desconectado com sucesso')
    navigate('/')
  }
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4 px-4'>
          <div className="container flex justify-between text-lg">
            <Link to="/" className='text-2xl font-bold uppercase'>Blog Pessoal</Link>
            <div className='flex gap-4'>
              Postagens
              <Link to='/temas' className='hover:underline'>Temas</Link>
              <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
              Perfil
              <Link to="" onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar 