// import { Outlet, Link, useLocation } from "react-router-dom";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import "../../styles/Navbar.css";
import React, { useRef } from "react";

export default function Navbar() {
  // const location = useLocation();

  const hidden = useRef<string | any>();
  const mobileNnav = useRef<HTMLUListElement>(null);

  const toggleDropdown = () => {
    if (hidden.current.className !== "hidden") {
      hidden.current.className = "hidden";
    } else {
      hidden.current.className = "dropdown";
    }
  };

  const toggleNav = () => {
    toggleDropdown();
  };

  return (
    <>
      <header className="bg-navy">
        <nav className="p-l-20 p-r-30">
          <div className="title_container">
            {/* <img src={homeImages.logoBlue} alt="" /> */}
            <div className="title">
              <h2 className="title-text white-text f-20">Sachiel Wallet</h2>
              {/* <p className="subtitle_text">
                ... subtitle goes here
              </p> */}
            </div>

          </div>
          <ul className="flex flex-row g-10">
            {/* {
              !location.pathname.endsWith("/")
              && <li><Link to="/">Home</Link></li>
            } */}

            {/* {
              user
                ? (
                  <li onClick={handleSignOut} className="sign-up"><a href="#">Sign Out</a></li>
                )
                :
                (
                  <>
                    <li className="sign-up"><a href="/sign-up">Sign Up</a></li>
                    <li className="sign-in"><a href="/sign-in">Sign In</a></li>
                  </>
                )
            } */}
            <li className="s"><a href="#about">HOME</a></li>
            <li className="s"><a href="#what-i-do">ASSET</a></li>
            <li className="s"><a href="#projects">WALLET</a></li>
            <li className="s m-r-20"><a href="#contact">STAKING</a></li>
            <li className="s "><a href="#contact" className="light-teal-text">SIGN UP/LOGIN</a></li>
            {/* <li className="sign-in"><button onClick={() => setCartOpen(!cartOpen)} className="p-7 p-l-15 p-r-15 br-5"><ShoppingCartOutlinedIcon /></button></li> */}
            {/* <li><Link to="/contact-us">Contact</Link></li> */}
            <li className="hamburger">
              <button type="button" onClick={toggleDropdown}>
                <div className="line" />
                <div className="line" />
                <div className="line" />
              </button>
            </li>
          </ul>
        </nav>

        {/*= ======================= */}
        {/* Navbar Dropdown Secion */}
        {/*= ======================= */}
        <div className="hidden" ref={hidden}>
          <div className="dropdown_navbar">
            <h2 className="black-text">Name Here</h2>
            <button type="button" onClick={toggleDropdown}>
              <div className="line" />
              <div className="line" />
            </button>
          </div>

          <ul className="mobile_nav" ref={mobileNnav}>
            {/* {
              !location.pathname.endsWith("/")
              && <li><Link to="/">Home</Link></li>
            } */}
            <li><a onClick={toggleNav} href="#about">About</a></li>
            <li><a onClick={toggleNav} href="#what-i-do">WHAT I DO</a></li>
            <li><a onClick={toggleNav} href="#projects">PROJECTS</a></li>
            <li><a onClick={toggleNav} href="#contact">CONTACT</a></li>

            {/* <li><Link onClick={toggleNav} to="/contact-us">Contact us</Link></li> */}
          </ul>

          {/* <ul className="buttons">
            <li><a href="#">ORDER A TEST</a></li>
            <li><a href="#">LOG IN</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>

          <div className="footer_items">
          {
            footerItems.map((item, index) => (
              <ul key={index} >
                {
                  item.map((entity, innerIndex) => (
                    <li key={innerIndex}>
                      <a href={entity.link}>{entity.text}</a>
                    </li>
                  ))
                }
              </ul>
            ))
          }
          </div> */}
        </div>
        <div className="colorful_line" />

        {/* { cartOpen && <Cart /> } */}
      </header>
      {/* <Outlet /> */}
    </>
  );
}