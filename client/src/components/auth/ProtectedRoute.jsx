import PropTypes from 'prop-types'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ allowedRoles }) => {
  const user = useSelector((state) => state.user.user);

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
