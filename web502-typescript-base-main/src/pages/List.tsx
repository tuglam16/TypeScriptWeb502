import axios from "axios";
import { useEffect, useState } from "react";
import { id } from "zod/locales";
interface Course{
  id:string;
  courseName:String
}
function List() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(()=>{
    const getAll = async()=>{
    const{data}=  await axios.get("http://localhost:3000/courses")
    setCourses(data);
  }
getAll()
  },[])

  const deleteCourse = async(id:string)=>{
    if(window.confirm("dong y xoa")){

      await axios.delete("http://localhost:3000/courses"+id)
      setCourses(courses.filter(item => item.id !== id))
    }
  }
  return (
    <div>
      <h1>Danh sách</h1>
      <table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">First</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((item)=>(
            <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.courseName}</td>
            <td><button onClick={()=>deleteCourse(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
