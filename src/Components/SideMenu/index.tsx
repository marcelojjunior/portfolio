import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaRegFileAlt, FaRegUser } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

export default function SideMenu() {
    const { t } = useTranslation();
    const [active, setActive] = useState<'about' | 'projects' | 'contact' | 'resume'>('about');

    const location = useLocation();

    useEffect(() => {
        var path = location.pathname;

        if(path === '/') {
            setActive('about');
        } else if(path === '/projects') {
            setActive('projects');
        } else if(path === '/contact') {
            setActive('contact');
        } else if(path === '/resume') {
            setActive('resume');
        }
    }, [location]);

    return (
        <div className="bg-white p-4 rounded-lg flex flex-col gap-3">
            <Link to="/" className={`item-menu-side ${active === 'about' ? 'bg-primary-blue text-white' : 'bg-white'}`}>
                <FaRegUser size={20} />
                <span>
                    {t('about')}
                </span>
            </Link>
            <Link to="/resume" className={`item-menu-side ${active === 'resume' ? 'bg-primary-blue text-white' : 'bg-white'}`}>
                <FaRegFileAlt size={20} />
                <span>
                    {t('resume')}
                </span>
            </Link>
            <Link to="/projects" className={`item-menu-side ${active === 'projects' ? 'bg-primary-blue text-white' : 'bg-white'}`}>
                <BsSuitcaseLg size={20} />
                <span>
                    {t('projects')}
                </span>
            </Link>
            <Link to="/contact" className={`item-menu-side ${active === 'contact' ? 'bg-primary-blue text-white' : 'bg-white'}`}>
                <TiContacts size={20} />
                <span>
                    {t('contact')}
                </span>
            </Link>
        </div>
    )
}