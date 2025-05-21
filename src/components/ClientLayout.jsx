"use client";
import { Navbar } from "../app/NavbarDemo";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
