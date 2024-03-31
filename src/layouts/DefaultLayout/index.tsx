import { Outlet } from "react-router-dom";
import SideMenu from "../../Components/SideMenu";
import SideProfile from "../../Components/SideProfile";
import SwitchLanguage from "../../Components/SwitchLanguage";

export default function DefaultLayout() {
    return (
        <div className="">
            <div className="flex flex-col gap-4 container mx-auto pt-28 pb-4 px-4 md:px-0">
                <div className="w-full flex justify-end">
                    <SwitchLanguage />
                </div>
                <div className="flex justify-between gap-4">
                    <aside>
                        <SideProfile />
                    </aside>
                    <main className="w-full">
                        <Outlet />
                    </main>
                    <nav>
                        <SideMenu />
                    </nav>
                </div>
            </div>
        </div>
    )
}