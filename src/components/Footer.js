import React from "react";
import lens from "../assets/lens.webp";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BsBuilding } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sections">
        <div className="section1">
          <div className="tagline">
            <div>
              <img src={lens} alt="homepage" className="homepage" />{" "}
            </div>
            <p>Tomorrow’s Vision, Today!</p>
          </div>
        </div>
        <div className="section2">
          <h2>Contact Us</h2>
          <div className="contacts">
            <BsWhatsapp></BsWhatsapp>
            <a className="addr">+1-517-9300-792</a>
          </div>
          <div className="contacts">
            <BsFillTelephoneFill></BsFillTelephoneFill>
            <a className="addr">+91-9990-736-796</a>
          </div>
          <div className="contacts">
            <GrMail></GrMail>
            <a className="addr">+1-517-9300-792</a>
          </div>
          <div className="contacts">
            <BsBuilding></BsBuilding>
            <a className="addr">
              4288 Indian Glen Drive, Okemos, MI, 48864, USA
            </a>
          </div>
          <div className="contacts">
            <BsBuilding></BsBuilding>
            <a className="addr">
              1628, 16th floor, 9A Building, Gurugram, 122002, India
            </a>
          </div>
        </div>
        <div className="section3">
          <h2>Sitemap</h2>
          <div className="sitemap">
            <div className="sitemap-optn">Services</div>
            <div className="sitemap-optn">Products</div>
            <div className="sitemap-optn">Blogs</div>
            <div className="sitemap-optn">Company</div>
            <div className="sitemap-optn">Resources</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="btm">
        <div className="links">
          <a>
            <BsTwitter></BsTwitter>
          </a>
          <a>
            <BsLinkedin></BsLinkedin>
          </a>
          <a>
            <BsFacebook></BsFacebook>
          </a>
          <a>
            <BsInstagram></BsInstagram>
          </a>
        </div>
        <div className="code-goals">
          <a>Code of Conduct</a>
          <a>Sustainability Goals</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
