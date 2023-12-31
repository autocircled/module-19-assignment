import PropTypes from 'prop-types'

const FancySection = ({data}) => {
  return (
	<>
		<div className="fashion-area" data-bg-image={data.image}>
            <div className="container h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 text-center">
                        <h2 className="title"><span>{data.title}</span> {data.subtitle}</h2>
                        <a href={data.link} className="btn btn-primary text-capitalize m-auto">{data.linkText}</a>
                    </div>
                </div>
            </div>
        </div>
	</>
  )
}

FancySection.propTypes = {
	data: PropTypes.object.isRequired
}

export default FancySection
