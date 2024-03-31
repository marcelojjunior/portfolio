import { Outlet } from "react-router-dom";
import SideMenu from "../../Components/SideMenu";
import SideProfile from "../../Components/SideProfile";

export default function DefaultLayout() {
    return (
        <div className="bg-shiny h-screen">
            <div className="flex justify-between gap-4 container mx-auto pt-40 pb-4 px-4 md:px-0">
                <aside>
                    <SideProfile />
                </aside>
                <main>
                    <Outlet />
                </main>
                <nav>
                    <SideMenu />
                </nav>
            </div>
        </div>
    )
}