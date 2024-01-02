import { Link } from "react-router-dom"

const Wishlist = () => {
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
											<th>Add To Cart</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="product-thumbnail">
												<Link to={"/single-product"}><img className="img-responsive ml-15px" src="assets/images/product-image/1.webp" alt="" /></Link>
											</td>
											<td className="product-name"><Link to={"/single-product"}>Modern Smart Phone</Link></td>
											<td className="product-price-cart"><span className="amount">$60.00</span></td>
											<td className="product-quantity">
												<div className="cart-plus-minus">
													<input className="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
												</div>
											</td>
											<td className="product-subtotal">$70.00</td>
											<td className="product-wishlist-cart">
												<Link to={"/cart"}>add to cart</Link>
											</td>
										</tr>
										<tr>
											<td className="product-thumbnail">
												<Link to={"/single-product"}><img className="img-responsive ml-15px" src="assets/images/product-image/2.webp" alt="" /></Link>
											</td>
											<td className="product-name"><Link to={"/single-product"}>Bluetooth Headphone</Link></td>
											<td className="product-price-cart"><span className="amount">$50.00</span></td>
											<td className="product-quantity">
												<div className="cart-plus-minus">
													<input className="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
												</div>
											</td>
											<td className="product-subtotal">$80.00</td>
											<td className="product-wishlist-cart">
												<Link to={"/cart"}>add to cart</Link>
											</td>
										</tr>
										<tr>
											<td className="product-thumbnail">
												<Link to={"/single-product"}><img className="img-responsive ml-15px" src="assets/images/product-image/3.webp" alt="" /></Link>
											</td>
											<td className="product-name"><Link to={"/single-product"}>Smart Music Box</Link></td>
											<td className="product-price-cart"><span className="amount">$70.00</span></td>
											<td className="product-quantity">
												<div className="cart-plus-minus">
													<input className="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
												</div>
											</td>
											<td className="product-subtotal">$90.00</td>
											<td className="product-wishlist-cart">
												<Link to={"/cart"}>add to cart</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Wishlist
