import "./index.css";
import { Component } from "react";
import Header from "../Header";
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import FiltersGroup from "../FiltersGroup";
import ProductItem from "../ProductItem";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CgPaypal } from "react-icons/cg";
import { SiPhonepe } from "react-icons/si";
import { SiPaytm } from "react-icons/si";
import { FaCcApplePay } from "react-icons/fa";
import { GrAmex } from "react-icons/gr";

class HomeRoute extends Component {
  state={showFilters:true,productList:[]}

  toggleFilters=()=>{
    this.setState((prevState)=>({showFilters:!prevState.showFilters}))
  }
  componentDidMount(){
    this.getProducts();
  }
  getProducts=async()=>{
    const url="https://fakestoreapi.com/products"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({productList:data})
  }

  render(){
    const jwtToken = Cookies.get("jwt_token");

    if (jwtToken === undefined) {
      return <Navigate to='/login' replace />;
    }
    const {showFilters,productList} = this.state;
    const filterName=showFilters?"HIDE FILTER":"SHOW FILTER";

    return(
      <div className="home-container" >
        <Header />
        <div className="tab-container">
          <ul className="tab-list" >
            <li className="tab-item" >SHOP</li>
            <li className="tab-item" >SKILLS</li>
            <li className="tab-item" >STORIES</li>
            <li className="tab-item" >ABOUT</li>
            <li className="tab-item" >CONTACT US</li>
          </ul>
        </div>
        <div className="home-content">
         <div className="home-content-container" >
         <h1 className="home-title" >DISCOVER OUR PRODUCTS</h1>
          <p className="home-description" >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quod numquam in atque unde illum mollitia pariatur harum, quos facere aliqua.
          </p>
         </div>
        </div>
        <div className="filter-container">
          
          <div className="filter-item" >
            <p className="filter-item-count" >0 ITEMS</p>
            <p className="filter-item-text" onClick={this.toggleFilters} >{filterName}</p>
          </div>
          <select className="filter-select" >
            <option value="RECOMMENDED">RECOMMENDED</option>
            <option value="POPULAR">POPULAR</option>
            <option value="NEW">NEW</option>
            <option value="LOW_TO_HIGH">LOW_TO_HIGH</option>
            <option value="HIGH_TO_LOW">HIGH_TO_LOW</option>
            <option value="TOP_RATED">TOP_RATED</option>
          </select>
        </div>
        <div className="products-container-main" >
          {showFilters && <div className="filters-group-home" ><FiltersGroup /></div>}
          <div className="products-container" >
            <ul className="products-list" >
              {productList.map((product)=>(
                <ProductItem key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
        <footer>
          <div className="footer-laptop" >
            <div className="footer-laptop-top" >
            <div className="footer-laptop-left" >
              <p className="footer-title" >BE THE FIRST TO KNOW</p>
              <p className="footer-description" >Sign up for our newsletter</p>
              <div className="footer-input-container" >
                <input className="footer-input" type="text" placeholder="Enter your email" />
                <button className="footer-button" type="submit">Subscribe</button>
              </div>
            </div>
            <div className="footer-laptop-right" >
              <p className="footer-title" >CONTACT US</p>
              <p>+91 1234567890</p>
              <p>info@productlist.com</p>
              <p>CURRENCY</p>
              <p>USD</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            </div>
          </div>
          <hr className="footer-line" />
          <div className="footer-laptop-bottom">
            <div className="footer-laptop-left-bottom" >
              <div className="footer-laptop-left-bottom-top" >
                <p>Metta mause</p>
                <p>About Us</p>
                <p>Stories</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>FAQ</p>
              </div>
              <div className="footer-laptop-left-bottom-bottom" >
                <p>QUICK LINKS</p>
                <p>Orders&Shipping</p>
                <p>Login/Signup as a seller</p>
                <p>Payment and Pricing</p>
                <p>Return Policy</p>
                <p>Shipping</p>
              </div>
            </div>
            <div className="footer-laptop-right-bottom" >
              <h3>Follow Us</h3>
              <div className="footer-laptop-right-bottom-icons" >
                <FaInstagram size={30} color='white' />
                <CiLinkedin size={30} color='white' />
              </div>
              <h3>METTA MUESE ACCEPTS</h3>
              <div className="footer-laptop-right-bottom-icons" >
                <CgPaypal size={30} color='white' />
                <SiPhonepe size={30} color='white' />
                <SiPaytm size={30} color='white' />
                <FaCcApplePay size={30} color='white' />
                <GrAmex size={30} color='white' />
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }

}

export default HomeRoute;
