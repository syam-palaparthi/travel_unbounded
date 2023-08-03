import {Component} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

class Home extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div className="main-container">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h1>
                <img
                  src="https://res.cloudinary.com/dxsymsdqs/image/upload/v1691058189/kenya_qyp7fo.jpg"
                  alt="logo"
                  className="slider-images"
                />
              </h1>
            </div>
            <div>
              <h3>
                <img
                  src="https://res.cloudinary.com/dxsymsdqs/image/upload/v1691057660/triger_jt8xub.jpg"
                  alt="logo"
                  className="slider-images"
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  src="https://res.cloudinary.com/dxsymsdqs/image/upload/v1691059464/lion_a8bvuh.jpg"
                  alt="logo"
                  className="slider-images"
                />
              </h3>
            </div>
            <div>
              <h3>
                <img
                  src="https://res.cloudinary.com/dxsymsdqs/image/upload/v1691059522/ssss_ddf7pp.jpg"
                  alt="logo"
                  className="slider-images"
                />
              </h3>
            </div>
          </Slider>
        </div>
        <h1 className="heading">
          Big Cats Week at Maasai Mara - Diwali 2023 special
        </h1>
        <button type="button" className="button">
          <Link to="/schedul">Get Start</Link>
        </button>
      </div>
    )
  }
}
export default Home
