import { createContext, useState } from "react";
import Nav from "../ui/Nav.jsx";
import SideNav from "../ui/SideNav.jsx";
import Footer from "../ui/Footer.jsx";

export const MenuContext = createContext();

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      <div className="bg-linear-to-l from-brand-800 from-35% to-gold-700 to-90% min-h-screen min-w-80 flex flex-col">
        <Nav />
        <SideNav />
        <Footer />
      </div>
    </MenuContext.Provider>
  );
}

export default App;
