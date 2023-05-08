import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavLink } from "./NavLink";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Logo } from "./logo";
import Link from "next/link";

type NavBarProps = {
  navigation: {
    name: string;
    href: string;
    current: boolean;
  }[];
  setMobileMenuOpen: (open: boolean) => void;
};

export const NavBar = ({ navigation, setMobileMenuOpen }: NavBarProps) => {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="#" className="-m-1.5 p-1.5">
          <Logo />
        </Link>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <NavLink key={item.name} item={item} />
        ))}
      </div>
      <div className="flex flex-1 items-center justify-end gap-x-6">
        <Button variant="ghost" className="hidden lg:block">
          <Text>Entrar</Text>
        </Button>
        <Button variant="default" size="sm">
          <Text className="text-white">Cadastre-se</Text>
        </Button>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};
