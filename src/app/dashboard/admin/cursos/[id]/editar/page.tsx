type Props = { params: { id: string } };

export default function AdminCursoEditarPage({ params }: Props) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Admin - Editar Curso</h1>
      <p>Ruta: /dashboard/admin/cursos/{params.id}/editar</p>
      <p>Formulario para editar datos del curso.</p>
    </main>
  );
}
