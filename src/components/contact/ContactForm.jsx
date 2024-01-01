
const ContactForm = () => {
	return (
		<div className="contact-area">
			<div className="container">
				<div className="contact-wrapper">
					<div className="row">
						<div className="col-12">
							<div className="contact-form">
								<div className="contact-title mb-30">
									<h2 className="title">Send A Quest</h2>
								</div>
								<form className="contact-form-style" id="contact-form" action="" method="post">
									<div className="row">
										<div className="col-lg-6">
											<input name="name" placeholder="Name*" type="text" />
										</div>
										<div className="col-lg-6">
											<input name="email" placeholder="Email*" type="email" />
										</div>
										<div className="col-lg-12">
											<input name="subject" placeholder="Subject*" type="text" />
										</div>
										<div className="col-lg-12 text-center">
											<textarea name="message" placeholder="Your Message*"></textarea>
											<button className="btn btn-primary" type="submit">Send Message</button>
										</div>
									</div>
								</form>
								<p className="form-messege"></p>
							</div>
						</div>
						<div className="col-12">
							<div className="contact-info">
								<div className="single-contact">
									<div className="icon-box">
										<img src="assets/images/icons/contact-1.png" alt="" />
									</div>
									<div className="info-box">
										<h5 className="title">Address</h5>
										<p>Your address goes here. <br />
											123 Your Location</p>
									</div>
								</div>
								<div className="single-contact">
									<div className="icon-box">
										<img src="assets/images/icons/contact-2.png" alt="" />
									</div>
									<div className="info-box">
										<h5 className="title">Phone No</h5>
										<p><a href="tel:0123456789">+012 345 67 89</a></p>
										<p><a href="tel:0123456789">+012 345 67 89</a></p>
									</div>
								</div>
								<div className="single-contact m-0">
									<div className="icon-box">
										<img src="assets/images/icons/contact-3.png" alt="" />
									</div>
									<div className="info-box">
										<h5 className="title">Email/Web</h5>
										<p><a href="mailto:demo@example.com">demo@example.com</a></p>
										<p><a href="https://www.example.com/">www.example.com</a></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactForm
