
import sale from "../assets/images/sale image.jpg"
function Saleimage(){

    return(
      <div className="sale-image">
      <img src={sale} alt="sale-image"></img>
      <div className="sale-image__offer">
          <h2>Udemy Flash Sale! 24hrs to save.</h2>
          <p>Get the top courses for just 499.Just one day to save but a lifetime to learn</p>
  
      </div>
  
  </div>
    )
  }
  export default Saleimage