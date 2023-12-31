const OffCanvas = () => {
  return (
	<>
		{/* <!-- offcanvas overlay start --> */}
        <div className="offcanvas-overlay"></div>
        {/* <!-- offcanvas overlay end --> */}
        {/* <!-- OffCanvas Wishlist Start --> */}
        <div id="offcanvas-wishlist" className="offcanvas offcanvas-wishlist">
            <div className="inner">
                <div className="head">
                    <span className="title">Wishlist</span>
                    <button className="offcanvas-close">×</button>
                </div>
                <div className="body customScroll">
                    <ul className="minicart-product-list">
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/1.webp"
                                    alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Modern Smart Phone</a>
                                <span className="quantity-price">1 x <span className="amount">$21.86</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/2.webp"
                                    alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Bluetooth Headphone</a>
                                <span className="quantity-price">1 x <span className="amount">$13.28</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/3.webp"
                                    alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Smart Music Box</a>
                                <span className="quantity-price">1 x <span className="amount">$17.34</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="foot">
                    <div className="buttons">
                        <a href="wishlist.html" className="btn btn-dark btn-hover-primary mt-30px">view wishlist</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- OffCanvas Wishlist End --> */}
        {/* <!-- OffCanvas Cart Start --> */}
        <div id="offcanvas-cart" className="offcanvas offcanvas-cart">
            <div className="inner">
                <div className="head">
                    <span className="title">Cart</span>
                    <button className="offcanvas-close">×</button>
                </div>
                <div className="body customScroll">
                    <ul className="minicart-product-list">
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/1.webp"
                                    alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Modern Smart Phone</a>
                                <span className="quantity-price">1 x <span className="amount">$18.86</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/2.webp"
                                    alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Bluetooth Headphone</a>
                                <span className="quantity-price">1 x <span className="amount">$43.28</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/3.webp"
                                    alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Smart Music Box</a>
                                <span className="quantity-price">1 x <span className="amount">$37.34</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="foot">
                    <div className="buttons mt-30px">
                        <a href="cart.html" className="btn btn-dark btn-hover-primary mb-30px">view cart</a>
                        <a href="checkout.html" className="btn btn-outline-dark current-btn">checkout</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- OffCanvas Cart End --> */}
        {/* <!-- OffCanvas Menu Start --> */}
        <div id="offcanvas-mobile-menu" className="offcanvas offcanvas-mobile-menu">
            <button className="offcanvas-close"></button>
            <div className="user-panel">
                <ul>
                    <li><a href="tel:0123456789"><i className="fa fa-phone"></i> +012 3456 789</a></li>
                    <li><a href="mailto:demo@example.com"><i className="fa fa-envelope-o"></i> demo@example.com</a></li>
                    <li><a href="my-account.html"><i className="fa fa-user"></i> Account</a></li>
                </ul>
            </div>
            <div className="inner customScroll">
                <div className="offcanvas-menu mb-4">
                    <ul>
                        <li><a href="#"><span className="menu-text">Home</span></a>
                            <ul className="sub-menu">
                                <li><a href="index.html"><span className="menu-text">Home 1</span></a></li>
                                <li><a href="index-2.html"><span className="menu-text">Home 2</span></a></li>
                            </ul>
                        </li>
                        <li><a href="about.html">About</a></li>
                        <li>
                            <a href="#"><span className="menu-text">Pages</span></a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#"><span className="menu-text">Inner Pages</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="404.html">404 Page</a></li>
                                        <li><a href="order-tracking.html">Order Tracking</a></li>
                                        <li><a href="faq.html">Faq Page</a></li>
                                        <li><a href="coming-soon.html">Coming Soon Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text"> Other Shop Pages</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="cart.html">Cart Page</a></li>
                                        <li><a href="checkout.html">Checkout Page</a></li>
                                        <li><a href="compare.html">Compare Page</a></li>
                                        <li><a href="wishlist.html">Wishlist Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text">Related Shop Page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="my-account.html">Account Page</a></li>
                                        <li><a href="login.html">Login & Register Page</a></li>
                                        <li><a href="empty-cart.html">Empty Cart Page</a></li>
                                        <li><a href="thank-you-page.html">Thank You Page</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#"><span className="menu-text">Shop</span></a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#"><span className="menu-text">Shop Page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="shop-3-column.html">Shop 3 Column</a></li>
                                        <li><a href="shop-4-column.html">Shop 4 Column</a></li>
                                        <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                        <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                        <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a>
                                        </li>
                                        <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a>
                                        </li>
                                        <li><a href="cart.html">Cart Page</a></li>
                                        <li><a href="checkout.html">Checkout Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text">product Details Page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="single-product.html">Product Single</a></li>
                                        <li><a href="single-product-variable.html">Product Variable</a></li>
                                        <li><a href="single-product-affiliate.html">Product Affiliate</a></li>
                                        <li><a href="single-product-group.html">Product Group</a></li>
                                        <li><a href="single-product-tabstyle-2.html">Product Tab 2</a></li>
                                        <li><a href="single-product-tabstyle-3.html">Product Tab 3</a></li>
                                        <li><a href="single-product-slider.html">Product Slider</a></li>
                                        <li><a href="single-product-gallery-left.html">Product Gallery Left</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text">Single Product Page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="single-product-gallery-right.html">Product Gallery
                                                Right</a> </li>
                                        <li><a href="single-product-sticky-left.html">Product Sticky Left</a>
                                        </li>
                                        <li><a href="single-product-sticky-right.html">Product Sticky Right</a>
                                        </li>
                                        <li><a href="compare.html">Compare Page</a></li>
                                        <li><a href="wishlist.html">Wishlist Page</a></li>
                                        <li><a href="my-account.html">Account Page</a></li>
                                        <li><a href="login.html">Login & Register Page</a></li>
                                        <li><a href="empty-cart.html">Empty Cart Page</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#"><span className="menu-text">Blog</span></a>
                            <ul className="sub-menu">
                                <li><a href="blog-grid.html">Blog Grid Page</a></li>
                                <li><a href="blog-grid-left-sidebar.html">Grid Left Sidebar</a></li>
                                <li><a href="blog-grid-right-sidebar.html">Grid Right Sidebar</a></li>
                                <li><a href="blog-list.html">Blog List Page</a></li>
                                <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a></li>
                                <li><a href="blog-list-right-sidebar.html">List Right Sidebar</a></li>
                                <li><a href="blog-single.html">Blog Single Page</a></li>
                                <li><a href="blog-single-left-sidebar.html">Single Left Sidebar</a></li>
                                <li><a href="blog-single-right-sidebar.html">Single Right Sidbar</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                {/* <!-- OffCanvas Menu End --> */}
                <div className="offcanvas-social mt-auto">
                    <ul>
                        <li>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-google"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-youtube"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- OffCanvas Menu End --> */}
	</>
  )
}

export default OffCanvas
