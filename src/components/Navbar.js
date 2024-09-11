//Navbar component
function Navbar(){
    return(
      <div className="navbar" >
  <div className="navbar__s1"><h1 className="navbar__s1__title">Udemy</h1>
  
  </div>
  <div className="navbar__s2">
      <i className="fa-solid fa-magnifying-glass" style={{color: "#010813;"}}></i>
      <input placeholder="Search for anything here.Tech,Business,Art...."></input>
  
  </div>
     <div className="navbar__s3">
      <p>Courses</p>
      <div className="mylearning">
          <p>My Learning</p>
          <div className="mylearning__popup">
              <p>You did not purchase anything yet</p>
          </div>
      </div>
      <i class="fa-solid fa-cart-shopping" style={{color:" #00040a;"}}></i>
    <i class="fa-solid fa-bell" style={{color: "#000a04;"}}></i>
    <i class="fa-solid fa-user" style={{color: "#00040a;"}}></i>
   </div>
   <div className="navbar__s4">
    <i className="fa-sharp fa-solid fa-bars" style={{color: "#010a18;"}}></i>
   </div>
</div>
  )
}
export default Navbar