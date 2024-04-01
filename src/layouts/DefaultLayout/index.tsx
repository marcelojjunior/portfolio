import { Outlet } from "react-router-dom";
import SideMenu from "../../Components/SideMenu";
import SideProfile from "../../Components/SideProfile";
import SwitchLanguage from "../../Components/SwitchLanguage";

export default function DefaultLayout() {
    return (
        <div className="">
            <div className="flex flex-col gap-4 container mx-auto pt-5 md:pt-16 pb-4 px-4 lg:px-0">
                <div className="w-full flex justify-end mb-32 md:mb-0">
                    <SwitchLanguage />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <aside>
                        <SideProfile />
                    </aside>
                    <main className="w-full">
                        <div className="block lg:hidden mb-4">
                            <SideMenu />
                        </div>
                        <Outlet />
                    </main>
                    <nav className="hidden lg:block">
                        <SideMenu />
                    </nav>
                </div>
            </div>
        </div>
    )
}