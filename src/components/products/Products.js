import "./Products.scss";
import { productsData } from "./productsData";
const Products = () => {
   return (
      <div className="items-container">
         {productsData.map((item, i) => {
            return (
               <div key={i} className="items-wrapper">
                  <img src={item.img} alt="" />
                  <img src={item.shadow} alt="" />
                  <p className="sub-title">{item.title}</p>
               </div>
            );
         })}
      </div>
   );
};

export default Products;
