import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const List =  () =>{


    const [totos,setTodos] = useState([]);

    const nav = useNavigate();


    const getData = ()=>{
      axios.get('https://crudcrud.com/api/8fcd4c40431a40218b949a2be84c3558/unicorns')
      .then((res)=>{
          setTodos(res.data);
          console.log(res.data);
      })
    }


    const edit = (data)=>{

        console.log(data);

        nav('/edit/'+data._id);

    }


    const updateStatus  = (item)=>{

      var id = item._id;
      var data = item;
      data.status = 'completed';
      delete data._id;
      
      axios.put('https://crudcrud.com/api/8fcd4c40431a40218b949a2be84c3558/unicorns/'+id,item)
            .then((res)=>{
                getData();
    
            })


    }


    const deleteToto = (item) => {
      confirmAlert({
        title: 'Confirm to Delete',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () =>{


              axios.delete('https://crudcrud.com/api/8fcd4c40431a40218b949a2be84c3558/unicorns/'+item._id)
              .then((res)=>{
                getData();
              })

            }
          },
          {
            label: 'No',
            onClick: () => {

            }
          }
        ]
      });
    };

    useEffect(()=>{

      getData();

    },[])
    return <>
    
    
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Todo name</th>
      <th scope="col">Update Status</th>
      <th scope="col">Edit</th>
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
       updateStatus(item);
        }} className="btn btn-primary">
          
            {item.status?'Completed':'Pending'}
           </button>

      </td>
      <td>

        <button onClick={()=>{
            edit(item);
        }} className="btn btn-info">Edit</button>
      </td>
      <td> <button onClick={()=>{
        deleteToto(item);
      }} className="btn btn-danger">Delete</button> </td>
    </tr>
        
        </>
    })}
   

  </tbody>
</table>
    
    </>
}

export default List;