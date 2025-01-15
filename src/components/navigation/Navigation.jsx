import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../button/Button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  // const [showLogin, setShowLogin] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleLoginSuccess = () => {
  //   setIsLoggedIn(true);
  //   setShowLogin(false);
  // };

  return (
    <>
      {location.pathname != "/" && (
        <span className='logo'>
          <Link to='/'>logo</Link>
        </span>
      )}
      <nav className='navbar'>
        <div className='burger-menu'>
          {isOpen ? (
            <IoClose onClick={toggleMenu} />
          ) : (
            <Button
              background='green'
              navigationButton
              buttonText={<GiHamburgerMenu onClick={toggleMenu} />}
            />
          )}
        </div>

        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <NavLink onClick={toggleMenu} to='/stays'>
              Ophold
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} to='/contact'>
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} to='/activities'>
              Aktiviteter
            </NavLink>
          </li>

          <li>
            <NavLink onClick={toggleMenu} to='/favorites'>
              Min liste
            </NavLink>
          </li>

          <li>
            <NavLink onClick={toggleMenu} to='/backoffice'>
              Backoffice
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
