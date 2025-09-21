"use client";
import React from "react";
import Menu from "@/components/menu";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideCta = pathname === "/login" || pathname === "/registro";
  return (
    <>
      <Menu />
      {children}
      <Footer showCta={!hideCta} />
    </>
  );
}
