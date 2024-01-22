import "./globals.scss";
import { Inter } from "next/font/google";
// import connectToDb from "@/lib/db";
// eslint-disable-next-line import/extensions
import Navbar from "./components/Shared/NavBar/Navbar.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Home",
  description: "Next JS Template",
  manifest: "/manifest.webmanifest",
};

// connectToDb();

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
