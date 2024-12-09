import { Link } from "react-router-dom";

export default function Navbar() {
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

      <div className="flex gap-9">
        <img src="/assets/user.svg" alt="usuario" />
        <img src="/assets/icons/bell-icon.svg" alt="alerts" />
      </div>
    </div>
  )
}
