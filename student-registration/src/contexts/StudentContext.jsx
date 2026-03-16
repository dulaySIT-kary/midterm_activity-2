import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", course: "Math" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", course: "Science" },
  ]);

  const addStudent = (student) => {
    const newStudent = { id: students.length + 1, ...student };
    setStudents([...students, newStudent]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
}