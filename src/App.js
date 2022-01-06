import Nav from "./components/nav/Nav";
import hero from "./images/hero.svg";
import "./App.scss";
const App = () => {
   return (
      <div className="app">
         <Nav />
         <main className="hero section">
            <div className="hero-container flex bd-container">
               <div className="hero-content">
                  <h1 className="title hero-header">g502 hero wireless</h1>
                  <h2 className="sub-title">
                     logitech's high performance wireless gaming mouse
                  </h2>
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
            <div className="products-container bd-container">
               <h1 className="title">products</h1>
               <h2 className="sub-title">
                  Which type of gear are you looking for?
               </h2>
               <div className="items-container">
                  <div className="items-wrapper">
                     <img src="" alt="" />
                     <p className="sub-title">subtitle</p>
                  </div>
               </div>
            </div>
         </section>

         {/* =======SERVICES ============== */}
      </div>
   );
};

export default App;
