import { Link } from "react-router-dom";
import { useState } from "react";

// Sample students
const initialStudents = [
  { id: 1, name: "John Doe", email: "john@example.com", course: "Math" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", course: "Science" },
];

export default function StudentList() {
  const [students] = useState(initialStudents);

  return (
    <ul className="student-list">
      {students.map((student) => (
        <li key={student.id} className="card">
          <Link to={`/student/${student.id}`} className="student-link">
            <h3>{student.name}</h3>
            <p>{student.course}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}