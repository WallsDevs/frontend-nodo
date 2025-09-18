import api from "@/lib/api";

export async function createCompra(payload: {
  usuarioId: string;
  cursoId: string;
  monto: number;
  metodoPago?: string;
}) {
  // Delega al backend la creación de la compra y el manejo de pago (Stripe integration por backend)
  const res = await api.post("/compras", payload);
  return res.data;
}

export async function getComprasByUsuario(usuarioId: string) {
  const res = await api.get(`/compras?usuarioId=${usuarioId}`);
  return res.data;
}
