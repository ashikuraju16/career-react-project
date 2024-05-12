import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Layout = () => {
  return <div >
  <div className="bg-white">
    <Header />
    <Outlet />
  </div>
<Footer />
  </div>;
};

export default Layout;
