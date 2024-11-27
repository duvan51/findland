import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-screen h-auto flex items-center justify-between">
      <Link to='/'><h1>Brand & Logo</h1></Link>
    </header>
  )
}
