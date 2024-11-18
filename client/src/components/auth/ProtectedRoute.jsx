import { Navigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  return allowedRoles.includes(user.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" />
  );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string)
}
