import "./styles/header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header" id='home'>
      <Link to='contact'>
      <button className='btn__contact'>Contactame</button>
       </Link>
    </div>
  )
}

export default Header