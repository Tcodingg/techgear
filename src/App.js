import Nav from "./components/nav/Nav";
import hero from "./images/hero.svg";
import "./App.scss";
const App = () => {
   return (
      <div className="app">
         <Nav />
         <main className="hero">
            <div className="hero-container flex bd-container">
               <div className="hero-content">
                  <h1 className="title">g502 hero wireless</h1>
                  <h2 className="sub-title">
                     logitech's high performance wireless gaming mouse
                  </h2>
                  <p className="text">
                     The Razor Ouroboros is outfitted with the most advanced &
                     configurable sensor yet, the all-new 8200dpi 4G laser
                     sensor. It tracks so y, you always hist target exactly
                     where you nee to.
                  </p>
                  <h2 className="sub-title">$99.99</h2>
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
      </div>
   );
};

export default App;
