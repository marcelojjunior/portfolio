import { FaGithub, FaInstagram, FaLinkedinIn, FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { MdLocationPin, MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SideProfile() {

    return (
        <div className="bg-white py-6 px-6 rounded-lg flex flex-col justify-center items-center gap-3 min-w-72">
            <img className="rounded-lg w-48 h-48 object-cover -mt-32" src="https://github.com/marcelojjunior.png" alt="Profile" />
            <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-lg font-semibold">Marcelo Junior</p>
                <span className="text-sm px-3 py-2 bg-gray-50 rounded-md">
                    Software Engineer
                </span>
                <div className="flex gap-2">
                    <Link to="#" className="p-2 bg-gray-50 rounded-md">
                        <FaGithub size={20} />
                    </Link>
                    <Link to="#" className="p-2 bg-gray-50 rounded-md">
                        <FaInstagram size={20} />
                    </Link>
                    <Link to="#" className="p-2 bg-gray-50 rounded-md">
                        <FaLinkedinIn size={20} />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-2 bg-gray-50 p-3 rounded-md w-full">
                <div className="flex items-center gap-2">
                    <span className="bg-white flex items-center justify-center p-1 rounded-md">
                        <MdOutlineMailOutline size={18} />
                    </span>
                    <div className="flex flex-col">
                        <span className="text-xs font-light">Email</span>
                        <p className="text-sm font-normal">lVg7H@example.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="bg-white flex items-center justify-center p-1 rounded-md">
                        <MdLocationPin size={18} />
                    </span>
                    <div className="flex flex-col">
                        <span className="text-xs font-light">Localização</span>
                        <p className="text-sm font-normal">São Paulo - SP</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="bg-white flex items-center justify-center p-1 rounded-md">
                        <FaRegCalendarAlt size={18} />
                    </span>
                    <div className="flex flex-col">
                        <span className="text-xs font-light">Aniversário</span>
                        <p className="text-sm font-normal">15/10/2000</p>
                    </div>
                </div>
            </div>

            <Link to="#" className="flex justify-center items-center gap-1 text-white rounded-md px-4 py-2 bg-primary-blue">
                <HiOutlineDownload size={20} />
                <span>
                    Baixar CV
                </span>
            </Link>

        </div>
    )
}