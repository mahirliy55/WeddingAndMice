import React from "react";
import { useState } from "react";

export default function Navbar(props) {
  const [navbarOpen] = React.useState(false);


  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between" >
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start logo sm:w-10 ">
            <img src="/img/logo.png" alt="" />
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center mr-4">
                <a className="cursor-pointer font-bold" href="#wedding">Wedding</a>
              </li>
              <li className="flex items-center mr-4">
                <a className="cursor-pointer font-bold" href="#mice">Mice</a>
              </li>

              <li className="flex items-center mr-4 yusifjabrayilov">
                <a className="cursor-pointer font-bold" href="#ourWorks">Our Works</a>
              </li>
              <li className="flex items-center mr-4">
                <a className="cursor-pointer font-bold" href="#reviews">Reviews</a>
              </li>
              <li className="flex items-center mr-4">
                <a className="cursor-pointer font-bold" href="#about">About</a>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-orange-500 text-white text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Enquire
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
