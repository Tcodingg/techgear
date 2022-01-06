import { servicesData } from "./servicesData";
import "./Services.scss";
const Services = () => {
   return (
      <div className="service-container">
         {servicesData.map((items) => {
            return (
               <div className="service-wrapper">
                  <img src={items.img} alt="" />
                  <div>
                     <h2 className="sub-title">{items.title}</h2>
                     <p className="text">{items.description}</p>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Services;
