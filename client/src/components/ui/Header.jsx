export default function Header() {
  return (
    <div className="w-full bg-background text-foreground text-lg">
      <div className="flex w-full  px-10 border-b-2 border-black py-4">

        <div className="w-1/5 flex">
           <div className="flex w-full  items-center gap-4" >
                <div className="rounded-full bg-black w-16 h-16">
                    <img src="" />
                </div>
                <div>
                    <div>Financial.land</div>
                </div>
           </div>
        </div>


        <div className="w-3/5 flex">
            <div className="flex w-full  items-center justify-evenly">
                <div>Beneficios</div>
                <div>Noticias</div>
                <div>Preguntas frecuentes</div>
                <div>Contacto</div>
            </div>
        </div>


        <div className="w-1/5 flex">
            <div 
                className="
                    flex w-full  
                    items-center 
                    justify-evenly 
                    "
            >   
                <div className="border-solid border-l-gray-300 border-l-2 h-12"></div>
                <div>
                    <div>Iniciar sesion</div>
                </div>
                <div>
                    <div className="bg-gray-200 px-3 py-2">REGISTRARME</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
