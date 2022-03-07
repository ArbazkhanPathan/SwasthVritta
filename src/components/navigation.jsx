import "./navigation.css";import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
// import Swas_logo_2 from '../../../img/logo/Swas_logo_2.png';
// import logo_name from 'img/logo/logo_name.png';


const Navigation = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu,] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    const [isMenuSubMenu1, setMenuSubMenu1] = useState(false);
    const toggleSubmenu1 = () => {
        setMenuSubMenu1(isMenuSubMenu1 === false ? true : false);
      };

    let boxClassSubMenu1 = ["sub__menus"];
    if(isMenuSubMenu1) {
        boxClassSubMenu1.push('sub__menus__Active');
    }else {
        boxClassSubMenu1.push('');
    }

    const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
    const toggleSubmenu2 = () => {
        setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
      };

    let boxClassSubMenu2 = ["sub__menus"];
    if(isMenuSubMenu2) {
        boxClassSubMenu2.push('sub__menus__Active');
    }else {
        boxClassSubMenu2.push('');
    }

   

    return (
    <header className="header__middle">
        <div className="swasnav container">
            <div className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img src="img/logo/Swas_logo_2.png" alt="logo" /> 
                        <img src="img/logo/logo_name.png" alt="logo" /> 
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li>
                    {/* <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`#kyp`}> Know Your Prakriti </NavLink> </li> */}
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Aboutus`}> AboutUs </NavLink> </li>
                    {/* <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/product`}> Product </NavLink> </li> */}




                    <li onClick={toggleSubmenu2} className="menu-item sub__menus__arrows" > <Link to="#"> Shop <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu2.join(' ')} > 
                            <li > <NavLink onClick={toggleClass} activeClassName='is-active' to={`/shop`}> Swasthvritta Essentials <br />(Cloud 9) </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/product`}> Swasthvritta's Kitchen </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/product`}> Cart </NavLink> </li>
                        </ul>
                    </li>




                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Sign In/Up <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            {/* <li > <NavLink onClick={toggleClass} activeClassName='is-active'  to={"https://form.jotform.com/213123497958465"}> Register as Doctor </NavLink> </li> */}
                            <li > <a href="http://13.235.91.102/swasthvritta/doxe_v1.6/" > Sign Up/In Doctor </a> </li>
                            {/* <li > <a href="http://localhost/Swasthvritta/codecanyon-Il7dksD6-doxe-saas-doctors-chamber-prescription-appointment-software/doxe_v1.6/" > Sign Up/In Doctor </a> </li> */}
                            {/* <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> user signUp </NavLink> </li> */}
                            <li> <a href="https://form.jotform.com/220243403405440">Sign Up/in User</a> </li>
                        </ul>
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/blog`}> Blog </NavLink> </li>
                    <li onClick={toggleSubmenu1} className="menu-item sub__menus__arrows" > <Link to="#"> Gallery <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu1.join(' ')} > 
                            {/* <li > <NavLink onClick={toggleClass} activeClassName='is-active'  to={"https://form.jotform.com/213123497958465"}> Register as Doctor </NavLink> </li> */}
                            <li > <NavLink onClick={toggleClass} activeClassName='is-active' to={`/achievement`}> Achievements </NavLink> </li>
                            {/* <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> user signUp </NavLink> </li> */}
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/videos`}> Videos </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/photos`}> Photos </NavLink> </li>
                        </ul>
                    </li>
                    {/* <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </NavLink> </li> */}

                    </ul>


                    </nav>     
                </div>   



        
        
            </div>
	    </div>
    </header>
    )
}

export default Navigation
