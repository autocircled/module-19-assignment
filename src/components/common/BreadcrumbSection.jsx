import PropTypes from 'prop-types'
const BreadcrumbSection = (props) => {
	const count = props.title.length
  return (
	<div className="breadcrumb-area">
		<div className="container">
			<div className="row align-items-center justify-content-center">
				<div className="col-12 text-center">
					<h2 className="breadcrumb-title">Product Page</h2>
					<ul className="breadcrumb-list">
						{props.title && props.title.map((item, index) => {
							return (
								<li className={`breadcrumb-item ${index === count-1 ? 'active' : ''}`} key={index.toString()}>
										{index === count-1 && item}
										{index !== count-1 && <a href="index.html">{item}</a>}
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	</div>
  )
}

BreadcrumbSection.propTypes = {
  title: PropTypes.array
}

export default BreadcrumbSection
