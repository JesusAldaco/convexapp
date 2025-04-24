'use client'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TablaAlumnos () {
    const alumnos = useQuery(api.alumno.getAlumno)

  if (alumnos === undefined) {
    return <div>Loading...</div>
  }

  return (
    <div>
        <Table>
        <TableCaption> Lista de alumnos registrados </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Matricula</TableHead>
            <TableHead>Carrera</TableHead>
            <TableHead>Contacto</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alumnos.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No hay estudianes registrados
              </TableCell>
            </TableRow>
          ):(
            alumnos.map((alumno) => (
              <TableRow key={alumno.matricula}>
                <TableCell>{alumno.nombre}</TableCell>
                <TableCell>{alumno.matricula}</TableCell>
                <TableCell>{alumno.carrera}</TableCell>
                <TableCell>{alumno.contacto}</TableCell>
                <TableCell><Button>Editar</Button></TableCell>
                <TableCell><Button>Eliminar</Button></TableCell>
              </TableRow>
            ))
          )}
          {/* {alumnos.map((alumno) => (
            <TableRow key={alumno.matricula}>
              <TableCell>{alumno.nombre}</TableCell>
              <TableCell>{alumno.matricula}</TableCell>
              <TableCell>{alumno.carrera}</TableCell>
              <TableCell>{alumno.contacto}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </div>
  )
}