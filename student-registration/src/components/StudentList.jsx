import { Link } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";

export default function StudentList() {
  const { students } = useContext(StudentContext);

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