import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavLinkProps = {
  item: {
    name: string;
    href: string;
    current: boolean;
  };
  mobile?: boolean;
};

export const NavLink = ({ item, mobile = false }: NavLinkProps) => {
  if (mobile) {
    return (
      <Link
        key={item.name}
        href={item.href}
        className={cn(
          item.current ? "text-indigo-600" : "text-gray-900 hover:bg-gray-50",
          "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 "
        )}
      >
        <Text>{item.name}</Text>
      </Link>
    );
  }

  return (
    <Link
      key={item.name}
      href={item.href}
      className={cn(
        item.current ? "text-indigo-600" : "text-gray-900 hover:text-gray-700",
        "text-sm font-semibold leading-6"
      )}
    >
      <Text>{item.name}</Text>
    </Link>
  );
};
