import { Link } from "react-router-dom"


const CartSection = () => {
	return (
		<div className="cart-main-area pt-100px pb-100px">
			<div className="container">
				<h3 className="cart-page-title">Your cart items</h3>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-12">
						<form action="#">
							<div className="table-content table-responsive cart-table-content">
								<table>
									<thead>
										<tr>
											<th>Image</th>
											<th>Product Name</th>
											<th>Until Price</th>
											<th>Qty</th>
											<th>Subtotal</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="product-thumbnail">
												<a href="#"><img className="img-responsive ml-15px" src="assets/images/product-image/1.webp" alt="" /></a>
											</td>
											<td className="product-name"><a href="#">Modern Smart Phone</a></td>
											<td className="product-price-cart"><span className="amount">$60.00</span></td>
											<td className="product-quantity">
												<div className="cart-plus-minus">
													<input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue="1" />
												</div>
											</td>
											<td className="product-subtotal">$70.00</td>
											<td className="product-remove">
												<a href="#"><i className="fa fa-pencil"></i></a>
												<a href="#"><i className="fa fa-times"></i></a>
											</td>
										</tr>
										<tr>
											<td className="product-thumbnail">
												<a href="#"><img className="img-responsive ml-15px" src="assets/images/product-image/2.webp" alt="" /></a>
											</td>
											<td className="product-name"><a href="#">Bluetooth Headphone</a></td>
											<td className="product-price-cart"><span className="amount">$50.00</span></td>
											<td className="product-quantity">
												<div className="cart-plus-minus">
													<input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue="1" />
												</div>
											</td>
											<td className="product-subtotal">$80.00</td>
											<td className="product-remove">
												<a href="#"><i className="fa fa-pencil"></i></a>
												<a href="#"><i className="fa fa-times"></i></a>
											</td>
										</tr>
										<tr>
											<td className="product-thumbnail">
												<a href="#"><img className="img-responsive ml-15px" src="assets/images/product-image/3.webp" alt="" /></a>
											</td>
											<td className="product-name"><a href="#">Smart Music Box</a></td>
											<td className="product-price-cart"><span className="amount">$70.00</span></td>
											<td className="product-quantity">
												<div className="cart-plus-minus">
													<input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue="1" />
												</div>
											</td>
											<td className="product-subtotal">$90.00</td>
											<td className="product-remove">
												<a href="#"><i className="fa fa-pencil"></i></a>
												<a href="#"><i className="fa fa-times"></i></a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="cart-shiping-update-wrapper">
										<div className="cart-shiping-update">
											<Link to="/shop">Continue Shopping</Link>
										</div>
										<div className="cart-clear">
											<button>Update Shopping Cart</button>
											<Link to="/cart-empty">Clear Shopping Cart</Link>
										</div>
									</div>
								</div>
							</div>
						</form>
						<div className="row">
							<div className="col-lg-4 col-md-6 mb-lm-30px">
								<div className="cart-tax">
									<div className="title-wrap">
										<h4 className="cart-bottom-title section-bg-gray">Estimate Shipping And Tax</h4>
									</div>
									<div className="tax-wrapper">
										<p>Enter your destination to get a shipping estimate.</p>
										<div className="tax-select-wrapper">
											<div className="tax-select">
												<label>
													* Country
												</label>
												<select className="email s-email s-wid">
													<option>Bangladesh</option>
													<option>Albania</option>
													<option>Åland Islands</option>
													<option>Afghanistan</option>
													<option>Belgium</option>
												</select>
											</div>
											<div className="tax-select">
												<label>
													* Region / State
												</label>
												<select className="email s-email s-wid">
													<option>Bangladesh</option>
													<option>Albania</option>
													<option>Åland Islands</option>
													<option>Afghanistan</option>
													<option>Belgium</option>
												</select>
											</div>
											<div className="tax-select mb-25px">
												<label>
													* Zip/Postal Code
												</label>
												<input type="text" />
											</div>
											<button className="cart-btn-2" type="submit">Get A Quote</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-lm-30px">
								<div className="discount-code-wrapper">
									<div className="title-wrap">
										<h4 className="cart-bottom-title section-bg-gray">Use Coupon Code</h4>
									</div>
									<div className="discount-code">
										<p>Enter your coupon code if you have one.</p>
										<form>
											<input type="text" required="" name="name" />
											<button className="cart-btn-2" type="submit">Apply Coupon</button>
										</form>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-12 mt-md-30px">
								<div className="grand-totall">
									<div className="title-wrap">
										<h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
									</div>
									<h5>Total products <span>$260.00</span></h5>
									<div className="total-shipping">
										<h5>Total shipping</h5>
										<ul>
											<li><input type="checkbox" /> Standard <span>$20.00</span></li>
											<li><input type="checkbox" /> Express <span>$30.00</span></li>
										</ul>
									</div>
									<h4 className="grand-totall-title">Grand Total <span>$260.00</span></h4>
									<Link to="/checkout">Proceed to Checkout</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartSection
