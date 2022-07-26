
export default function Footer() {
    return (

        <footer className="flex items-center justify-center w-full h-24 border-t bg-gray-700 text-gray-300">
            <a
                className="flex items-center justify-center"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <img src="https://apiki.com/wp-content/uploads/2020/11/logo-apiki-site-01.png" alt="Apiki Logo" className="h-4 ml-2" />
            </a>
        </footer>
    );
}