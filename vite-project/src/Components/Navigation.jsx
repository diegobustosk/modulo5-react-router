import { Link } from "react-router-dom"


function Navigation() {


  return (
    <>
      <header>
        <div className="header-links">
          <Link className="link" to='/'>🏠 Home</Link>
          <Link className="link" to='/contact'>📒Contact</Link>
        </div>
        <div>
          <h5>Happy Cake 🎂</h5>
        </div>
      </header>
    </>
  )
}

export default Navigation