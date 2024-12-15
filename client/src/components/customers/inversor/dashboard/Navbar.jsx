import { Link, useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";



export default function Navbar({data}) {
  const navigate = useNavigate()


 // console.log("--->", data)

  const hideMenu = () => {
    const $menu = document.getElementById("user-menu")
    $menu.classList.remove("flex")
    $menu.classList.add("hidden")
  }

  const showHideMenu = () => {
    const $menu = document.getElementById("user-menu")
    $menu.classList.toggle("hidden")
    $menu.classList.toggle("flex")
  }

  const showHideConfirm = () => {
    const $dialog = document.getElementById("confirm")
    $dialog.classList.toggle("hidden")
    $dialog.classList.toggle("flex")
  }

  const hideConfirm = () => {
    const $menu = document.getElementById("confirm")
    $menu.classList.remove("flex")
    $menu.classList.add("hidden")
  }

  const handleClickCloseButton = () => {
    hideConfirm()
    hideMenu()
  }

  const handleLogout = () => {
    // dispatch logout
    hideMenu()
    hideConfirm()
    navigate('/')
  }

  const handlePrfilButtonClick = () => {
    handleClickCloseButton()
    navigate("/inversor/dashboard/profile")
  }

  return (
    <div className="flex items-center justify-between h-14 col-span-3 bg-darker-blue text-white rounded-2xl px-6">
      <div className="flex  gap-5">
        <Link to='#' className="flex flex-row gap-1">
          <span className="font-normal text-[15px] text-[#faf9f6]">Calendario</span>
          <img src="/assets/icons/arrow-down-white.svg" alt="caledar arrow" />
        </Link>
        <Link to='#' className="flex flex-row gap-1">
          <span className="font-normal text-[15px] text-[#faf9f6]">Ayuda</span>
          <img src="/assets/icons/help-icon.svg" alt="caledar arrow" />
        </Link>
      </div>

      <img src="/assets/search.svg" alt="search" />

      <div className="flex gap-9 relative">
        
        <div className="flex gap-2 cursor-pointer" onClick={showHideMenu}>
          <div className="rounded-full w-9 h-9">
            <img src={data.photeUrl} className="w-full h-full rounded-full" />
          </div>
          <div className="flex gap-1 font-normal text-[15px] text-[#faf9f6]">
            <span className="flex items-center">{data.firstName}</span>
            <span className="flex items-center">{data.lastName}</span>
          </div>
        </div>

        <div className="flex">
          <div className="flex text-2xl items-center cursor-pointer">
              <IoMdNotificationsOutline />
          </div>
        </div>
    
        <div
          className="hidden w-60 h-[116px] flex-col items-start justify-center -bottom-32 right-9 z-30 absolute px-6 gap-5"
          style={{ backgroundImage: "url('/assets/user-menu.svg')" }}
          id="user-menu"
        >
          <button
            onClick={handlePrfilButtonClick}
            className="flex items-center gap-2">
            <img src="/assets/icons/user-icon.svg" alt="user icon" />
            <span className="font-bold text-[16px] leading-[8.187499642372131%] text-white">
              Mi Perfil
            </span>
          </button>
          <button
            className="flex items-center gap-2"
            onClick={showHideConfirm}
          >
            <img src="/assets/icons/logout-icon.svg" alt="user icon" />
            <span
              className="font-bold text-[16px] leading-[8.187499642372131%] text-white"
            >
              Cerrar Sesión
            </span>
          </button>
        </div>

        {/*  MODAL DE CONFIRMACION  */}
        <div id='confirm' className="h-screen w-screen hidden items-center justify-center -top-3 -left-[1150px] z-50 bg-[#fafafa77] absolute">
          <div className="w-[572px] h-[177px] flex flex-col items-center justify-start bg-white shadow-md p-5 gap-5">
            <img
              src="/assets/icons/close-icon.svg"
              alt="user icon"
              className="self-end cursor-pointer"
              onClick={handleClickCloseButton}
            />
            <span className="font-normal text-[18px] text-black">
              ¿Estás seguro que deseas cerrar sesión?
            </span>
            <div className="flex flex-row gap-6">
              <button
                className="flex justify-center items-center gap-[5.267080783843994px] self-stretch grow px-[15.80124282836914px] py-[6.583850860595703px] border border-[#2980b9] rounded-md"
                onClick={handleClickCloseButton}
              >
                <span className="font-medium text-[16px] leading-[20px] text-center text-[#2980b9]">
                  Cancelar
                </span>
              </button>
              <button
                className="flex justify-center items-center gap-[5.267080783843994px] self-stretch grow px-[15.80124282836914px] py-[6.583850860595703px] bg-[#64B742] rounded-md"
                onClick={handleLogout}
              >
                <span className="font-medium text-[16px] leading-[20px] text-center text-white">
                  Cerrar sesión
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
