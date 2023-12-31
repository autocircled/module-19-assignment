import HeaderBottom from "./HeaderBottom"
import HeaderTop from "./HeaderTop"
import NavBar from "./NavBar"
import OffCanvas from "./OffCanvas"

const Header = () => {
  return (
	<>
		<header>
			<HeaderTop />
			<HeaderBottom />
			<NavBar />
		</header>
		<OffCanvas />
	</>
  )
}

export default Header
