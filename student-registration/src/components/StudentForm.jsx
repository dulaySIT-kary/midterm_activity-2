import { useForm } from "react-hook-form";
import { useState } from "react";

export default function StudentForm() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "onChange"
  });
  const [students, setStudents] = useState([]);

  const onSubmit = (data) => {
    const id = students.length + 1;
    setStudents([...students, { id, ...data }]);
    alert("Student Registered Successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px" }}>
      <div>
        <label>Name:</label>
        <input
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        <label>Course:</label>
        <input
          {...register("course", { required: "Course is required" })}
        />
        {errors.course && <p style={{ color: "red" }}>{errors.course.message}</p>}
      </div>

      <button type="submit" disabled={!isValid}>Register</button>
    </form>
  );
}