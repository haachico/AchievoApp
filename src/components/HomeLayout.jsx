import { Outlet, NavLink } from "react-router-dom";

const HomeLayout = () => {
  const activeStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#22d3ee" : "",
    border: isActive ? "1px solid black" : "",
  });

  return (
    <div>
      <div className="nested--routes">
        <NavLink to="." style={activeStyle}>
          Tasks
        </NavLink>
        <NavLink to="graph" style={activeStyle}>
          Graph
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
