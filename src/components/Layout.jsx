import PropTypes from 'prop-types';

const Layout = (props) => {
  return (
	<div className="main-wrapper">
		{props.children}
	</div>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout
