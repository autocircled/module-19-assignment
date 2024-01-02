import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <div className="header-nav-area d-none d-lg-block sticky-nav">
                <div className="container">
                    <div className="header-nav">
                        <div className="main-menu position-relative">
                            <ul>
                                <li className="dropdown"><Link to="/">Home</Link></li>
                                <li className="dropdown"><Link to="/shop">Shop</Link></li>
                                <li className="dropdown "><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- header navigation area end --> */}
            <div className="mobile-search-box d-lg-none">
                <div className="container">
                    {/* <!-- mobile search start --> */}
                    <div className="search-element max-width-100">
                        <form action="#">
                            <input type="text" placeholder="Search" />
                            <button><i className="pe-7s-search"></i></button>
                        </form>
                    </div>
                    {/* <!-- mobile search start --> */}
                </div>
            </div>
        </>
    )
}

export default NavBar
