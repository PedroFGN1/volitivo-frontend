import { useState } from "react";

import { NavBar } from "./NavBar";
import { NavBarMobile } from "./NavBarMobile";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Features", href: "#", current: false },
  { name: "Marketplace", href: "#", current: false },
  { name: "Company", href: "#", current: false },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <NavBar navigation={navigation} setMobileMenuOpen={setMobileMenuOpen} />
      <NavBarMobile
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};
