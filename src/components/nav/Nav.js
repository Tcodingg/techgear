import logo from "../../images/logo.svg";
import "./Nav.scss";

const Nav = () => {
   return (
      <header>
         <nav className=" nav bd-container">
            <div className="logo-container">
               <img className="logo" src={logo} alt="" />
            </div>
            <ul className="menu">
               <li>
                  <a href="##">home</a>
               </li>
               <li>
                  <a href="##">products</a>
               </li>
               <li>
                  <a href="##">services</a>
               </li>
               <li>
                  <a href="##">contacts </a>
               </li>
            </ul>
            <div className="burger-container">
               <div className="burger-icon"></div>
            </div>
         </nav>
      </header>
   );
};

export default Nav;
