import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-purple-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col items-center gap-4 justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
            <div className="flex justify-around gap-4 rounded bg-white text-blue-800 py-2 px-4">
            <ModalPostagem />
            </div>
          </div>
          <div className="max-w-7xl flex flex-col items-center">
            <img
              src="https://imgur.com/gFGoIqo.png"
              alt="Imagem da pagina Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}
export default Home;
