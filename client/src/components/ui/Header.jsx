import { Link } from "react-router-dom";



export default function Header() {




  return (
    <div className="w-full bg-colorSecondary text-colorPrimary text-lg">
      <div className="flex w-full  px-10 border-b-2  py-4">

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
                    <Link to={`/login`}>Iniciar sesion</Link>
                </div>
                <div>
                    <Link
                        to={`/register`}  
                        className="bg-colorFourth px-3 py-2 cursor-pointer rounded-md font-semibold"
                        >
                        REGISTRARME
                    </Link >
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

