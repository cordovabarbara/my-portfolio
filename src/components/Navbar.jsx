
import { RxHome } from "react-icons/rx";
import { VscChecklist } from "react-icons/vsc";
import { BsBriefcase, BsChatRightText, BsPerson,BsTrophy} from "react-icons/bs";
import { Link } from "react-scroll";
import "./styles/navbar.css";

const Navbar = () => {
  return (
  <div className="navbar">
    <ul className="navbar__list">
      <Link to='home'>
        <li className="navbar__item">
          <RxHome />
        </li>
      </Link>

        <Link to='sobre mi'>
          <li className="navbar__item">
            <BsPerson/>
          </li>
        </Link>

        <Link to='Certificacions'>
          <li className="navbar__item">
            <BsTrophy/>
          </li>
        </Link>

        <Link to='projects'>
          <li className="navbar__item">
            <BsBriefcase />
          </li>
          </Link>
          <Link to='skills'>
          <li className="navbar__item">
            <VscChecklist />
          </li>
        </Link>
        <Link to='contact'>
          <li className="navbar__item">
            <BsChatRightText />
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar;
