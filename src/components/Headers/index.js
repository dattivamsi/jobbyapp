import {AiOutlineHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import './index.css'

const Headers = () => (
  <div>
    <div className="mobile-container">
      <div>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
      </div>
      <ul className="icons-container">
        <Link to="/">
          <li className="home-icon">
            <AiOutlineHome />
          </li>
        </Link>
        <Link to="/jobs">
          <li className="home-icon">
            <BsBriefcaseFill />
          </li>
        </Link>
        <Link to="/login">
          <li className="home-icon">
            <FiLogOut />
          </li>
        </Link>
      </ul>
    </div>
    <div>
      <div className="desktop-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="desktop-image"
          />
        </div>
        <ul className="desktop-icons-container">
          <Link to="/">
            <li className="icon">Home</li>
          </Link>
          <Link to="/jobs">
            <li className="icon">Jobs</li>
          </Link>
        </ul>
        <div>
          <Link to="/login">
            <button type="button" className="logoutButton">
              LogOut
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Headers
