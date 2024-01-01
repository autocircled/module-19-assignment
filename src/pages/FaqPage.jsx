import Layout from "../components/Layout"
import BreadcrumbSection from "../components/common/BreadcrumbSection"
import FAQ from "../components/others/FAQ"

const FaqPage = () => {
	return (
		<Layout>
			<BreadcrumbSection title="FAQ" list={["Home", "FAQ"]} />
			<FAQ />
		</Layout>
	)
}

export default FaqPage
