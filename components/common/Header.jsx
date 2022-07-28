import Image from 'next/image';
import Link from "next/link";
import Logo from "../../public/images/logo.webp";

export const Header = () => (
    <header>
        <Link href={`/`} title="Início" className='logo'>
            <img
                src={Logo.src}
                alt="Logo"
                width={"140px"}
                height={"40px"}
            />
        </Link>
    </header>
)