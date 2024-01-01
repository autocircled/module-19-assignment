import Layout from '../components/Layout'
import FancySection from '../components/common/FancySection'
import BannerSection from '../components/content/BannerSection'
import BlogSection from '../components/content/BlogSection'
import BrandSection from '../components/content/BrandSection'
import FeaturedOffer from '../components/content/FeaturedOffer'
import HeroSection from '../components/content/HeroSection'
import ProductSection from '../components/content/ProductSection'
import TestimonialSection from '../components/content/TestimonialSection'

const HomePage = () => {
	const fancyData = {

		image: "assets/images/fancy/fashion-bg.webp",
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
			<FeaturedOffer />
			<TestimonialSection />
			<BrandSection />
			<BlogSection />
		</Layout>
	</>
  )
}

export default HomePage
