import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function Navbar() {

  const navigate = useNavigate()

  const { handleLogout } = useContext(AuthContext)

  function logout(){
    handleLogout()
    alert('O usuário foi desconectado com sucesso')
    navigate('/login')
  }
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4 px-4'>
          <div className="container flex justify-between text-lg">
            <Link to="/" className='text-2xl font-bold uppercase'>Blog Pessoal</Link>
            <div className='flex gap-4'>
              <div className='hover:underline'>Postagens</div>
              <div className='hover:underline'>Temas</div>
              <div className='hover:underline'>Cadastrar tema</div>
              <div className='hover:underline'>Perfil</div>
              <Link to="" onClick={logout}><div className='hover:underline'>Sair</div></Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar 