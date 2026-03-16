import { useParams } from "react-router-dom";

const studentData = [
  { id: 1, name: "John Doe", email: "john@example.com", course: "Math" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", course: "Science" },
];

export default function StudentDetails() {
  const { id } = useParams();
  const student = studentData.find((s) => s.id === parseInt(id));

  if (!student) return <p>Student not found.</p>;

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}