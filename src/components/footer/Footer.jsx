import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import VenoBox from 'venobox';

const Footer = () => {
    useEffect(() => {
        const sliderBGImages = document.querySelectorAll('[data-bg-image]');
        Array.from(sliderBGImages).forEach((el) => {
            el.style.backgroundImage = `url(${el.getAttribute('data-bg-image')})`;
        })


        // venobox for product gallery image
        new VenoBox({
            selector: '.venobox'
        });
    }, [])
    return (
        <div className="footer-area">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Start single blog --> */}
                            <div className="col-md-6 col-lg-3 mb-md-30px mb-lm-30px">
                                <div className="single-wedge">
                                    <div className="footer-logo">
                                        <a href="index.html"><img src="assets/images/logo/footer-logo.png" alt="" /></a>
                                    </div>
                                    <p className="about-text">Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod
                                        templ incididunt ut labore
                                    </p>
                                    <ul className="link-follow">
                                        <li>
                                            <Link className="m-0" title="Twitter" target="_blank" rel="noopener noreferrer"
                                                to={"/"}><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                        </li>
                                        <li>
                                            <Link title="Tumblr" target="_blank" rel="noopener noreferrer" to={"/"}><i
                                                className="fa fa-tumblr" aria-hidden="true"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link title="Facebook" target="_blank" rel="noopener noreferrer" to={"/"}><i
                                                className="fa fa-twitter" aria-hidden="true"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link title="Instagram" target="_blank" rel="noopener noreferrer" to={"/"}><i
                                                className="fa fa-instagram" aria-hidden="true"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 mb-lm-30px pl-lg-60px">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">Account</h4>
                                    <div className="footer-links">
                                        <div className="footer-row">
                                            <ul className="align-items-center">
                                                <li className="li"><Link className="single-link" to={"/account"}>My
                                                    Account</Link></li>
                                                <li className="li"><Link className="single-link" to={"/contact"}>Contact</Link>
                                                </li>
                                                <li className="li"><Link className="single-link" to={"/cart"}>Shopping cart</Link>
                                                </li>
                                                <li className="li"><Link className="single-link"
                                                    to={"/shop"}>Shop</Link></li>
                                                <li className="li"><Link className="single-link" to={"/login"}>Login</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 mb-lm-30px pl-lg-40px">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">Important Links</h4>
                                    <div className="footer-links">
                                        <div className="footer-row">
                                            <ul className="align-items-center">
                                                <li className="li"><Link className="single-link" to={"/faq"}>FAQ</Link></li>
                                                <li className="li"><Link className="single-link" to={"/privacy-policy"}>Privacy Policy</Link></li>
                                                <li className="li"><Link className="single-link" to={"/tos"}>Terms of Use</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-12">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">Contact Info</h4>
                                    <div className="footer-links">
                                        <p className="address">Address: Your Address Goes Here.</p>
                                        <p className="phone">Phone/Fax:<Link to={"tel:0123456789"}> 0123456789</Link></p>
                                        <p className="mail">Email:<Link to={"mailto:demo@example.com"}> demo@example.com</Link>
                                        </p>
                                        <p className="mail"><Link to={"https://demo@example.com/"}> demo@example.com</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="line-shape-top line-height-1">
                            <div className="row flex-md-row-reverse align-items-center">
                                <div className="col-md-6 text-center text-md-end">
                                    <div className="payment-mth"><a href="#"><img className="img img-fluid"
                                        src="assets/images/icons/payment.png" alt="payment-image" /></a></div>
                                </div>
                                <div className="col-md-6 text-center text-md-start">
                                    <p className="copy-text"> © 2022 <strong>n-shop</strong>. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
