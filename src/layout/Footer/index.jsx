import React from 'react'
import "./footer.scss"
function Footer() {
  return (
    <div>
      <footer id='footer'>
        <div className="container">
          <div className="container_up">
            <div className="container_up_left">
              <div className="categories">
                <h3>Categories</h3>
                <ul>
                  <li>Women</li>
                  <li>Men</li>
                  <li>Kids</li>
                  <li>Watches</li>
                </ul>
              </div>
              <div className="help">
                <h3>Help</h3>
                <ul>
                  <li>Track Order</li>
                  <li>Returns</li>
                  <li>Shipping</li>
                  <li>FAQs</li>
                </ul>
              </div>
            </div>
            <div className="container_up_right">
              <div className="getin">
                <h3>GET IN TOUCH</h3>
                <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+994) 55-249-91-32</p>
                <div className="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-pinterest-p"></i>
                </div>
              </div>
              <div className="newsletter">
                <h3>Newsletter</h3>
                <input type="text" placeholder='email@rambler.ru' />
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="container_down">
            <div className="photos">
              <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png.webp" alt="" />
            </div>
            <p>Copyright ©2023 All rights reserved | This template is made with  by <span>Maliko</span></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer