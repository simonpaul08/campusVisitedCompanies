import Mainbar from "../components/Mainbar"
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className="d-flex home-container">
       <Sidebar /> 
       <Mainbar />
    </div>
  )
}

export default Home