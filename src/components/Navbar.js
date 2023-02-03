import React, { useEffect, useState } from "react";
import lens from "../assets/lens.webp";

function Navbar() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 400) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  // const progressBarHandler = () => {
  //   const totalScroll = document.documentElement.scrollTop;
  //   const windowHeight =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;

  //   const scroll = `${totalScroll / windowHeight}`;
  //   const progressBar = document.getElementsByClassName("progress");

  //   progressBar.style.transform = `scale(${scroll} , 1)`;
  //   progressBar.style.opacity = `${scroll}`;
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", progressBarHandler);
  // });

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    // <div className="nav">
    //   <nav id="siteNav">
    //     <div className="homePage" href="/">
    //       <img src={lens} alt="homepage" />{" "}
    //     </div>
    //     <div className="navOptions">
    //       <ul>
    //         <li>Home</li>
    //         <li>Company</li>
    //         <li>Blogs</li>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
    <div className={fix ? "navContainer-fixed" : "navContainer"}>
      <div className={fix ? "nav-fixed" : "nav"}>
        <div>
          <img src={lens} alt="homepage" className="homepage" />{" "}
        </div>
        <div className="options">
          <div className="optn">Home</div>
          <div className="optn">Company</div>
          <div className="optn">Blogs</div>
        </div>
      </div>
      <div className={fix ? "progressBarContainer" : "non"}>
        <div
          className="progressBar"
          style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
        ></div>
      </div>
    </div>
  );
}

export default Navbar;
