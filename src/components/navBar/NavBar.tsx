/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Navbar() {

  const navigate = useNavigate()

  const { handleLogout, usuario } = useContext(AuthContext)

  function logout(){
    handleLogout()
    ToastAlerta('O usuário foi desconectado com sucesso', "sucesso");
    navigate('/')
  }

  let component: ReactNode;

  if(usuario.token !== "" ){

    component = (
    <div className='w-full bg-purple-900 text-white flex justify-center py-4 px-4'>
          <div className="container flex justify-between text-lg">
            <Link to="/" className='text-2xl font-bold uppercase'>Blog Pessoal</Link>
            <div className='flex gap-4'>
            <Link to='/postagens' className='hover:underline'>Postagens</Link>
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
            <Link to='/perfil' className='hover:underline'>Perfil</Link>
            <Link to="" onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
        )
  }
 
  

  return (
    <>
        { component }
    </>
  )
}

export default Navbar 