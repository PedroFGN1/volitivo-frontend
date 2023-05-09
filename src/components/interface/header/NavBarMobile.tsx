import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "./NavLink";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import Link from 'next/link';
import { Logo } from './logo';

type NavBarMobileProps = {
  navigation: {
    name: string;
    href: string;
    current: boolean;
  }[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

export const NavBarMobile = ({
  navigation,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavBarMobileProps) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center gap-x-6">
          <Link href="src\components\pages\home\index.tsx" className="-m-1.5 p-1.5">
            <Logo />
            <Text className='font-sans'>Volitivo</Text>
          </Link>
          <Button variant='default' size='sm' className="ml-auto">
            <Text className='text-white'>Cadastre-se</Text>
            </Button>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Fechar menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                  <NavLink key={item.name} item={item} mobile />
              ))}
            </div>
            <div className="py-6">
              <Button className="ml-24 ">
                <Text className='text-white'>Login</Text>
              </Button>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
