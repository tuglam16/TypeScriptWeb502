import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
interface FormData{
  courseName:string;
}
function Add() {
  const {register, handleSubmit} = useForm<FormData>();
  const nav = useNavigate();
  const onSubmit =async (values:FormData)=>{
    await axios.post("http://localhost:3000/courses",values)
    
      toast.success("them thanh cong")
      nav("/courses")
  }

  return (
    <div>
      <h1>Thêm mới</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            CourseName
          </label>
          <input {...register("courseName")} type="text" className="form-control" id="text" />
        </div>


        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
