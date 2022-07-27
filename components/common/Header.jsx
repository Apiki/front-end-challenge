import Image from 'next/image';
import Link from "next/link";

export const Header = () => (
    <header>
        <Link href={`/`} title="Início" className='logo'>
            <Image
                alt="Picture of the author"
            />
        </Link>
    </header>
)