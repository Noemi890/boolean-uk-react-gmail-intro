import NavMenu from "./NavMenu"
import SearchBar from "./SearchBar"

const Header = () => {
  return (
    <header className="header">
      <NavMenu />
      <SearchBar />
    </header>
  )
}

export default Header