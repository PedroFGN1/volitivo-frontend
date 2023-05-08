import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <span className="sr-only">Volitivo</span>
      <Image className="h-auto w-auto" src="public\logo.png" alt="Volitivo" />
    </>
  );
};
