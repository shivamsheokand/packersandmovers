"use client";
import { Navbar } from "../app/NavbarDemo";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
