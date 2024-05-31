/* eslint-disable prefer-const */

import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  let data = new Date().getFullYear()

  const { usuario } = useContext(AuthContext)

  let component: ReactNode;

  if(usuario.token !== ""){
    component = (
      <div className="flex justify-center bg-purple-800 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal - Thaís Santos | Copyright: {data}</p>
            <p className='text-lg'>Acesse minhas redes sociais</p>
            <a href="https://storyset.com/internet">Internet illustrations by Storyset</a>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48}  />
              <GithubLogo size={48} weight='bold'/>           
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

export default Footer