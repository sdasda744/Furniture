import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Outlet } from "react-router-dom";
import Container from "@/components/layouts/Container";

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen text-slate-700 dark:text-slate-200 font-Poppins">
      <Header />
      <Container className="main-container flex-1 py-24 ">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default RootLayout;
