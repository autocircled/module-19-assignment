import Layout from "../components/Layout"
import BreadcrumbSection from "../components/common/BreadcrumbSection"
import Wishlist from "../components/shop/Wishlist"

const WishlistPage = () => {
	return (
		<Layout>
			<BreadcrumbSection title="Wishlist" list={["Home", "Wishlist"]} />
			<Wishlist />
		</Layout>
	)
}

export default WishlistPage
