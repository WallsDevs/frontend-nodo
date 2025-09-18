import React from "react";

export const metadata = { title: "Admin - Dashboard" };

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 bg-white border rounded">
      <header className="mb-4">
        <h2 className="text-lg font-semibold">Admin Dashboard (privado)</h2>
        <p className="text-sm text-gray-600">
          Gestión de cursos, usuarios y pagos
        </p>
      </header>
      <main>{children}</main>
    </div>
  );
}
