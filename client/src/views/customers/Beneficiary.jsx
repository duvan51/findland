import { Outlet } from "react-router-dom";

export default function Beneficiary () {
  return (
    <div className="w-screen h-screen bg-background text-foreground">
      <Outlet />
    </div>
  )
}
