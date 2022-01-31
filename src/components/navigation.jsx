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

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
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
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/product`}> Product </NavLink> </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Sign In/Up <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            {/* <li > <NavLink onClick={toggleClass} activeClassName='is-active'  to={"https://form.jotform.com/213123497958465"}> Register as Doctor </NavLink> </li> */}
                            <li > <a href="https://form.jotform.com/213123497958465" > Sign Up/In Doctor </a> </li>
                            {/* <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> user signUp </NavLink> </li> */}
                            <li> <a href="https://form.jotform.com/220243403405440">Sign Up/in User</a> </li>
                        </ul>
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/blog`}> Blog </NavLink> </li>
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
