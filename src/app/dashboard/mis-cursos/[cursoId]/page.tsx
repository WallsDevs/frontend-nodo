type Props = { params: { cursoId: string } };

export default function CursoContenidoPage({ params }: Props) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Contenido del Curso — Privado</h1>
      <p>Ruta: /dashboard/mis-cursos/{params.cursoId}</p>
      <p>Lista de lecciones (videos, materiales) para el curso.</p>
    </main>
  );
}
