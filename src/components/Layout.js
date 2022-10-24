import { lazy, useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PostContext } from "../utils/contexts/PostContext";
import { ThemeContext } from "../utils/contexts/ThemeContext";
import Spinner from "./Spinner";

const Navbar = lazy(() => import("./Navbar"));
const Header = lazy(() => import("./Header"));
const Main = lazy(() => import("./Main"));
const User = lazy(() => import("./Users"));

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  const { loading } = useContext(PostContext);
  return (
    <main className={`app ${theme}`}>
      <Navbar />
      <section className="header-main">
        <ToastContainer className={`toast-container ${theme}`} />
        <Header />
        {/* <Main /> */}
        {loading ? <Spinner /> : <User />}
      </section>
    </main>
  );
};

export default Layout;
