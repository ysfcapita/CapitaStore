import { useState } from "react";
import Nav from "../ui/Nav.jsx";
import SideNav from "../ui/SideNav.jsx";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-linear-to-l from-brand-800 from-35% to-gold-700 to-90% min-h-screen min-w-50 flex flex-col">
      <Nav onChange={setShowMenu} />
      <SideNav showMenu={showMenu} />
    </div>
  );
}

export default App;
