import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import { Home, Teste } from "./routes";
import DefaultLayout from "../layouts/DefaultLayout";

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<PublicRoutes />}>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="/teste" element={<Teste />} />
            </Route>
        </Route>
    )
)