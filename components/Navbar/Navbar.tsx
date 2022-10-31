// import { Outlet, Link, useLocation } from "react-router-dom";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import "../../styles/Navbar.css";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { homeImages } from "../../constants";

export default function Navbar() {
  const router = useRouter();
  // const location = useLocation();
  // console.log(Router.pathname)

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
            <div className="title flex flex-row align-center g-15">
              <Image src={homeImages.logo} alt="logo" />
              <h2 className="title-text white-text f-20">SACHIEL <span className="title_wallet_text">WALLET</span></h2>
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
            <li><a className={`${router.pathname.endsWith("/") && "white-text"}`} href="#">HOME</a></li>
            <li><a className={`${router.pathname.includes("asset") && "white-text"}`} href="#">ASSET</a></li>
            <li><a className={`${router.pathname.includes("wallet") && "white-text"}`} href="#">WALLET</a></li>
            <li><a className={`m-r-20 ${router.pathname.includes("staking") && "white-text"}`} href="#">STAKING</a></li>
            <li><a className={`light-teal-text ${router.pathname.includes("login") && "white-text"}`} href="#" >SIGN UP/LOGIN</a></li>
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
            <h2 className="white-text">SACHIEL WALLET</h2>
            <button type="button" className="close_button bg-white" onClick={toggleDropdown}>
              <div className="line bg-white" />
              <div className="line" />
            </button>
          </div>
          <div className="colorful_line" />

          <ul className="mobile_nav" ref={mobileNnav}>
            {/* {
              !location.pathname.endsWith("/")
              && <li><Link to="/">Home</Link></li>
            } */}
            <li><a onClick={toggleNav} href="#about">HOME</a></li>
            <li><a onClick={toggleNav} href="#what-i-do">ASSET</a></li>
            <li><a onClick={toggleNav} href="#projects">WALLET</a></li>
            <li><a onClick={toggleNav} href="#contact">STAKING</a></li>
            <li><a onClick={toggleNav} href="#contact">SIGN UP/LOGIN</a></li>

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