import Layout from "../components/Layout"
import BreadcrumbSection from "../components/common/BreadcrumbSection"
import ProductDetails from "../components/shop/ProductDetails"
import RelatedProducts from "../components/shop/RelatedProducts"

const SingleProductPage = () => {

	return (
		<Layout>
			<BreadcrumbSection title="Single Product" list={["Home", "Modern Smart Phone"]} />
			<ProductDetails />
			<RelatedProducts />
		</Layout>
	)
}

export default SingleProductPage
