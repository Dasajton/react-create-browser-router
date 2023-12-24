import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-red-200 py-2 px-4 ">
      <NavLink to="/">
        <h1 className="text-2xl font-bold">createBrowserRouter</h1>
      </NavLink>
      <ul className="flex gap-3 rounded">
        <li>
          <NavLink
            className={
              'p-2 rounded [&.active]:text-red-900 [&.active]:bg-red-300 transition'
            }
            to="/home"
          >
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              'p-2 rounded [&.active]:text-red-900 [&.active]:bg-red-300 transition'
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
