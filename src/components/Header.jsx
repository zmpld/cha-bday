import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full h-20 flex
    items-center z-40 bg-gradient-to-b from-zinc-900
    to-zinc-900/0"
    ></header>
  );
};

export default Header;
