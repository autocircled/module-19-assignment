import Layout from "../components/Layout"
import BreadcrumbSection from "../components/common/BreadcrumbSection"
import Login from "../components/common/Login"

const LoginPage = () => {
	return (
		<Layout>
			<BreadcrumbSection title="Login" list={["Home", "Login"]} />
			<Login />
		</Layout>
	)
}

export default LoginPage
