import React, { useState } from "react";
import CloseIcon from "../utils/CloseIcon";
import Button from "../utils/Button";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between mx-auto items-center pt-4 md:pt-12">
        <Logo />
        <div className="hidden md:block">
          <Navbar direction="horizontal" theme="light" />
        </div>
        <Button
          variant="outline-button"
          className="hidden md:block px-6 md:px-9 text-xs md:text-sm lg:text-base"
          pill
          href="#contact"
        >
          Kontak
        </Button>
        <button className="md:hidden" onClick={() => setMobileMenu(true)}>
          <img
            src="/static/bar-icon.png"
            alt="bars"
            className="w-auto h-auto"
          />
        </button>
      </div>
      <div
        className={`fixed top-0 h-full w-full bg-white z-10 transition-all p-5 ${
          mobileMenu ? "left-0" : "left-full"
        }`}
      >
        <div className="w-full flex justify-end mb-4">
          <button onClick={() => setMobileMenu(false)}>
            <CloseIcon />
          </button>
        </div>
        <Navbar
          direction="vertical"
          theme="dark"
          closeMobileMenu={() => setMobileMenu(false)}
        />
      </div>
    </>
  );
}
