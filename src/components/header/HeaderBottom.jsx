import { Link } from "react-router-dom"

const HeaderBottom = () => {
	return (
		<>
			<div className="header-bottom  d-none d-lg-block">
				<div className="container">
					<div className="row justify-content-between align-items-center">
						<div className="col-lg-3 col">
							<div className="header-logo">
								<Link to="/"><img src="assets/images/logo/logo.png" alt="Site Logo" /></Link>
							</div>
						</div>
						<div className="col-lg-6 d-none d-lg-block">
							<div className="search-element">
								<form action="#">
									<input type="text" placeholder="Search" />
									<button><i className="pe-7s-search"></i></button>
								</form>
							</div>
						</div>
						<div className="col-lg-3 col">
							<div className="header-actions">
								<Link to="/wishlist" className="header-action-btn offcanvas-toggle">
									<i className="pe-7s-like"></i>
								</Link>
								<Link to="/cart" className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
									<i className="pe-7s-shopbag"></i>
									<span className="header-action-num">01</span>
								</Link>
								<Link to="#offcanvas-mobile-menu" className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
									<i className="pe-7s-menu"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="header-bottom d-lg-none sticky-nav style-1">
				<div className="container">
					<div className="row justify-content-between align-items-center">
						<div className="col-lg-3 col">
							<div className="header-logo">
								<Link to="/"><img src="assets/images/logo/logo.png" alt="Site Logo" /></Link>
							</div>
						</div>
						<div className="col-lg-6 d-none d-lg-block">
							<div className="search-element">
								<form action="#">
									<input type="text" placeholder="Search" />
									<button><i className="pe-7s-search"></i></button>
								</form>
							</div>
						</div>
						<div className="col-lg-3 col">
							<div className="header-actions">
								<Link to="/wishlist" className="header-action-btn offcanvas-toggle">
									<i className="pe-7s-like"></i>
								</Link>
								<Link to="/cart"
									className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
									<i className="pe-7s-shopbag"></i>
									<span className="header-action-num">01</span>
								</Link>
								<Link to="#offcanvas-mobile-menu"
									className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
									<i className="pe-7s-menu"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HeaderBottom
