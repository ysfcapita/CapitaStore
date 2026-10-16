import { useContext } from "react";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";
import { MenuContext } from "../pages/App";

function Nav() {
  const { showMenu, setShowMenu } = useContext(MenuContext);
  return (
    <div className="grid grid-cols-[1fr_10fr_1fr] sticky top-0 shadow-xl bg-linear-to-r from-brand-800 from-35% to-gold-700 to-90% text-white h-20 justify-center items-center px-3">
      <Menu
        onClick={() => setShowMenu(!showMenu)}
        className={`${!showMenu ? "hover:cursor-pointer" : "hidden"}`}
      />

      <X
        onClick={() => setShowMenu(!showMenu)}
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
