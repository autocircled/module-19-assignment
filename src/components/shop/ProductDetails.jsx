import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const ProductDetails = () => {

    const navigation = {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

    return (
        <div className="product-details-area pt-100px pb-100px">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-xs-12 mb-lm-30px mb-md-30px mb-sm-30px">

                        <div className="swiper-container zoom-top">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                                thumbs={{ swiper: "zoomThumb" }}
                                className="mySwiper2"
                            >
                                <SwiperSlide>
                                    <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/1.webp" alt="" />
                                    <a className="venobox full-preview" data-gall="myGallery" href="assets/images/product-image/zoom-image/1.webp">
                                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/2.webp" alt="" />
                                    <a className="venobox full-preview" data-gall="myGallery" href="assets/images/product-image/zoom-image/2.webp">
                                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/3.webp" alt="" />
                                    <a className="venobox full-preview" data-gall="myGallery" href="assets/images/product-image/zoom-image/3.webp">
                                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/4.webp" alt="" />
                                    <a className="venobox full-preview" data-gall="myGallery" href="assets/images/product-image/zoom-image/4.webp">
                                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="img-responsive m-auto" src="assets/images/product-image/zoom-image/5.webp" alt="" />
                                    <a className="venobox full-preview" data-gall="myGallery" href="assets/images/product-image/zoom-image/5.webp">
                                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="swiper-container mt-20px zoom-thumbs slider-nav-style-1 small-nav">
                            <Swiper
                                navigation={navigation}
                                modules={[Navigation]}
                                loop={true}
                                spaceBetween={18}
                                slidesPerView={3}
                                freeMode={true}
                                watchSlidesProgress={true}
                                className="mySwiper1"
                            >
                                <SwiperSlide>
                                    <img className="img-responsive m-auto" src="assets/images/product-image/small-image/1.webp" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="img-responsive m-auto" src="assets/images/product-image/small-image/2.webp" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="img-responsive m-auto" src="assets/images/product-image/small-image/3.webp" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="img-responsive m-auto" src="assets/images/product-image/small-image/4.webp" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="img-responsive m-auto" src="assets/images/product-image/small-image/5.webp" alt="" />
                                </SwiperSlide>
                            </Swiper>

                            <div className="swiper-buttons">
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-xs-12" data-aos="fade-up" data-aos-delay="200">
                        <div className="product-details-content quickview-content ml-25px">
                            <h2>Modern Smart Phone</h2>
                            <div className="pricing-meta">
                                <ul className="d-flex">
                                    <li className="new-price">$20.90</li>
                                </ul>
                            </div>
                            <div className="pro-details-rating-wrap">
                                <div className="rating-product">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <span className="read-review"><a className="reviews" href="#">(5 Customer Review)</a></span>
                            </div>
                            <p className="mt-30px">Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mill veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exet commodo consequat. Duis aute irure dolor</p>
                            <div className="pro-details-categories-info pro-details-same-style d-flex m-0">
                                <span>SKU:</span>
                                <ul className="d-flex">
                                    <li>
                                        <a href="#">Ch-256xl</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="pro-details-categories-info pro-details-same-style d-flex m-0">
                                <span>Categories: </span>
                                <ul className="d-flex">
                                    <li>
                                        <a href="#">Smart Device, </a>
                                    </li>
                                    <li>
                                        <a href="#">ETC</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="pro-details-categories-info pro-details-same-style d-flex m-0">
                                <span>Tags: </span>
                                <ul className="d-flex">
                                    <li>
                                        <a href="#">Smart Device, </a>
                                    </li>
                                    <li>
                                        <a href="#">Phone</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="pro-details-quality">
                                <div className="cart-plus-minus">
                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue="1" />
                                </div>
                                <div className="pro-details-cart">
                                    <button className="add-cart"> Add To
                                        Cart</button>
                                </div>
                                <div className="pro-details-compare-wishlist pro-details-wishlist ">
                                    <a href="wishlist.html"><i className="pe-7s-like"></i></a>
                                </div>
                                <div className="pro-details-compare-wishlist pro-details-wishlist ">
                                    <a href="compare.html"><i className="pe-7s-refresh-2"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="description-review-wrapper">
                            <div className="description-review-topbar nav">
                                <button data-bs-toggle="tab" data-bs-target="#des-details2">Information</button>
                                <button className="active" data-bs-toggle="tab" data-bs-target="#des-details1">Description</button>
                                <button data-bs-toggle="tab" data-bs-target="#des-details3">Reviews (02)</button>
                            </div>
                            <div className="tab-content description-review-bottom">
                                <div id="des-details2" className="tab-pane">
                                    <div className="product-anotherinfo-wrapper text-start">
                                        <ul>
                                            <li><span>Weight</span> 400 g</li>
                                            <li><span>Dimensions</span>10 x 10 x 15 cm</li>
                                            <li><span>Materials</span> 60% cotton, 40% polyester</li>
                                            <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="des-details1" className="tab-pane active">
                                    <div className="product-description-wrapper">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip efgx ea co consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cupidatat non proident, sunt in culpa qui
                                        </p>
                                    </div>
                                </div>
                                <div id="des-details3" className="tab-pane">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="review-wrapper">
                                                <div className="single-review">
                                                    <div className="review-img">
                                                        <img src="assets/images/review-image/1.png" alt="" />
                                                    </div>
                                                    <div className="review-content">
                                                        <div className="review-top-wrap">
                                                            <div className="review-left">
                                                                <div className="review-name">
                                                                    <h4>White Lewis</h4>
                                                                </div>
                                                                <div className="rating-product">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                            </div>
                                                            <div className="review-left">
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="review-bottom">
                                                            <p>
                                                                Vestibulum ante ipsum primis aucibus orci luctustrices posuere
                                                                cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper
                                                                euismod vehicula. Phasellus quam nisi, congue id nulla.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-review child-review">
                                                    <div className="review-img">
                                                        <img src="assets/images/review-image/2.png" alt="" />
                                                    </div>
                                                    <div className="review-content">
                                                        <div className="review-top-wrap">
                                                            <div className="review-left">
                                                                <div className="review-name">
                                                                    <h4>White Lewis</h4>
                                                                </div>
                                                                <div className="rating-product">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                            </div>
                                                            <div className="review-left">
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="review-bottom">
                                                            <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere
                                                                cubilia Curae Sus pen disse viverra ed viverra. Mauris ullarper
                                                                euismod vehicula.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="ratting-form-wrapper pl-50">
                                                <h3>Add a Review</h3>
                                                <div className="ratting-form">
                                                    <form action="#">
                                                        <div className="star-box">
                                                            <span>Your rating:</span>
                                                            <div className="rating-product">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="rating-form-style">
                                                                    <input placeholder="Name" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="rating-form-style">
                                                                    <input placeholder="Email" type="email" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="rating-form-style form-submit">
                                                                    <textarea name="Your Review" placeholder="Message"></textarea>
                                                                    <button className="btn btn-primary btn-hover-color-primary " type="submit">Submit</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
