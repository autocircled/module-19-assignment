import { Link } from "react-router-dom"

const BlogList = () => {
	return (
		<div className="blog-list pb-100px pt-100px main-blog-page single-blog-page">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 ms-auto me-auto">
						<div className="row">
							<div className="col-12 mb-50px">
								<div className="single-blog">
									<div className="blog-image">
										<Link to={"/single-post"}><img src="assets/images/blog-image/1.webp" className="img-responsive w-100" alt="" /></Link>
									</div>
									<div className="blog-text">
										<div className="blog-athor-date line-height-1">
											<span className="blog-date"><i className="fa fa-calendar" aria-hidden="true"></i> 27,Jun 2030</span>
											<span><a className="blog-author" href="blog-grid.html"><i className="fa fa-user" aria-hidden="true"></i> Oaklee Odom</a></span>
										</div>
										<h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">The Top Reasons People Succeed in the Smart Product Industry.</a></h5>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
										<Link to={"/single-post"} className="btn btn-primary blog-btn"> Read More</Link>
									</div>
								</div>
							</div>

							<div className="col-12 mb-50px">
								<div className="single-blog ">
									<div className="blog-image">
										<Link to={"/single-post"}><img src="assets/images/blog-image/2.webp" className="img-responsive w-100" alt="" /></Link>
									</div>
									<div className="blog-text">
										<div className="blog-athor-date line-height-1">
											<span className="blog-date"><i className="fa fa-calendar" aria-hidden="true"></i> 27,Jun 2030</span>
											<span><a className="blog-author" href="blog-grid.html"><i className="fa fa-user" aria-hidden="true"></i> Kabir Akle</a></span>
										</div>
										<h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">10 Principles of Psychology to Improve Your Smart Product.</a></h5>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
										<Link to={"/single-post"} className="btn btn-primary blog-btn"> Read More</Link>
									</div>
								</div>
							</div>

							<div className="col-12 mb-50px">
								<div className="single-blog">
									<div className="blog-image">
										<Link to={"/single-post"}><img src="assets/images/blog-image/3.webp" className="img-responsive w-100" alt="" /></Link>
									</div>
									<div className="blog-text">
										<div className="blog-athor-date line-height-1">
											<span className="blog-date"><i className="fa fa-calendar" aria-hidden="true"></i> 27,Jun 2030</span>
											<span><a className="blog-author" href="blog-grid.html"><i className="fa fa-user" aria-hidden="true"></i> Fahim Adnan</a></span>
										</div>
										<h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">Do&apos;t Make This Silly Mistake With Your Smart Product.</a></h5>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
										<Link to={"/single-post"} className="btn btn-primary blog-btn"> Read More</Link>
									</div>
								</div>
							</div>

							<div className="col-12 mb-50px">
								<div className="single-blog">
									<div className="blog-image">
										<Link to={"/single-post"}><img src="assets/images/blog-image/4.webp" className="img-responsive w-100" alt="" /></Link>
									</div>
									<div className="blog-text">
										<div className="blog-athor-date line-height-1">
											<span className="blog-date"><i className="fa fa-calendar" aria-hidden="true"></i> 27,Jun 2030</span>
											<span><a className="blog-author" href="blog-grid.html"><i className="fa fa-user" aria-hidden="true"></i> Bueat Odom</a></span>
										</div>
										<h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">8 Effective Smart Product Elevator Pitches Modern Technology.</a></h5>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
										<Link to={"/single-post"} className="btn btn-primary blog-btn"> Read More</Link>
									</div>
								</div>
							</div>

							<div className="col-12 mb-50px">
								<div className="single-blog">
									<div className="blog-image">
										<Link to={"/single-post"}><img src="assets/images/blog-image/5.webp" className="img-responsive w-100" alt="" /></Link>
									</div>
									<div className="blog-text">
										<div className="blog-athor-date line-height-1">
											<span className="blog-date"><i className="fa fa-calendar" aria-hidden="true"></i> 27,Jun 2030</span>
											<span><a className="blog-author" href="blog-grid.html"><i className="fa fa-user" aria-hidden="true"></i> Shah Alam</a></span>
										</div>
										<h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">The Intermediate Guide How to Use Smart Product.</a></h5>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
										<Link to={"/single-post"} className="btn btn-primary blog-btn"> Read More</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="pro-pagination-style text-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
					<div className="pages">
						<ul>
							<li className="li"><a className="page-link" href="#"><i className="fa fa-angle-left"></i></a></li>
							<li className="li"><a className="page-link active" href="#">1</a></li>
							<li className="li"><a className="page-link" href="#">2</a></li>
							<li className="li"><a className="page-link" href="#">3</a></li>
							<li className="li"><a className="page-link" href="#"><i className="fa fa-angle-right"></i></a>
							</li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	)
}

export default BlogList
