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
    <div className="grid grid-cols-[1fr_10fr_1fr] sticky top-0 shadow-xl bg-linear-to-r from-brand-800 from-35% to-gold-700 to-90% text-white h-20 justify-center items-center px-3">
      <Menu
        onClick={() => handleMenuState()}
        className={`${!showMenu ? "hover:cursor-pointer" : "hidden"}`}
      />

      <X
        onClick={() => handleMenuState()}
        className={`${showMenu ? "hover:cursor-pointer" : "hidden"}`}
      />

      <ul className={`${showMenu ? "hidden" : "hidden sm:flex gap-10"}`}>
        <li>الرئيسية</li>
        <li>اتصلوا بنا</li>
        <li>سياسة الاسترجاع</li>
      </ul>

      <img
        className="w-20 col-start-4 justify-self-end"
        src={logo}
        alt="logo"
      />
    </div>
  );
}

export default Nav;
