import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
interface FormData{
  courseName:string;
}
function Edit() {
  const {register, handleSubmit, reset} = useForm<FormData>();
  const {id} = useParams();
  const nav = useNavigate();
  useEffect(()=>{
    const getById = async()=>{
    const{data}=  await axios.get(`http://localhost:3000/courses/${id}`)
    reset(data);
  };
  if(id){
    getById()
  }
  },[id])
  const onSubmit =async (value:FormData)=>{
    await axios.put(`http://localhost:3000/courses/${id}`,value)
    toast.success("sua thanh cong")
    nav("/courses")
  }

  return (
    <div>
      <h1>Sua</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Text
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

export default Edit;
