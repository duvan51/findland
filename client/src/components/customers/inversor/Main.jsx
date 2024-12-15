import { Outlet } from "react-router-dom";
import Logo from "./dashboard/Logo";
import Navbar from "./dashboard/Navbar";
import Sidebar from "./dashboard/Sidebar";
import { useEffect, useState } from "react";
import {  useSelector} from "react-redux";

import { getUserById } from "../../../services/user.js";

export default function Main() {

  const [userData, setUserdata] = useState('')
  const user = useSelector((state) => state.user);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = user.id;
        if (userId) {
          const response = await getUserById(userId); 
          setUserdata(response)
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData();
  }, [user]); // Se ejecuta cada vez que `user` cambie




  return (
    <div className="grid grid-cols-4 gap-x-2 mx-2 bg-[#fafafa]">
      <Logo />
      <Navbar data={userData} />
      <Sidebar />
      <div className="col-span-3">
        <Outlet  />
      </div>
    </div>
  )
}
