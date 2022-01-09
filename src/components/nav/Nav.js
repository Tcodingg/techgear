import logo from "../../images/logo.svg";
import { useState } from "react";
import "./Nav.scss";

const Nav = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <header>
         <nav className=" nav bd-container">
            <div className="logo-container">
               <img className="logo" src={logo} alt="" />
            </div>
            <ul className={`menu ${isOpen ? "isOpen" : ""}`}>
               <li onClick={() => setIsOpen(false)}>
                  <a href="#home">home</a>
               </li>
               <li onClick={() => setIsOpen(false)}>
                  <a href="#products">products</a>
               </li>
               <li onClick={() => setIsOpen(false)}>
                  <a href="#services">services</a>
               </li>
               <li onClick={() => setIsOpen(false)}>
                  <a href="#contact">contact </a>
               </li>
            </ul>
            <div
               onClick={() => setIsOpen((prev) => !prev)}
               className="burger-container"
            >
               <div className={`burger-icon ${isOpen ? "isOpen" : ""}`}></div>
            </div>
         </nav>
      </header>
   );
};

export default Nav;
