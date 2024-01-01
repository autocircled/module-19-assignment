import Layout from "../components/Layout"
import BreadcrumbSection from "../components/common/BreadcrumbSection"
import ContactForm from "../components/contact/ContactForm"
import Map from "../components/contact/Map"

const ContactPage = () => {
	return (
		<Layout>
			<BreadcrumbSection title="Contact us" list={["Home", "Contact"]} />
			<ContactForm />
			<Map />
		</Layout>
	)
}

export default ContactPage
