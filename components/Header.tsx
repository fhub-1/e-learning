import Image from "next/image";
import LOGO from "../public/Logo.png";

function Header() {
    return (
        <header className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-orange-400">
            <div className="lex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div className ="flex items-center flex-shrink-0 text-gray-800 mr-16">
                <span className="font-semibold text-xl tracking-tight">
                  <Image src={LOGO} className="cursor-pointer "/>
                </span>
            </div>
            </div>
        </header >
    )
}

export default Header
