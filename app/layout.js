import "./globals.css";
import { Inter } from "next/font/google";
import Cartcontext from "@/components/Cartcontext";
import "semantic-ui-css/semantic.min.css";
import SidebarContext from "@/components/SidebarContext";
import Bottomnav from "@/components/Bottomnav";
import SideBar from "@/components/SideBar";
import SwipeNavbar from "@/components/SwipeNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Transate word",
  description: "Just transalte",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SidebarContext>
        <Cartcontext>
          <body className={inter.className}>
            <SideBar>
              {children}
              <Bottomnav />
            </SideBar>
          </body>
        </Cartcontext>
      </SidebarContext>
    </html>
  );
}
