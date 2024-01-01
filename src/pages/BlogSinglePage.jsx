import Layout from "../components/Layout"
import SinglePost from "../components/blog/SinglePost"
import BreadcrumbSection from "../components/common/BreadcrumbSection"

const BlogSinglePage = () => {
	return (
		<Layout>
			<BreadcrumbSection title="Blog Single" list={["Home", "Blog", "Blog Single"]} />
			<SinglePost />
		</Layout>
	)
}

export default BlogSinglePage
