import StudentForm from "../components/StudentForm";

export default function Register() {
  return (
    <div className="page-container">
      <h1>Register Student</h1>
      <div className="card">
        <StudentForm />
      </div>
    </div>
  );
}