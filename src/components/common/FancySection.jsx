import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const FancySection = ({ data }) => {
  return (
    <>
      <div className="fashion-area" data-bg-image={data.image}>
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 text-center">
              <h2 className="title"><span>{data.title}</span> {data.subtitle}</h2>
              <Link to={data.link} className="btn btn-primary text-capitalize m-auto">{data.linkText}</Link>
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
