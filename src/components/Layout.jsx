import PropTypes from 'prop-types';
import Header from './header/Header';

const Layout = (props) => {
  return (
	<div className="main-wrapper">
		<Header />
		{props.children}
	</div>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout
