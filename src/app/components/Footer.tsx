import Image from 'next/image';
import Link from 'next/link';
import logo from "./../../../public/logo_top2.png"

const Footer = () => {
  return (
    <footer className="flex bg-black   h-1/4 items-center justify-center">
      <Link href={'/'}>
        <Image src={logo} alt="logo" width={350} height={350} />
      </Link>
    </footer>
  );
};

export default Footer;