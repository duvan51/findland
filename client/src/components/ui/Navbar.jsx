import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";



export default function Navbar() {
  return (
    <div className="px-10">
      <Link to='/' className="flex ">
        <div className="text-5xl"><IoChevronBackSharp /></div>
        <h1 className="flex items-center">Volver al inicio</h1>
      </Link>
    </div>
  )
}
