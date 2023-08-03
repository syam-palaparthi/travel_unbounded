import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="bg-container">
        <img
          src="https://res.cloudinary.com/dxsymsdqs/image/upload/v1691047881/travel_yprspy.jpg"
          alt="logo"
          className="image"
        />
        <ul className="un-container">
          <li>
            <Link to="/" className="list-items">
              Home
            </Link>
          </li>
          <li>
            <Link to="/schedul" className="list-items">
              Scheduls
            </Link>
          </li>
          <li>
            <Link to="/contact" className="list-items">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default Header
