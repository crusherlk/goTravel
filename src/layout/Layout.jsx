import React from "react";
import {
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoFacebookCircle,
} from "react-icons/bi";

export const Layout = (props) => {
  return (
    <div>
      {/* navigation */}
      <nav className="id_navbar container mx-auto flex justify-between items-center py-8">
        <div className="id_logo ">
          <h1 className="font-montserrat font-bold text-2xl uppercase">
            GoTravel
          </h1>
        </div>
        <ul className="flex gap-8">
          <li className="link">Home</li>
          <li className="link">Service</li>
          <li className="link">Destination</li>
          <li className="link">Contacts</li>
          <li className="link">Documentation</li>
        </ul>
        <div className="id_buttons flex gap-4">
          <button className="btn-sm">Login</button>
          <button className="btn-sm text-gtBlack bg-transparent border-2 border-gtGray">
            Register
          </button>
        </div>
      </nav>

      {/* content */}
      <div className="">{props.children}</div>

      {/* footer */}
      <footer className="container mx-auto">
        {/* callToAction */}
        <div className="flex gap-8 my-16">
          <h2 className="font-montserrat uppercase font-bold text-7xl basis-1/2">
            Let's run out your passport
          </h2>
          <div className="basis-1/2 flex items-end justify-end gap-4">
            <input
              className="flex-1 inputbox"
              type="email"
              name="email"
              placeholder="gotravel@gmail.com"
            />
            <button className="btn">Get Started</button>
          </div>
        </div>
        {/* custom section break */}
        <div className="flex items-center my-16">
          <div className="w-2 h-2 rounded-full bg-gtDarkGray"></div>
          <div className="w-full h-0.5 bg-gtDarkGray"></div>
          <div className="w-2 h-2 rounded-full bg-gtDarkGray"></div>
        </div>
        <div className="flex justify-center my-16">
          <ul className="flex gap-8">
            <li className="link">Home</li>
            <li className="link">Service</li>
            <li className="link">Destination</li>
            <li className="link">Contacts</li>
            <li className="link">Documentation</li>
          </ul>
        </div>
        <div className="flex justify-center gap-16 text-gtBlack text-2xl my-16">
          <BiLogoInstagramAlt />
          <BiLogoTwitter />
          <BiLogoFacebookCircle />
        </div>
        <div className="flex flex-col items-center gap-2 mb-16">
          <p className="text-gtDarkGray">
            Designed By{" "}
            <a
              className="underline hover:text-gtBlue"
              href="https://dribbble.com/shots/22010895-GoTravel-Travel-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hans Christian
            </a>
          </p>
          <p className="text-gtDarkGray">
            Developed By{" "}
            <a
              className="underline hover:text-gtBlue"
              href="http://crusherlk.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crusherlk ✌
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
