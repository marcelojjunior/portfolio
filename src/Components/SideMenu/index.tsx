import { FaRegUser } from "react-icons/fa";
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
            <Link to="/teste" className="item-menu-side">
                <FaRegUser size={20} />
                <span>
                    Projects
                </span>
            </Link>
        </div>
    )
}