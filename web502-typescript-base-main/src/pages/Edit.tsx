import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
interface FormData{
  courseName:string;
}
function Edit() {
  const {register, handleSubmit, reset} = useForm<FormData>();
  const {id} = useParams();

  useEffect(()=>{
    const getById = async()=>{
    const{data}=  await axios.put("http://localhost:3000/courses"+id)
    reset(data);
  }
  getById()
  },[id])
  const onSubmit =async (value:FormData)=>{
    await axios.put("http://localhost:3000/courses"+id,value)
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

        <div className="mb-3">
          <label htmlFor="radio" className="form-label">
            Radio
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheck1"
            />
            <label className="form-check-label" htmlFor="flexCheck1">
              checkbox 1
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheck2"
            />
            <label className="form-check-label" htmlFor="flexCheck2">
              checkbox 2
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="radio" className="form-label">
            Checkbox
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadio1"
            />
            <label className="form-check-label" htmlFor="flexRadio1">
              Checkbox 1
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadio2"
            />
            <label className="form-check-label" htmlFor="flexRadio2">
              Checkbox 2
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="selectOption" className="form-label">
            Select - option
          </label>
          <select className="form-select">
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Edit;
