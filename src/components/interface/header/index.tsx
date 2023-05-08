import { useState } from "react";

import { NavBar } from "./NavBar";
import { NavBarMobile } from "./NavBarMobile";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Questões", href: "#", current: false },
  { name: "Disciplinas", href: "#", current: false },
  { name: "Materiais Didáticos", href: "#", current: false },
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
