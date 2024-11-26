import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";



export default function Navbar() {
  return (
    <div className="">
      <Link to='/'><IoChevronBackSharp /><h1>Brand & Logo</h1></Link>
    </div>
  )
}
