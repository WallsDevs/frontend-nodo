import api from "@/lib/api";

export async function getCursos() {
  // Ajustar query según Strapi: este es un ejemplo genérico
  const res = await api.get("/cursos?activo=true");
  return res.data;
}

export async function getCursoBySlug(slug: string) {
  const res = await api.get(`/cursos/${slug}`);
  return res.data;
}

export async function getContenidoCurso(cursoId: string) {
  const res = await api.get(`/cursos/${cursoId}/contenido`);
  return res.data;
}
