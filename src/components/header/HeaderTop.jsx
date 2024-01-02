import { Link } from "react-router-dom"

const HeaderTop = () => {
	return (
		<div className="header-top">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col">
						<div className="welcome-text">
							<p>World Wide Completely Free Returns and Shipping</p>
						</div>
					</div>
					<div className="col d-none d-lg-block">
						<div className="top-nav">
							<ul>
								<li><Link to={"tel:+0123456789"}><i className="fa fa-phone"></i> +012 3456 789</Link></li>
								<li><Link to={"mailto:demo@example.com"}><i className="fa fa-envelope-o"></i> demo@example.com</Link></li>
								<li><Link to={"/account"}><i className="fa fa-user"></i> Account</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderTop
