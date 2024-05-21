/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './Cadastro.css'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service';
import { useNavigate } from 'react-router-dom';

function Cadastro() {

    const navigate = useNavigate();

    const [confirmaSenha, setConfirmaSenha] = useState<string>('');

    //Estado responsavel pelos sados do usuario que ta cadastrado
    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    });

    useEffect(() => {
        if(usuario.id !== 0){
            retornar();
        }

    }, [usuario]);

    function retornar(){
        navigate('/login')
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
          ...usuario,
          [e.target.name]: e.target.value
        })
      }
        

        function handleConfirmaSenha(e: ChangeEvent<HTMLInputElement>){
            setConfirmaSenha(e.target.value)
        }

        async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){ 
            e.preventDefault();

            if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){
                try {
                    await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
                    alert('Usuário cadastrado com sucesso!')
                    
                } catch (error) {
                    alert('Erro ao cadastrar o usuario!')
                    
                }
            }else{
                alert('Dados estão inconsistentes! Verifique os dados do usuario.')
                    setUsuario({...usuario,senha: ''});
                    setConfirmaSenha('')
            }
          
        }
    


  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3' 
            onSubmit={cadastrarNovoUsuario} >
          <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              value={usuario.nome}
              className="border-2 border-slate-700 rounded p-2"
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
             
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              value={usuario.usuario}
              className="border-2 border-slate-700 rounded p-2"
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              value={usuario.foto}
              className="border-2 border-slate-700 rounded p-2"
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmaSenha(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2' 
            onClick={retornar}
            >
              Cancelar
            </button>
            <button className='rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2' type='submit'>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}


export default Cadastro