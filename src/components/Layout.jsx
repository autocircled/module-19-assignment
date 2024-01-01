import PropTypes from 'prop-types';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = (props) => {
  return (
	<div className="main-wrapper">
		<Header />
		{props.children}
		<Footer />
	</div>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout
