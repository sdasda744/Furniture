import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen text-slate-700 dark:text-slate-200 font-Poppins">
      <Header />
      <main className="flex-1 py-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
