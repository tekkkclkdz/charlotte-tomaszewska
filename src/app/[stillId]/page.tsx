"use client"
import { projects } from "../stillProjects";
import Image from 'next/image';

export default function StillId({ stillId }: {
  stillId: string
}) {
  // Znajdź projekt o podanym ID
  const project = projects.find(proj => proj.id.toString() === stillId);

  if (!project) {
    // Jeśli nie znaleziono projektu, zwróć komunikat o błędzie
    return <h1>Projekt nie został znaleziony</h1>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      {/* Wyświetl zawartość projektu */}
      {project.content}
    </div>
  );
}