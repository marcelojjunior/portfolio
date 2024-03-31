import { BsSuitcaseLg } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function SideMenu() {
    return (
        <div className="bg-white p-4 rounded-lg flex flex-col gap-3">
            <Link to="/" className="item-menu-side">
                <FaRegUser size={20} />
                <span>
                    About
                </span>
            </Link>
            <Link to="/projects" className="item-menu-side">
                <BsSuitcaseLg size={20} />
                <span>
                    Projects
                </span>
            </Link>
            <Link to="/contact" className="item-menu-side">
                <TiContacts size={20} />
                <span>
                    Contato
                </span>
            </Link>
        </div>
    )
}