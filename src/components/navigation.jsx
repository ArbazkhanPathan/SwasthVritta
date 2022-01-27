import {NavLink, Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          



          
          <a className='page-scroll text-color' href='#page-top'>  
          <img src="img/logo/Swas_logo_2.png" className="logo-img" alt="logoimg"/>          
            <img src="img/logo/logo_name.png" className="logo-img" alt="logo" />
          </a>{' '}
        </div>
 
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1 '
        >
          <ul className='nav navbar-nav navbar-right text-color'>
            <li>
              <a href='#header' className='page-scroll ' >
                
                Home
                
              </a>
              
              
            </li>
            <li>
              <a href='#kyp' className='page-scroll'>
              Know Your Prakriti
              </a>
            </li>
            <li>
              <a className='page-scroll'>
                
                About
                
              </a>
              
            </li>
            <li>
              <a href='#products' className='page-scroll'>
                Products
              </a>
            </li>
            
            <li>
              <a href='https://form.jotform.com/213123497958465' className='page-scroll'>
              Register as Doctor
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Blog
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
























