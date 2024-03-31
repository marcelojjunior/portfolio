import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import { Home, Projects, Contact } from "./routes";
import DefaultLayout from "../layouts/DefaultLayout";

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<PublicRoutes />}>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Route>
    )
)