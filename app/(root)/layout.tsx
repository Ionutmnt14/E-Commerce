import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
