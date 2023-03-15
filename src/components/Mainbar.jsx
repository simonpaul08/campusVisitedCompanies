import MainbarBody from "./MainbarBody"
import Searchbar from "./Searchbar"

const Mainbar = () => {
  return (
    <div className="w-75 h-100 mainbar">
        <Searchbar />
        <MainbarBody />
    </div>
  )
}

export default Mainbar