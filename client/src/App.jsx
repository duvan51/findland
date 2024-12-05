
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// home page & publics pages
import Home from "./views/public/Home"
import Auth from "./views/public/Auth"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"

// customers pages and components
import Inversor from "./views/customers/Inversor"
import InversorDashboard from "./components/customers/InversorDashboard"
import Beneficiary from "./views/customers/Beneficiary"
import BeneficiaryDashboard from "./components/customers/BeneficiaryDashboard"
import Plotowner from "./views/customers/Plotowner"
import PlotOwnerDashboard from "./components/customers/PlotOwnerDashboard"

// plattform pages and components
import Owner from "./views/plattform/Owner"
import OwnerDashboard from "./components/plattform/OwnerDashboard"
import Sealer from "./views/plattform/Sealer"
import SealerDashboard from "./components/plattform/SealerDashboard"
import ProtectedRoute from "./components/auth/ProtectedRoute"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>Error - page not found</h1>
  },
  {
    path: '/unauthorized',
    element: <h1 className="text-red-700 text-3xl">unauthorized</h1>
  },
  {
    element: <Auth />,
    children: [
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
  {
    path: '/inversor',
    element: (
      <ProtectedRoute allowedRoles={['INVERSOR']}>
        <Inversor />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/inversor/dashboard',
        element: <InversorDashboard />
      }
    ]
  },
  {
    path: '/beneficiary',
    element: (
      <ProtectedRoute allowedRoles={['BENEFICIARY']}>
        <Beneficiary />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/beneficiary/dashboard',
        element: <BeneficiaryDashboard />
      }
    ]
  },
  {
    path: '/plotowner',
    element: (
      <ProtectedRoute allowedRoles={['PLOTOWNER']}>
        <Plotowner />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/plotowner/dashboard',
        element: <PlotOwnerDashboard />
      }
    ]
  },
  {
    path: '/owner',
    element: (
      <ProtectedRoute allowedRoles={['OWNER']}>
        <Owner />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/owner/dashboard',
        element: <OwnerDashboard />
      }
    ]
  },
  {
    path: '/sealer',
    element: (
      <ProtectedRoute allowedRoles={['SEALER']}>
        <Sealer />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/sealer/dashboard',
        element: <SealerDashboard />
      }
    ]
  }
])

const App = () => <RouterProvider router={router} />
export default App
