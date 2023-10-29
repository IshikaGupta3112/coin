import logo from "../../public/koinx.svg";
import "./navbar.css";
import menu from "../assets/menu.svg";

function Navbar() {
  return (
    <>
      <nav>
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <ul>
            <li>Features</li>
            <li>Exchanges</li>
            <li>How it Works?</li>
            <li>Blog</li>
            <li>About us</li>
            <li>
              <button id="signinBtn">Sign In</button>
            </li>
          </ul>
        </div>
        <img src={menu} id="menuImg"></img>
      </nav>
    </>
  );
}

export default Navbar;
