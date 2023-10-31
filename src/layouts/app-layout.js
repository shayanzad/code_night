import Header from "../components/mains/header";
import { Outlet } from "react-router-dom";
function AppLayout() {
    return (
        <div>
            <Header />
            <div className="border p-5 mx-5">
            <Outlet />
            </div>
        </div>
    )
}
export default AppLayout;