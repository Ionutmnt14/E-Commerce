import Footer from "@/components/homePage/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      {children}
      <footer className="pt-64">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
