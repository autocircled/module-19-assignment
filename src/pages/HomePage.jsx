import Layout from '../components/Layout'
import FancySection from '../components/common/FancySection'
import BannerSection from '../components/content/BannerSection'
import HeroSection from '../components/content/HeroSection'
import ProductSection from '../components/content/ProductSection'

const HomePage = () => {
	const fancyData = {

		image: "assets/images/fancy/1.webp",
		title: "Smart Fashion",
		subtitle: "With Smart Devices",
		link: "shop-left-sidebar.html",
		linkText: "Shop All Devices"
				
	}
  return (
	<>
		<Layout>
			<HeroSection />
			<BannerSection />
			<ProductSection	/>
			
			<FancySection data={fancyData} />

		</Layout>
	</>
  )
}

export default HomePage
