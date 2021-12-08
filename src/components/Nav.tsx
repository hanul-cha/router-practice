import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <h2>Nav</h2>
      <ul className="navList">
        {/* ul.navList>*2 */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
