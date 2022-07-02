import { MailItem } from "../../../assets/MailItem";

export function SubscribeComponent() {
    return (
        <div className="xl:mx-52 py-12 border-t border-gray-500 flex flex-col justify-center text-center">
            <div className="flex w-full justify-center">
                <MailItem />
            </div>
            <div>
                <strong className="font-bold text-3xl">
                    Inscreva-se no Blog da Apiki!
                </strong>
                <p className="text-gray-200 py-2">
                    Inscreva-se para nunca perder as nossas novas publicações e para sempre acompanhar nossos conteúdos sobre<br />
                    <span className="text-zinc-100"> Wordpress.</span>
                </p>
            </div>
            <div className="flex my-4 justify-center">
                <input 
                    type="text"
                    placeholder="Insira seu e-mail"
                    className="bg-gray-500 text-gray-200 text-lg w-60 p-2 rounded-l-lg outline-0 hover:bg-gray-800 transition-colors"
                >
                </input>
                <div className="w-20 bg-blue-500 rounded-r-lg flex items-center justify-center">
                    <button className="font-bold text-xs" type="submit">
                        Inscrever
                    </button>
                </div>
            </div>
        </div>
    )
}