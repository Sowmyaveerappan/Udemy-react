//recommended component
import saleone from "../assets/images/sale-img1.jpeg"
import saletwo from "../assets/images/sale-img2.jpeg"
import salethree from "../assets/images/sale-img3.jpeg"
import salefour from "../assets/images/sale-img4.jpeg"





function Recommended(){
    return(
      <div className="reccommended">
      <h1 className="recommended__title">Recommended for you</h1>
      <p>Pick the best fit</p>
      <div className="recommended__container">
          <div className="course-card">
              <img src={saleone} alt="course-img"></img>
              <h3>2023 Python Data Visualization Masterclass</h3>
              <p>Col Steele</p>
              <p>4.9⭐⭐⭐⭐⭐</p>
              <p>449<del>1999</del></p>
          </div>
          <div className="course-card">
          <img src={saletwo} alt="course-img"></img>
          <h3>Web Development Bootcamp 2023</h3>"
          <p>Col Steele</p>
          <p>4.2⭐⭐⭐⭐</p>
          <p>449<del>1599</del></p>
          </div>
          <div className="course-card">
        <img src={salethree} alt="course-img"></img>
        <h3>Master UI/UX Designing with Figma</h3>
        <p>Col Steele</p>
        <p>3.9⭐⭐⭐</p>
        <p>449<del>1799</del></p>
        </div>
        <div className="course-card">
        <img src={salefour} alt="course-img"></img>
        <h3>Basic to Advance Programming with EMC</h3>
        <p>Col Steele</p>
        <p>4.4⭐⭐⭐⭐</p>
        <p>449<del>2599</del></p>
        </div>
        </div>
        </div>
        
  )
}
export default Recommended