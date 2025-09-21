import React from "react";
import Menu from "@/components/menu";
import Footer from "@/components/landing/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Menu />
      {children}
      <Footer showCta={true} />
    </>
  );
}
