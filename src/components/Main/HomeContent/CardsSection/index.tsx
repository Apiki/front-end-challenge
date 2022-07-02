import { Cards } from "./Cards";

export function CardsSection() {
    return (
        <div className="sm:mx-[15px] flex flex-col">
            <div className="flex items-center justify-end text-xs sm:text-3xl text-blue-500 my-4">
                <svg width="80" height="2" viewBox="0 0 126 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="px-2">
                    <line x1="0.998047" y1="1" x2="125.002" y2="1" stroke="#66F6FF"/>
                </svg>

                <span>
                    Últimas Publicações
                </span>
            </div>
            
            <Cards />
        </div>
    )
}