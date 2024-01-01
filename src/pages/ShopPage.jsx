import Layout from '../components/Layout'
import BreadcrumbSection from '../components/common/BreadcrumbSection'
import ProductListGrid from '../components/shop/ProductListGrid'

const ShopPage = () => {
  return (
	<Layout>
		<BreadcrumbSection title="Shop" list={["Home", "shop"]}/>
		<ProductListGrid />
	</Layout>
  )
}

export default ShopPage
