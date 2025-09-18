import React from "react";

export const metadata = { title: "Dashboard - Privado" };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <header className="mb-6">
        <h2 className="text-lg font-semibold">Dashboard (rutas privadas)</h2>
        <p className="text-sm text-gray-600">
          Acceso solo para usuarios autenticados
        </p>
      </header>
      <section>{children}</section>
    </div>
  );
}
