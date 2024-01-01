const FeaturedOffer = () => {
  return (
	<div className="feature-product-area pt-100px pb-100px">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="section-title text-center">
						<h2 className="title">Featured Offers</h2>
						<p>There are many variations of passages of Lorem Ipsum available</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-6 col-lg-6 mb-md-35px mb-lm-35px">
					<div className="single-feature-content">
						<div className="feature-image">
							<img src="assets/images/feature-image/1.webp" alt="" />
						</div>
						<div className="top-content">
							<h4 className="title"><a href="single-product.html">Bluetooth Headphone </a></h4>
							<span className="price">
								<span className="old"><del>$48.50</del></span>
								<span className="new">$38.50</span>
							</span>
						</div>
						<div className="bottom-content">
							<div className="deal-timing">
								<div data-countdown="2023/09/15"></div>
							</div>
							<a href="single-product-variable.html" className="btn btn-primary  m-auto"> Shop
								Now </a>
						</div>
					</div>
				</div>
				<div className="col-xl-6 col-lg-6">
					<div className="feature-right-content">
						<div className="image-side">
							<img src="assets/images/feature-image/2.webp" alt="" />
							<button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal"
								data-bs-target="#exampleModal-Cart"><i className="pe-7s-shopbag"></i></button>
						</div>
						<div className="content-side">
							<div className="deal-timing">
								<span>End In:</span>
								<div data-countdown="2024/09/15"></div>
							</div>
							<div className="prize-content">
								<h5 className="title"><a href="single-product.html">Ladies Smart Watch</a></h5>
								<span className="price">
									<span className="old">$48.50</span>
									<span className="new">$38.50</span>
								</span>
							</div>
							<div className="product-feature">
								<ul>
									<li>Predecessor : <span>None.</span></li>
									<li>Support Type : <span>Neutral.</span></li>
									<li>Cushioning : <span>High Energizing.</span></li>
									<li>Total Weight : <span> 300gm</span></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="feature-right-content mt-30px">
						<div className="image-side">
							<img src="assets/images/feature-image/3.webp" alt="" />
							<button title="Add To Cart" className="action add-to-cart" data-bs-toggle="modal"
								data-bs-target="#exampleModal-Cart"><i className="pe-7s-shopbag"></i></button>
						</div>
						<div className="content-side">
							<div className="deal-timing">
								<span>End In:</span>
								<div data-countdown="2023/09/15"></div>
							</div>
							<div className="prize-content">
								<h5 className="title"><a href="single-product.html">Ladies Smart Watch</a></h5>
								<span className="price">
									<span className="old">$48.50</span>
									<span className="new">$38.50</span>
								</span>
							</div>
							<div className="product-feature">
								<ul>
									<li>Predecessor : <span>None.</span></li>
									<li>Support Type : <span>Neutral.</span></li>
									<li>Cushioning : <span>High Energizing.</span></li>
									<li>Total Weight : <span> 300gm</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default FeaturedOffer
