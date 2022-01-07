import Nav from "./components/nav/Nav";
import hero from "./images/hero.svg";
import "./App.scss";
import Products from "./components/products/Products";
import Services from "./components/services/Services";
import Slides from "./components/slides/Slides";
import Form from "./components/Form/Form";
import logo from "./images/logo.svg";
const App = () => {
   return (
      <div className="app">
         <Nav />
         <main className="hero section">
            <div className="hero-container flex bd-container">
               <div className="hero-content">
                  <h1 className="title hero-header">g502 hero wireless</h1>
                  <p className="text">
                     The Razor Ouroboros is outfitted with the most advanced &
                     configurable sensor yet, the all-new 8200dpi 4G laser
                     sensor. It tracks so precisely, you always hit targets
                     exactly where you need to.
                  </p>
                  <h2 className="sub-title price">$99.99</h2>
                  <div className="btn-container">
                     <button>Get it early</button>
                     <button>more details</button>
                  </div>
               </div>
               <figure>
                  <img src={hero} alt="" />
               </figure>
            </div>
         </main>
         {/* =======PRODUCTS ============== */}
         <section className="products section">
            <div className="products-container content bd-container">
               <div className="content-header-wrapper">
                  <h1 className="title content-title ">products</h1>
                  <h2 className="sub-title content-sub-title">
                     Which type of gear are you looking for?
                  </h2>
               </div>
               <Products />
            </div>
         </section>
         {/* =======SERVICES ============== */}
         <section className="services section">
            <div className="services-container content bd-container">
               <div className="content-header-wrapper">
                  <h1 className="title content-title ">services</h1>
                  <h2 className="sub-title content-sub-title">
                     We provide more than high-tech products!
                  </h2>
               </div>
               <Services />
            </div>
         </section>
         {/* =======MEMBERS ============== */}
         <section className="members section">
            <div className="members-container content bd-container">
               <div className="content-header-wrapper">
                  <h1 className="title content-title">members</h1>
                  <h2 className="sub-title content-sub-title">
                     Some of our latest members that enjoy our services
                  </h2>
               </div>
               <div className="slides">
                  <Slides />
               </div>
            </div>
         </section>
         {/* =======CONTACT ============== */}
         <section className="contact section">
            <div className="contact-container content bd-container">
               <div className="content-header-wrapper">
                  <h1 className="title content-title">contract</h1>
                  <h2 className="sub-title content-sub-title">
                     Request for early access to our products
                  </h2>
               </div>
               <div className="contact-wrapper">
                  <Form />
               </div>
            </div>
         </section>
         <footer className="footer section">
            <div className="footer-container bd-container">
               <div className="footer-top flex">
                  <div className="socials">
                     <img src={logo} alt="" />
                     <ul></ul>
                  </div>
                  <div className="footer-products">
                     <small>products</small>
                     <ul>
                        <li>gaming</li>
                        <li>graphic designs</li>
                        <li>Office</li>
                        <li>family</li>
                        <li>personalized</li>
                     </ul>
                  </div>
                  <div className="footer-products">
                     <small>help</small>
                     <ul>
                        <li>FAQ's</li>
                        <li>Terms of Use</li>
                        <li>Privacy policy</li>
                        <li>personalized</li>
                     </ul>
                  </div>
               </div>
               <div className="footer-bottom">
                  <small className="text">
                     Copyright 2022 &#169; techgear Inc.
                  </small>
               </div>
            </div>
         </footer>
      </div>
   );
};

export default App;
