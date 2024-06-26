import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram, FaLinkedinIn, FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { MdLocationPin, MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

import profilePdf from '../../assets/pdf/profile.pdf'

export default function SideProfile() {
    const { t } = useTranslation();

    return (
        <div className="bg-white py-6 px-6 rounded-lg flex flex-col justify-center items-center gap-3 w-full md:min-w-72">
            <img className="rounded-lg w-48 h-48 object-cover -mt-32" src="https://github.com/marcelojjunior.png" alt="Profile" />
            <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-lg font-semibold">Marcelo Junior</p>
                <span className="text-sm px-3 py-2 bg-gray-100 rounded-md">
                    {t('software_engineer')}
                </span>
                <div className="flex gap-2">
                    <Link to="https://github.com/marcelojjunior" target="_blank" className="p-2 bg-gray-100 rounded-md hover:bg-primary-blue hover:text-white">
                        <FaGithub size={20} />
                    </Link>
                    <Link to="https://www.instagram.com/marcelojjunior_/" target="_blank" className="p-2 bg-gray-100 rounded-md hover:bg-primary-blue hover:text-white">
                        <FaInstagram size={20} />
                    </Link>
                    <Link to="https://www.linkedin.com/in/marcelojjunior/" target="_blank" className="p-2 bg-gray-100 rounded-md hover:bg-primary-blue hover:text-white">
                        <FaLinkedinIn size={20} />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col bg-gray-100 p-3 rounded-md w-full divide-y">
                <div className="flex items-center gap-2 py-2">
                    <span className="bg-white flex items-center justify-center p-1 rounded-md">
                        <MdOutlineMailOutline size={18} />
                    </span>
                    <div className="flex flex-col">
                        <span className="text-xs font-light">{t('email')}</span>
                        <p className="text-sm font-normal">marcelovfjjunior@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 py-2">
                    <span className="bg-white flex items-center justify-center p-1 rounded-md">
                        <MdLocationPin size={18} />
                    </span>
                    <div className="flex flex-col">
                        <span className="text-xs font-light">{t('location')}</span>
                        <p className="text-sm font-normal">São Paulo - SP</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 py-2">
                    <span className="bg-white flex items-center justify-center p-1 rounded-md">
                        <FaRegCalendarAlt size={18} />
                    </span>
                    <div className="flex flex-col">
                        <span className="text-xs font-light">{t('birthday')}</span>
                        <p className="text-sm font-normal">15/10/2000</p>
                    </div>
                </div>
            </div>

            <a href={profilePdf} download className="flex justify-center items-center gap-1 text-white rounded-md px-4 py-2 bg-primary-blue hover:opacity-80">
                <HiOutlineDownload size={20} />
                <span>
                    {t('download_cv')}
                </span>
            </a>

        </div>
    )
}