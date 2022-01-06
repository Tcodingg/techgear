import "./Products.scss";
import { productsData } from "./productsData";
const Products = () => {
   return (
      <div className="items-container">
         {productsData.map((item) => {
            return (
               <div className="items-wrapper">
                  <img src={item.img} alt="" />
                  <p className="sub-title">{item.title}</p>
               </div>
            );
         })}
      </div>
   );
};

export default Products;
