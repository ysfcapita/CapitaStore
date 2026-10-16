import { useState } from "react";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";

function Nav({ onChange }) {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuState() {
    setShowMenu(!showMenu);
    onChange(!showMenu);
  }

  return (
    <div className="grid grid-cols-[3fr_1fr_1fr] sticky top-0 shadow-xl bg-linear-to-r from-brand-800 from-35% to-gold-700 to-90% text-white h-20 justify-center items-center px-3">
      <ul className="hidden sm:flex gap-10">
        <li>الرئيسية</li>
        <li>اتصلوا بنا</li>
        <li>سياسة الاسترجاع</li>
      </ul>

      <Menu
        onClick={() => handleMenuState()}
        className={`${!showMenu ? "sm:hidden block hover:cursor-pointer" : "hidden"}`}
      />

      <X
        onClick={() => handleMenuState()}
        className={`${showMenu ? "sm:hidden block  hover:cursor-pointer" : "hidden"}`}
      />
      <img
        className="w-20 col-start-3 justify-self-end"
        src={logo}
        alt="logo"
      />
    </div>
  );
}

export default Nav;
