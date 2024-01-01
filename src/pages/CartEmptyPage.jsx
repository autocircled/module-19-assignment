import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import BreadcrumbSection from "../components/common/BreadcrumbSection"

const CartEmptyPage = () => {
	return (
		<Layout>
			<BreadcrumbSection title="Cart" list={["Home", "Cart"]} />
			<div className="empty-cart-area pb-100px pt-100px">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="cart-heading">
								<h2>Your cart item</h2>
							</div>
							<div className="empty-text-contant text-center">
								<i className="pe-7s-shopbag"></i>
								<h3>There are no more items in your cart</h3>
								<Link className="empty-cart-btn" to={"/shop"}>
									<i className="fa fa-arrow-left"> </i> Continue shopping
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default CartEmptyPage
