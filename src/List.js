import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const List =  () =>{


    const [totos,setTodos] = useState([]);

    const nav = useNavigate();


    const edit = (data)=>{

        console.log(data);

        nav('/edit/'+data._id);

    }

    useEffect(()=>{

        axios.get('https://crudcrud.com/api/a7b2b44075644970a7c6f710cc41d84c/unicorns')
        .then((res)=>{
            setTodos(res.data);
            console.log(res.data);
        })

    },[])
    return <>
    
    
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Todo name</th>
      <th scope="col">Edite</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>

    {totos.map((item,index)=>{
        return <>
         <tr>
      <th scope="row">{index+1}</th>
      <td>{item.name}</td>
      <td>

        <button onClick={()=>{
            edit(item);
        }} className="btn btn-info">Edit</button>
      </td>
      <td> <button className="btn btn-danger">Delete</button> </td>
    </tr>
        
        </>
    })}
   

  </tbody>
</table>
    
    </>
}

export default List;