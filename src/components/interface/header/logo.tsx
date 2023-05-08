import Image from "next/image";
import logo from "public/logo.png"

export const Logo = () => {
  return (
    <>
      <span className="sr-only">Volitivo</span>
      <Image className="" src={logo} width={50} height={50} alt="Volitivo" />
    </>
  );
};
