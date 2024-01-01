import { Link } from "react-router-dom"
import Layout from "../components/Layout"

const NotFoundPage = () => {
	return (
		<Layout>
			<div className="section-404 section" data-bg-image="assets/images/404/bg-404.webp">
				<div className="container">
					<div className="content-404">
						<h1 className="title">Oops!</h1>
						<h2 className="sub-title">Page not found!</h2>
						<p>You could either go back or go to homepage</p>
						<div className="buttons">
							<Link className="btn btn-primary btn-outline-hover-dark" to={"/"}>Go back</Link>
							<Link className="btn btn-dark btn-outline-hover-dark" to={"/shop"}>Shop</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default NotFoundPage
