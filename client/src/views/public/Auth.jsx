import { Outlet } from "react-router-dom";

export default function Auth () {
  return (
    <div className="w-screen h-screen bg-background text-foreground">
      <Outlet />
    </div>
  )
}
