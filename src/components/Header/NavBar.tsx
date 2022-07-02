import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="w-full py-3 flex items-center justify-center bg-blue-500 border-b-1-gray-500">
            <Link to="/">
                <img 
                    src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png" 
                    alt="Blog sobre WordPress">
                </img>
            </Link>
        </nav>
    )
}