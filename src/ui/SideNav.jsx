import { useContext } from "react";
import { MenuContext } from "../pages/App";

function SideNav() {
  const { showMenu, setShowMenu } = useContext(MenuContext);
  return (
    <div>
      <ul
        className={`{transition-transform duration-700 w-fit flex flex-col gap-6 px-7 pt-10 text-white h-[calc(100dvh-80px)] shadow-2xl ${showMenu ? "translate-x-0 " : "translate-x-full"} }`}
      >
        <li>الرئيسية</li>
        <li>اتصلوا بنا</li>
        <li>سياسة الاسترجاع</li>
      </ul>
    </div>
  );
}

export default SideNav;
