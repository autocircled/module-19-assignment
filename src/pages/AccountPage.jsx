import Layout from "../components/Layout"
import BreadcrumbSection from "../components/common/BreadcrumbSection"
import Account from "../components/shop/Account"

const AccountPage = () => {
	return (
		<Layout>
			<BreadcrumbSection title="Account" list={["Home", "Account"]} />
			<Account />
		</Layout>
	)
}

export default AccountPage
