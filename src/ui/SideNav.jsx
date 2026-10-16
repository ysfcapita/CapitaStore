import { useContext } from "react";
import { MenuContext } from "../pages/App";

function SideNav() {
  const { showMenu, setShowMenu } = useContext(MenuContext);
  return (
    <div>
      <ul
        className={`{transition-transform duration-700 w-fit flex flex-col gap-6 px-7 pt-10 text-white h-[calc(100dvh-80px)] shadow-2xl ${showMenu ? "translate-x-0 " : "translate-x-full"} }`}
      >
        <li className="hover-effect">الرئيسية</li>
        <li className="hover-effect">اتصلوا بنا</li>
        <li className="hover-effect">سياسة الاسترجاع</li>
      </ul>
    </div>
  );
}

export default SideNav;
