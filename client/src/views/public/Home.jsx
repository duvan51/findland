import Header from "../../components/ui/Header";
import FlipCard from "../../components/FlipCard/FlipCard";
import Carousel from "../../components/carrouselNoticias/Carousel";
import Acordion from "../../components/acordeonPreguntas/acordPre.jsx";

import { GrScorecard } from "react-icons/gr";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { GiSecurityGate } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";

import { GiCash } from "react-icons/gi";
import { LuCalendarClock } from "react-icons/lu";


import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="w-screen h-screen bg-background text-foreground">
        {/** 1 section */}
        <div className="w-full flex py-28 px-10">
          {/** izquierda  */}
          <div className="w-3/5 w-full flex  justify-center">
            <div className="flex flex-col gap-14">
              <div className="flex flex-col gap-6 ">
                <div className="text-5xl">
                  <div>Invierte inteligentemente</div>
                  <div>Maximiza tus rendimientos</div>
                </div>
                <div>
                  <div>Texto sobre invertir en inmuebles en America Latina</div>
                </div>
                <div className="border-b-4 w-40 border-black"></div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex justify-between">
                  <div className="">
                    <div className="text-7xl font-semibold">305M</div>
                    <div className="flex justify-center">
                      Monto total invertido
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-7xl font-semibold flex justify-center">
                      14%
                    </div>
                    <div className="flex justify-center">
                      Porcentaje de promedio de ROI
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col">
                    <div className="text-7xl font-semibold flex justify-center">
                      20.000
                    </div>
                    <div className="flex justify-center">
                      Prestarios conectados con inversores
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/**  derecha calculadora */}
          <div className="w-2/5 flex justify-center ">
            {/**calculadora de simulacion */}
            <div className="border bg-gray-200 border-solid  w-96 rounded-md p-6">
              <div className="text-lg">Calcula tu rendimiento estimado</div>

              <div className="py-6 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="text-lg font-bold">
                    Monto de inversion inicial
                  </div>
                  <div className="text-xs">
                    ingresa el monto que querrias invertir y en que moneda
                  </div>
                  <div className="flex justify-center gap-2">
                    <input className="w-3/4 h-8" />
                    <input className="w-1/4" />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="text-lg font-bold">
                    Monto de inversion inicial
                  </div>
                  <div className="text-xs">
                    ingresa el monto que querrias invertir y en que moneda
                  </div>
                  <div className="flex justify-center gap-2">
                    <input className="w-3/4 h-8" />
                    <input className="w-1/4" />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="text-lg font-bold">
                    Monto de inversion inicial
                  </div>
                  <div className="text-xs">
                    ingresa el monto que querrias invertir y en que moneda
                  </div>
                  <div className="flex justify-center gap-2">
                    <input className="w-3/4 h-8" />
                    <input className="w-1/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** 2 section */}
        <div className="w-full flex flex-col pb-28 px-10 gap-10">
          <div className="flex w-full justify-center text-4xl">Beneficios</div>
          <div className="w-full flex flex-col gap-10">
            <div className="flex justify-evenly">
              <FlipCard
                title={"score crediticio"}
                description={
                  "Seguridad garantizada de estabilidad financiera de prestarios"
                }
                icono={<GrScorecard />}
              />
              <FlipCard
                title={"soporte 24/7"}
                description={
                  "Atencion en linea para resolver cualquier consulta o inquietud"
                }
                icono={<MdOutlinePhoneCallback />}
              />
            </div>
            <div className="flex flex justify-evenly">
              <FlipCard
                title={"Transparencia"}
                description={
                  "Docuemntacion verificada de cada prestario y garante. Descarga de documentacion de analisis y reportes"
                }
                icono={<GiSecurityGate />}
              />
              <FlipCard
                title={"seguridad"}
                description={
                  "Atencion en linea para resolver cualquier consulta o inquietud"
                }
                icono={<MdOutlineSecurity />}
              />
              <FlipCard
                title={"soporte 24/7"}
                description={
                  "Atencion en linea para resolver cualquier consulta o inquietud"
                }
                icono={<MdOutlinePhoneCallback />}
              />
            </div>
          </div>
        </div>

        {/** 3 section */}
        <div className="w-full flex flex-col pb-28 px-10 gap-10 ">
          <div className="flex h-[28rem]">
            <div className="w-1/2 flex justify-center items-center">
              <div className="gap-6 flex flex-col items-center text-7xl">
                <GiCash />
                <div className="font-semibold text-center text-4xl w-96 flex justify-center">
                  Montos 3x mayores otorgados por los bancos
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-center bg-slate-100">
              <div className="gap-6 flex flex-col items-center text-7xl">
                <LuCalendarClock />
                <div className="font-semibold text-center text-4xl w-96 flex justify-center">
                  Devolucion del prestamo a 180 meses
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** 4 section  */}
        <div className="w-full  flex flex-col pb-28  gap-10 ">
          <Carousel />
        </div>

        {/** 5 section  */}
        <div className="w-full  flex flex-col pb-28 px-10 gap-20 ">
          <div className="flex w-full justify-center text-4xl">
            Operamos en toda America Latina
          </div>
          <div className="w-full flex flex-col gap-10 items-center">
            <div className="flex text-2xl w-2/3 flex-col gap-20 ">
              <div className="flex w-full justify-around">
                <div className="flex flex-col gap-1">
                  <div className="w-12">Argentina</div>
                  <div className="border w-8 border-gray-400"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Chile</div>
                  <div className="border w-8 border-gray-400"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Uruguay</div>
                  <div className="border w-8 border-gray-400"></div>
                </div>
              </div>

              <div className="flex w-full justify-around">
                <div className="flex flex-col gap-1">
                  <div className="w-12">Bolivia</div>
                  <div className="border w-8 border-gray-400"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Ecuador</div>
                  <div className="border w-8 border-gray-400"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Panama</div>
                  <div className="border w-8 border-gray-400"></div>
                </div>
              </div>

              <div className="flex w-full justify-around">
                <div className="flex flex-col gap-1">
                  <div className="w-12">Brazil</div>
                  <div className="border w-8 border-gray-400"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Mexico</div>
                  <div className="border w-8 border-gray-400"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Paraguay</div>
                  <div className="border w-8 border-gray-400"></div>
                </div>
              </div>

              <div className="flex w-full justify-around">
                <div className="flex flex-col gap-1">
                  <div className="w-12">Colombia</div>
                  <div className="border w-8 border-gray-400"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Peru</div>
                  <div className="border w-8 border-gray-400"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Guatemala</div>
                  <div className="border w-8 border-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** 6 section  */}
        <div className="w-full  flex flex-col pb-28 px-10 gap-20 ">
          <div className="flex w-full justify-center text-4xl">
            Operamos en toda America Latina
          </div>
          <div className="w-full flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-20 w-full">
              <Acordion />
            </div>
          </div>
        </div>

        {/** 7 section  */}
        <div className="w-full  flex flex-col pb-28 px-10 gap-20 ">
          <div className="flex w-full justify-center text-4xl">Contacto</div>

          <div className="w-full flex flex-col gap-10 items-center">
            <div className="flex w-full justify-center text-xl">
              Si quieres ponerte en contacto con nosotros, escribenos al
              email...
            </div>
            <div className="flex gap-20 w-full justify-center">
              
              <form  className="flex flex-col gap-4 w-[48rem]">
                
                <div className="py-4 flex flex-col gap-3">
                  
                  <div className="flex gap-4 w-full justify-center ">

                    <div className="flex flex-col ">
                      <label htmlFor="email">Email</label>
                      <input
                      className="w-100 p-2 b-1 border"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      />
                    </div>
                  

                    <div className="flex flex-col  ">
                      <label htmlFor="email">Email</label>
                      <input
                      className="w-100 p-2 b-1 border"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 w-full justify-center">

                    <div className="flex flex-col">
                      <label htmlFor="email">Email</label>
                      <input
                      className="w-100 p-2 b-1 border"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      />
                    </div>
                  

                    <div className="flex flex-col  ">
                      <label htmlFor="email">Email</label>
                      <input
                      className="w-100 p-2 b-1 border"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      />
                    </div>

                  </div>

                  <div className="flex gap-4 w-full justify-center">

                    <div className="flex flex-col w-full">
                      <label htmlFor="email">Email</label>
                      <input
                      className="w-100 p-2 b-1 border"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      />
                    </div>
                    
                  </div>
                  <div className="flex gap-4 w-full justify-center">

                    <div className="flex flex-col w-full">
                      <label htmlFor="email">Email</label>
                      <textarea
                      className="w-100 p-2 b-1 border"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      />
                    </div>
                    
                  </div>

                 
                  

                 
                </div>



                <div className="flex justify-center">
                  <button
                    
                    type="submit"
                    className="w-40 bg-gray-100 h-10 "
                  >
                    Enviar Consulta
                  </button>
                </div>
              </form>

            </div>

          </div>
        </div>




        {/** 8 section  */}
        <div className="w-full  flex flex-col pb-28 px-10 gap-20 ">
          <div className="w-full text-lg">
            <div className="flex w-full text-3xl font-bold">Informacion de contacto</div>
            <div>+57 3120 000 000</div>
            <div>ejemplo@gmail.com</div>
            <div className="flex text-4xl gap-2 ">
              <FaLinkedin />
              <FaFacebookSquare />
            </div>
          </div>
          
        </div>




      </div>
    </div>
  );
}
