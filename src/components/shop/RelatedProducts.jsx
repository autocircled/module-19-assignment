import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const RelatedProducts = () => {

	const navigation = {
		nextEl: '.swiper-button-next.nn',
		prevEl: '.swiper-button-prev.pp',
	}

	return (
		<div className="product-area related-product">
			<div className="container">

				<div className="row">
					<div className="col-12">
						<div className="section-title text-center m-0">
							<h2 className="title">Related Products</h2>
							<p>There are many variations of passages of Lorem Ipsum available</p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<div className="new-product-slider swiper-container slider-nav-style-1">
							{/* <div className="swiper-wrapper"> */}
							<Swiper
								navigation={navigation}
								modules={[Navigation]}
								loop={true}
								slidesPerView={4}
								spaceBetween={30}
								speed={1500}
								breakpoints={{
									0: {
										slidesPerView: 1,
									},
									480: {
										slidesPerView: 2,
									},
									768: {
										slidesPerView: 3,
									},
									1200: {
										slidesPerView: 4,
									},
								}}
								className="mySwiper3"

							>
								<SwiperSlide>

									<div className="product">
										<span className="badges">
											<span className="new">New</span>
										</span>
										<div className="thumb">
											<a href="single-product.html" className="image">
												<img src="assets/images/product-image/1.webp" alt="Product" />
												<img className="hover-image" src="assets/images/product-image/1.webp" alt="Product" />
											</a>
										</div>
										<div className="content">
											<span className="category"><a href="#">Accessories</a></span>
											<h5 className="title"><a href="single-product.html">Modern Smart Phone
											</a>
											</h5>
											<span className="price">
												<span className="new">$38.50</span>
											</span>
										</div>
										<div className="actions">
											<button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
												className="pe-7s-shopbag"></i></button>
											<button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
												className="pe-7s-like"></i></button>
											<button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
											<button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
												className="pe-7s-refresh-2"></i></button>
										</div>
									</div>

								</SwiperSlide>
								<SwiperSlide>

									<div className="product">
										<span className="badges">
											<span className="sale">-10%</span>
											<span className="new">New</span>
										</span>
										<div className="thumb">
											<a href="single-product.html" className="image">
												<img src="assets/images/product-image/2.webp" alt="Product" />
												<img className="hover-image" src="assets/images/product-image/2.webp" alt="Product" />
											</a>
										</div>
										<div className="content">
											<span className="category"><a href="#">Accessories</a></span>
											<h5 className="title"><a href="single-product.html">Bluetooth Headphone
											</a>
											</h5>
											<span className="price">
												<span className="old">$48.50</span>
												<span className="new">$38.50</span>
											</span>
										</div>
										<div className="actions">
											<button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
												className="pe-7s-shopbag"></i></button>
											<button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
												className="pe-7s-like"></i></button>
											<button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
											<button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
												className="pe-7s-refresh-2"></i></button>
										</div>
									</div>

								</SwiperSlide>
								<SwiperSlide>

									<div className="product">
										<span className="badges">
											<span className="new">Sale</span>
										</span>
										<div className="thumb">
											<a href="single-product.html" className="image">
												<img src="assets/images/product-image/3.webp" alt="Product" />
												<img className="hover-image" src="assets/images/product-image/3.webp" alt="Product" />
											</a>
										</div>
										<div className="content">
											<span className="category"><a href="#">Accessories</a></span>
											<h5 className="title"><a href="single-product.html">Smart Music Box
											</a>
											</h5>
											<span className="price">
												<span className="new">$38.50</span>
											</span>
										</div>
										<div className="actions">
											<button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
												className="pe-7s-shopbag"></i></button>
											<button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
												className="pe-7s-like"></i></button>
											<button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
											<button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
												className="pe-7s-refresh-2"></i></button>
										</div>
									</div>

								</SwiperSlide>
								<SwiperSlide>

									<div className="product">
										<span className="badges">
											<span className="new">New</span>
										</span>
										<div className="thumb">
											<a href="single-product.html" className="image">
												<img src="assets/images/product-image/4.webp" alt="Product" />
												<img className="hover-image" src="assets/images/product-image/1.webp" alt="Product" />
											</a>
										</div>
										<div className="content">
											<span className="category"><a href="#">Accessories</a></span>
											<h5 className="title"><a href="single-product.html">Air Pods 25Hjkl Black
											</a>
											</h5>
											<span className="price">
												<span className="new">$38.50</span>
											</span>
										</div>
										<div className="actions">
											<button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
												className="pe-7s-shopbag"></i></button>
											<button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
												className="pe-7s-like"></i></button>
											<button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
											<button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
												className="pe-7s-refresh-2"></i></button>
										</div>
									</div>

								</SwiperSlide>
								<SwiperSlide>

									<div className="product">
										<span className="badges">
										</span>
										<div className="thumb">
											<a href="single-product.html" className="image">
												<img src="assets/images/product-image/5.webp" alt="Product" />
												<img className="hover-image" src="assets/images/product-image/5.webp" alt="Product" />
											</a>
										</div>
										<div className="content">
											<span className="category"><a href="#">Accessories</a></span>
											<h5 className="title"><a href="single-product.html">Smart Hand Watch
											</a>
											</h5>
											<span className="price">
												<span className="new">$38.50</span>
											</span>
										</div>
										<div className="actions">
											<button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
												className="pe-7s-shopbag"></i></button>
											<button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
												className="pe-7s-like"></i></button>
											<button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
											<button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
												className="pe-7s-refresh-2"></i></button>
										</div>
									</div>

								</SwiperSlide>
								<SwiperSlide>

									<div className="product">
										<span className="badges">
											<span className="sale">-8%</span>
											<span className="new">Sale</span>
										</span>
										<div className="thumb">
											<a href="single-product.html" className="image">
												<img src="assets/images/product-image/6.webp" alt="Product" />
												<img className="hover-image" src="assets/images/product-image/6.webp" alt="Product" />
											</a>
										</div>
										<div className="content">
											<span className="category"><a href="#">Accessories</a></span>
											<h5 className="title"><a href="single-product.html">Smart Table Camera
											</a>
											</h5>
											<span className="price">
												<span className="old">$138.50</span>
												<span className="new">$112.50</span>
											</span>
										</div>
										<div className="actions">
											<button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
												className="pe-7s-shopbag"></i></button>
											<button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
												className="pe-7s-like"></i></button>
											<button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
											<button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
												className="pe-7s-refresh-2"></i></button>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>

									<div className="product">
										<span className="badges">
											<span className="new">Sale</span>
										</span>
										<div className="thumb">
											<a href="single-product.html" className="image">
												<img src="assets/images/product-image/7.webp" alt="Product" />
												<img className="hover-image" src="assets/images/product-image/1.webp" alt="Product" />
											</a>
										</div>
										<div className="content">
											<span className="category"><a href="#">Accessories</a></span>
											<h5 className="title"><a href="single-product.html">Round Pocket Router
											</a>
											</h5>
											<span className="price">
												<span className="new">$38.50</span>
											</span>
										</div>
										<div className="actions">
											<button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
												className="pe-7s-shopbag"></i></button>
											<button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
												className="pe-7s-like"></i></button>
											<button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
											<button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
												className="pe-7s-refresh-2"></i></button>
										</div>
									</div>

								</SwiperSlide>
								<SwiperSlide>

									<div className="product">
										<span className="badges">
											<span className="sale">-5%</span>
										</span>
										<div className="thumb">
											<a href="single-product.html" className="image">
												<img src="assets/images/product-image/8.webp" alt="Product" />
												<img className="hover-image" src="assets/images/product-image/8.webp" alt="Product" />
											</a>
										</div>
										<div className="content">
											<span className="category"><a href="#">Accessories</a></span>
											<h5 className="title"><a href="single-product.html">Power Bank 10000Mhp
											</a>
											</h5>
											<span className="price">
												<span className="old">$260.00</span>
												<span className="new">$238.50</span>
											</span>
										</div>
										<div className="actions">
											<button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal" data-bs-target="#exampleModal-Cart"><i
												className="pe-7s-shopbag"></i></button>
											<button className="action wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal-Wishlist"><i
												className="pe-7s-like"></i></button>
											<button className="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look"></i></button>
											<button className="action compare" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal-Compare"><i
												className="pe-7s-refresh-2"></i></button>
										</div>
									</div>

								</SwiperSlide>
							</Swiper>

							<div className="swiper-buttons">
								<div className="swiper-button-next nn"></div>
								<div className="swiper-button-prev pp"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RelatedProducts
