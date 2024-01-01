import { Link } from "react-router-dom"

const ThankYou = () => {
	return (
		<div className="thank-you-area">
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="col-md-8">
						<div className="inner_complated">
							<div className="img_cmpted"><img src="assets/images/icons/cmpted_logo.png" alt="" /></div>
							<p className="dsc_cmpted">Thank you for ordering in our store. You will receive a confirmation
								email shortly.</p>
							<div className="btn_cmpted">
								<Link to="/shop" className="shop-btn" title="Go To Shop">Continue Shopping </Link>
							</div>
						</div>
						<div className="main_quickorder text-align-center">
							<h3 className="title">Call Us for Quick Order</h3>
							<div className="cntct typewriter-effect"><span className="call_desk"><a href="tel:+01234567890" id="typewriter_num">01 234 567 890</a></span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThankYou
