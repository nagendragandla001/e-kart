import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-2xl">E Kart</h1>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/about"
              className="hover:text-gray-400"
              data-testid="about"
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/cars" className="hover:text-gray-400" data-testid="cars">
              Cars
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className="hover:text-gray-400"
              data-testid="movies"
            >
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
