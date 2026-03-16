import { useForm } from "react-hook-form";
import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";

export default function StudentForm() {
  const { addStudent } = useContext(StudentContext);
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    addStudent(data);
    alert("Student registered successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register("name", { required: "Name is required" })} />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input 
          {...register("email", { 
            required: "Email is required", 
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } 
          })} 
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div>
        <label>Course:</label>
        <input {...register("course", { required: "Course is required" })} />
        {errors.course && <p className="error">{errors.course.message}</p>}
      </div>

      <button type="submit" disabled={!isValid}>Register</button>
    </form>
  );
}