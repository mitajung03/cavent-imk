import Image from "next/image";
import Navbar from "../components/navbar";

const Registrant = () => {

    return(
        <div className="flex flex-col items-center justify-start min-h-screen bg-white px-4 border border-gray-300 pb-16">
            <div className="w-full max-w-xs">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <Image
                    src="/logo.svg"
                    alt="Cavent Logo"
                    width={110}
                    height={110}
                    className="object-contain"
                  />
                </div>
            </div>
            <Navbar/>
        </div>
    )
}
export default Registrant;