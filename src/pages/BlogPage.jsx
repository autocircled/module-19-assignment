import Layout from '../components/Layout'
import BlogList from '../components/blog/BlogList'
import BreadcrumbSection from '../components/common/BreadcrumbSection'

const BlogPage = () => {
	return (
		<Layout>
			<BreadcrumbSection title="Blog" list={["Home", "Blog"]} />
			<BlogList />
		</Layout>
	)
}

export default BlogPage
