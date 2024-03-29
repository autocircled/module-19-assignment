import { Link } from "react-router-dom"

const Login = () => {
	return (
		<div className="login-register-area pt-100px pb-100px">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-12 ml-auto mr-auto">
						<div className="login-register-wrapper">
							<div className="login-register-tab-list nav">
								<a className="active" data-bs-toggle="tab" href="#lg1">
									<h4>login</h4>
								</a>
								<a data-bs-toggle="tab" href="#lg2">
									<h4>register</h4>
								</a>
							</div>
							<div className="tab-content">
								<div id="lg1" className="tab-pane active">
									<div className="login-form-container">
										<div className="login-register-form">
											<form action="#" method="post">
												<input type="text" name="user-name" placeholder="Username" />
												<input type="password" name="user-password" placeholder="Password" />
												<div className="button-box">
													<div className="login-toggle-btn">
														<input type="checkbox" />
														<a className="flote-none">Remember me</a>
														<a href="#">Forgot Password?</a>
													</div>
													<Link to="/account" className=""><span>Login</span></Link>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div id="lg2" className="tab-pane">
									<div className="login-form-container">
										<div className="login-register-form">
											<form action="#" method="post">
												<input type="text" name="user-name" placeholder="Username" />
												<input type="password" name="user-password" placeholder="Password" />
												<input name="user-email" placeholder="Email" type="email" />
												<div className="button-box">
													<Link to="/account" className=""><span>Register</span></Link>
												</div>
											</form>
										</div>
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

export default Login
