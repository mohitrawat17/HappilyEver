import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
const Header = () => {
  return (
   
      <div className="flex justify-between px-4 items-center shadow-xl bg-white py-2">
      <Link to='/'>
                    <img
                    alt="logo"
                        className="cursor-pointer"
                        src="https://www.happilyever.co/static/media/newLogo.aa017d5297ade31296050058d61d207d.svg"
                    />
                    </Link>
                    <Link to='/'>
                    <ExitToAppIcon className="cursor-pointer" />
                    </Link>
                </div>
    
  )
}

export default Header
