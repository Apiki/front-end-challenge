import { Link } from "react-router-dom";
import { FacebookLogo, LinkedinLogo, TelegramLogo, WhatsappLogo } from "phosphor-react";

export function Aside() {
    return (
        <aside className="media-aside sticky top-5 h-full w-[100px]">
            <div className="p-3 bg-blue-600 flex justify-center items-center cursor-pointer">
                <FacebookLogo size={36} />
            </div>
            <div className="p-3 bg-blue-500 flex justify-center items-center cursor-pointer">
                <LinkedinLogo size={36} />
            </div>
            <div className="p-3 bg-green-800 flex justify-center items-center cursor-pointer">
                <WhatsappLogo size={36} />
            </div>
            <div className="p-3 bg-cyan-500 flex justify-center items-center cursor-pointer">
                <TelegramLogo size={36} />
            </div>
            <div className="my-5">
                <Link to="/" className="px-2 bg-gray-500 border border-bg-gray-200 hover:bg-gray-800 transition-colors">
                    <span>Voltar</span>
                </Link>
            </div>
        </aside>
    )
}