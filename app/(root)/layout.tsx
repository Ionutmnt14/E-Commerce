import Footer from "@/components/homePage/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ContextProvider } from "@/context/Context";
import { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <ContextProvider>
      <div>
        <nav>
          <Navbar />
        </nav>
        <ContextProvider>{children}</ContextProvider>
        <footer className="pt-64">
          <Footer />
        </footer>
      </div>
    </ContextProvider>
  );
};

export default RootLayout;
