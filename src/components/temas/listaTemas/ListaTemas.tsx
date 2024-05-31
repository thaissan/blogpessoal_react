/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { buscar } from "../../../services/Service";
import CardTemas from "../cardTemas/CardTemas";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function ListaTemas() {

    const navigate = useNavigate()

    const [temas, setTemas] = useState<Tema[]>([])
    

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarTemas() {
        try {
            await buscar(`/temas`, setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarTemas()
    }, [temas.length])

    return (
        <>

            {temas.length === 0 && (
                <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper mx-auto"
                colors={['#f20089', '#e500a4', '#db00b6', '#d100d1', '#bc00dd']}
                />
            )}
            
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                        <>
                            {temas.map((tema) => (
                                <>
                                    <CardTemas key={tema.id} tema={tema} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaTemas;