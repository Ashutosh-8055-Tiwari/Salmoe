
import logo from "../../../public/salmoe-logo.png"
export default function Navbar() {
    return (
        <div className="salmoe-navbar">

            {/* Sliding Message */}
            <div className="salmoe-header-message">
                <div className="salmoe-sliding-container">
                    <p className="salmoe-sliding-text wallet-currency"> Get 10% OFF on your first order over ₹500 with code FIRSTJAR!</p>
                    <p className="salmoe-sliding-text wallet-currency">Free shipping on all orders above ₹999!</p>
                    <p className="salmoe-sliding-text wallet-currency">Buy 2, get 1 FREE on select products!</p>
                </div>
            </div>

            <div className="salmoe-navbar-container">
                
                <nav className="salmoe-nav-links">

                  <div className=" nav1">
                    <div className="salmoe-group">


                      <div className="salmoe-nav-item text-decoration-none">SHOP</div>
                        <div className="salmoe-dropdown">
                            <a href="#" className="salmoe-dropdown-item">Protein</a>
                            <a href="#" className="salmoe-dropdown-item">Vitamins</a>
                            <a href="#" className="salmoe-dropdown-item">Snacks</a>
                        </div>
                    </div>
                    <a href="#" className="salmoe-nav-item">Learn</a>
                    <a href="#" className="salmoe-nav-item">ABOUT US</a>

                    </div>

                    <div className="salmoe-logo">
                      <img src={logo.src} className="nav-logo-css"></img>
                      
                    </div>

                    <div className=" nav1">
                    <a href="#" className="salmoe-nav-item">SEARCH</a>
                    <a href="#" className="salmoe-nav-item">CART</a>
                    <a href="#" className="salmoe-nav-item">Login</a>
                    </div>
                </nav>

            </div>

        </div>
    );
}
