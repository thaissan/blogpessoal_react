
function Home() {
  return (
    <>
      <div className="bg-indigo-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col items-center gap-4 justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
            <div className="flex justify-around gap-4">
              <div
                className="rounded text-white border-white
                            border-solid border-2 py-2 px-4"
              >
                Nova Postagem
              </div>
            </div>
          </div>
          <div className="max-w-7xl flex flex-col items-center">
            <img
              src="https://imgur.com/VpwApCU.png"
              alt="Imagem da pagina Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;