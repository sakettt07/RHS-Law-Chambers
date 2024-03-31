import React from "react";
import "./Footer.css";
import img1 from "../assets/images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";

const Footer = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <div className="flex gap-3 items-center">
            <img className="w-20" src={img1} alt="" />
            <h3 className="text-black text-[14px] md:text-[20px]">
              RHS Law Chambers
            </h3>
          </div>

          <p class="footer-links">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </p>
          <p class="footer-company-name">RHS Law Chambers © 2023</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>C/164, Dayanand Colony,</span> Lajpat Nagar-IV, NewDelhi
            </p>
          </div>

          <div>
            <div className="flex mt-3 items-center gap-3">
            <FaPhoneAlt />
            <p>+91 9910492018</p>
            <p>8860851581</p>
            </div>
            <div className="flex mt-3 justify-center md:justify-normal items-center gap-2">
              <GiRotaryPhone />
              <p>011-61381734</p>
            </div>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">rhslawchambers@gmail.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            RHS Law Chambers is a full-service, general-practice law firm,
            delivering expert legal advice to corporates and individual
            litigants.
          </p>

          <div className="footer-icons flex gap-3 justify-center md:justify-normal items-center">
            <FaXTwitter className="text-[30px]" />
            <FaLinkedin className="text-[30px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
