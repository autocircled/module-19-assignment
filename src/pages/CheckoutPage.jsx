import Layout from "../components/Layout"
import BreadcrumbSection from "../components/common/BreadcrumbSection"
import Checkout from "../components/shop/Checkout"


const CheckoutPage = () => {
	return (
		<Layout>
			<BreadcrumbSection title="Checkout" list={["Home", "Checkout"]} />
			<Checkout />
		</Layout>
	)
}

export default CheckoutPage
