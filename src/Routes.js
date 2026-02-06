import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Games from "./Pages/Games";
import PageNotFound from "./Pages/PageNotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/games" element={<Games />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;