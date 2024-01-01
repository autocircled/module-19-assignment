import Layout from "../components/Layout"
import BreadcrumbSection from "../components/common/BreadcrumbSection"
import CartSection from "../components/shop/Cart"

const Cart = () => {
	return (
		<Layout>
			<BreadcrumbSection title="Cart" list={["Home", "Cart"]} />
			<CartSection />
		</Layout>
	)
}

export default Cart
