import Navigation from "../../components/navbar"
import { SidebarMenu } from "../../components/Sidebar"
import MainMenu from "../../containers/MainMenu"

const Wrapper = () => {
  return (
    <div className="flex min-h-screen overflow-hidden relative">
      <div className="w-60 bg-gray-100 border-r">
        <SidebarMenu />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <Navigation/>
        <div className="flex flex-col p-3 static">
          <MainMenu />
        </div>
      </div>    
    </div>
  )
}

export default Wrapper